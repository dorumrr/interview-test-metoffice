# MetOffice (interview test)

This project was build using [Angular CLI 7.1.0](https://github.com/angular/angular-cli), [Angular Material](https://material.angular.io/), [Chart.js](https://www.chartjs.org/)

## See it in action

GitHub Pages: [https://dorumrr.github.io/interview-test-metoffice/](https://dorumrr.github.io/metoffice/)

## Development server

Clone the project, install dependencies, run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Production Build

Run `ng run build` to build the project. The build artifacts will be stored in the `dist/metoffice` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

---

## Notes

For future availability of this test, all the .json files (simulated data) have been stored locally and no longer retrieved from interviewer's AWS S3.

It wasn't mntioned, on purpose, but there was no agregated data for UK, as is actually composed of all three regions and would have been useless for the purpose of this test, therefore the data had to be be processed in the controller to be displayed correctly.

---

[Doru Moraru](https://doru-moraru.com)

---
---
---

### TEST SPECS

Your mission is to create a simple Angular.io app using Angular Material that displays monthly weather data as a chart.

The source data comes from the UK metoffice here:

https://www.metoffice.gov.uk/climate/uk/summaries/datasets#Yearorder

For convenience we’ve scraped this into JSON files on AWS S3

There are three metrics: Tmax (max temperature), Tmin (min temperature) and Rainfall (mm), and 4 locations: UK, England, Scotland, Wales. The url on S3 is:

https://s3.eu-west-2.amazonaws.com/--------------------/metoffice/{metric}-{location}.json

E.g: https://s3.eu-west-2.amazonaws.com/--------------------/metoffice/Rainfall-England.json

(Note that Jan=1, Dec=12)

The bare minimum app will fetch the data on-demand from S3 to show a single metric for a single geographic region between two user-supplied dates e.g Max Temp for the UK between two dates. The graph should update automatically when the dates are changed. The app must be responsive i.e it should still work on small screens.

The app should be runnable out of the box, but deployment is optional.