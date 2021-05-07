import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C22CreateLinerScaleComponent } from './c22-create-liner-scale/c22-create-liner-scale.component';
import { SimpleRectacgleComponent } from './simple-rectacgle/simple-rectacgle.component';
import { C23BrandScalesComponent } from './c23-brand-scales/c23-brand-scales.component';
import { C25BarChartComponent } from './c25-bar-chart/c25-bar-chart.component';
import { C42TransitionsComponent } from './c42-transitions/c42-transitions.component';

@NgModule({
  declarations: [
    AppComponent,
    C22CreateLinerScaleComponent,
    SimpleRectacgleComponent,
    C23BrandScalesComponent,
    C25BarChartComponent,
    C42TransitionsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
