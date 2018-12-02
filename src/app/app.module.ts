import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  // MatAutocompleteModule,
  // MatBadgeModule,
  // MatBottomSheetModule,
  // MatButtonModule,
  // MatButtonToggleModule,
  // MatCardModule,
  // MatCheckboxModule,
  // MatChipsModule,
  // MatDatepickerModule,
  // MatDialogModule,
  // MatDividerModule,
  // MatExpansionModule,
  // MatGridListModule,
  // MatIconModule,
  // MatInputModule,
  // MatListModule,
  // MatMenuModule,
  // MatNativeDateModule,
  // MatPaginatorModule,
  // MatProgressBarModule,
  // MatProgressSpinnerModule,
  // MatRadioModule,
  // MatRippleModule,
  MatSelectModule,
  // MatSidenavModule,
  // MatSliderModule,
  // MatSlideToggleModule,
  // MatSnackBarModule,
  // MatSortModule,å
  // MatStepperModule,
  // MatTableModule,
  // MatTabsModule,
  // MatToolbarModule,
  // MatTooltipModule,
  // MatTreeModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MonthConverterPipe } from './pipes/month-converter.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MonthConverterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,

    MatFormFieldModule,
    // MatAutocompleteModule,
    // MatBadgeModule,
    // MatBottomSheetModule,
    // MatButtonModule,
    // MatButtonToggleModule,
    // MatCardModule,
    // MatCheckboxModule,
    // MatChipsModule,
    // MatStepperModule,
    // MatDatepickerModule,
    // MatDialogModule,
    // MatDividerModule,
    // MatExpansionModule,
    // MatGridListModule,
    // MatIconModule,
    // MatInputModule,
    // MatListModule,
    // MatMenuModule,
    // MatNativeDateModule,
    // MatPaginatorModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatRadioModule,
    // MatRippleModule,
    MatSelectModule,
    // MatSidenavModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // MatSnackBarModule,
    // MatSortModule,
    // MatTableModule,
    // MatTabsModule,
    // MatToolbarModule,
    // MatTooltipModule,
    // MatTreeModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
