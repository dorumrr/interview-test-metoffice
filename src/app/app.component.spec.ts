import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatSelectModule } from '@angular/material';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MatSelectModule,
        BrowserAnimationsModule
      ],
      providers: [
        HttpClient,
        HttpHandler
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'MetOffice'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('MetOffice');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('MetOffice');
  });

  it(`should have a default startDate, endDate, metric and location set`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.selected.startDate.length).toBeGreaterThan(0);
    expect(app.selected.endDate.length).toBeGreaterThan(0);
    expect(app.selected.metric.length).toBeGreaterThan(0);
    expect(app.selected.location.length).toBeGreaterThan(0);
  });

});
