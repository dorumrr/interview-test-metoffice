import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  constructor( public http: HttpClient) { }

  dataApi (metric: string, location: string) {
    const url = `https://s3.eu-west-2.amazonaws.com/interview-question-data/metoffice/${metric}-${location}.json`;
    const options: object = { responseType: 'json' };
    return this.http.get(url, options);
  }

  getLocations() {
    return [
      { key: 'England', name: 'England', region: true },
      { key: 'Scotland', name: 'Scotland', region: true },
      { key: 'Wales', name: 'Wales', region: true },
      { key: 'dynamic', name: 'UK' } // England, Scotland and Wales => UK
    ];
  }

  getMetrics() {
    return [
      { key: 'Tmax', name: 'Max Temperature' },
      { key: 'Tmin', name: 'Min Temperature' },
      { key: 'Rainfall', name: 'Rainfall' }
    ];
  }

  getDates() {
    const years = [];
    const dates = [];
    for (let i = 0; i < 108; i++) {
      years.push(i + 1910);
    }
    years.map(year => {
      const months = {
        '1': 'January',
        '2': 'February',
        '3': 'March',
        '4': 'April',
        '5': 'May',
        '6': 'June',
        '7': 'July',
        '8': 'August',
        '9': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December',
      };
      Object.keys(months).map(k => {
        dates.push({
          title: `${months[k]} ${year}`,
          code: year + (Number(k) < 10 ? '0' + k : k),
          codeShort: year + '' + k,
          year,
          month: months[k]
        });
      });
    });
    return dates;
  }

}
