import { Component, ViewEncapsulation, OnInit, HostListener } from '@angular/core';
import { SharedService } from './services/shared.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class AppComponent implements OnInit {

  title = 'MetOffice';
  dates; // holds date selector options
  chart; // holds chartJS instance
  chartData = []; // holds chartJS data
  showSeparator: Boolean = false;
  metrics; // holds metrics
  locations; // holds locations

  // initial selectors position
  selected = {
    startDate: '201701',
    endDate: '201712',
    metric: 'Tmax',
    // location: 'England'
    location: 'UK'
  };

  constructor(private shared: SharedService) { }

  // watch for resize
  @HostListener('window:resize') onResize() {
    if (window.innerWidth < 950) {
      this.showSeparator = true;
    } else {
      this.showSeparator = false;
    }
  }

  // create the chart instance
  drawChart(labels, datasets) {
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart('canvasChart', {
      type: this.selected.startDate === this.selected.endDate ? 'bar' : 'line', // bar for single month, line for range
      data: { labels, datasets },
      options: {
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Month/Year'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: this.selected.metric === 'Rainfall' ? 'Millimeters' : 'Temperature'
            }
          }],
        }
      }
    });
    // moves data from chart to chartData, so we can later destroy the chart instance
    this.chartData = this.chart;
  }

  updateData(param) {
    // rudimentary validation
    if (param === 'endDate' && this.selected.startDate > this.selected.endDate) {
      this.selected.startDate = this.selected.endDate;
    } else if (param === 'startDate' && this.selected.startDate > this.selected.endDate) {
      this.selected.endDate = this.selected.startDate;
    }
    this.getData(this.selected.metric, this.selected.location);
  }

  getData(metric: string, location: string) {
    const chartDatasets = [];
    const chartLabels = [];
    const promises = [];

    if (this.selected.location === 'dynamic') {
      // preparing data combining from multiple regions
      Object.values(this.locations)
        .filter(x => x['region'] === true)
        .map((m) => {
          return promises.push(
            new Promise((resolve, reject) => {
              this.shared.dataApi(metric, m['key']).subscribe(data => {
                if (data) {
                  resolve({ [m['key']]: data });
                } else {
                  reject('no-data');
                }
              });
            }));
        });
    } else {
      // preparing data from a single location
      promises.push(
        new Promise((resolve, reject) => {
          this.shared.dataApi(metric, location).subscribe(data => {
            if (data) {
              resolve({ [location]: data });
            } else {
              reject('no-data');
            }
          });
        })
      );
    }

    Promise.all(promises).then(data => {
      // all data has been collected
      data.map((dataset, i) => {
        const theLocation = Object.keys(dataset)[0];
        const theLocationData = data[i][theLocation];
        const colors = ['#8E44AD', '#5DADE2', '#45B39D', '#C0392B'];

        // define dataset template
        const thisDataset = {
          data: [],
          label: null,
          borderColor: colors[i],
          borderWidth: 1,
          backgroundColor: colors[i],
          fill: false
        };

        // generate datasets
        theLocationData.map((val, j) => {
          const curDataDate = Number(`${val.year}${val.month < 10 ? '0' + val.month : val.month}`);
          if (curDataDate >= Number(this.selected.startDate) && curDataDate <= Number(this.selected.endDate)) {
            thisDataset.data.push(val.value);
            const month_temp = `${val.month < 10 ? '0' + val.month : val.month}/${val.year}`;
            if (!chartLabels.includes(month_temp)) {
              chartLabels.push(month_temp);
            }
          }
          if (j === theLocationData.length - 1) {
            thisDataset.label = theLocation;
            chartDatasets.push(thisDataset);
          }
        });
      });

    }).catch(e => {
      // error
      console.error('Oh, no!', e);
    }).finally(() => {
      // pass processed data to drawChart
      this.drawChart(chartLabels, chartDatasets);
    });
  }

  ngOnInit() {
    this.dates = this.shared.getDates();
    this.locations = this.shared.getLocations();
    this.metrics = this.shared.getMetrics();
    this.getData(this.selected.metric, this.selected.location);
  }

}
