import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FusionChartsModule } from "angular-fusioncharts";

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SideNavBarComponent } from "./side-nav-bar/side-nav-bar.component";
import { TopNavBarComponent } from "./top-nav-bar/top-nav-bar.component";
import * as FusionMaps from "fusioncharts/fusioncharts.maps";
import * as Charts from "fusioncharts/fusioncharts.charts";
import * as Widgets from "fusioncharts/fusioncharts.widgets";
import * as Gantt from "fusioncharts/fusioncharts.gantt";
import * as Powercharts from "fusioncharts/fusioncharts.powercharts";
import * as Msstackedcolumn2dsplinedy from "fusioncharts/fusioncharts.msstackedcolumn2dsplinedy";
import * as MultiCharts from "fusioncharts/fusioncharts.zoomline";
import * as USA from "fusioncharts/maps/fusioncharts.usa";

// import { AgmCoreModule } from "@agm/core";

FusionChartsModule.fcRoot(FusionCharts, FusionMaps, FusionTheme, Charts, Gantt, Widgets,
  Powercharts, Msstackedcolumn2dsplinedy, MultiCharts,USA)
@NgModule({
  declarations: [AppComponent, DashboardComponent, SideNavBarComponent, TopNavBarComponent],
  imports: [
    BrowserModule,
    FusionChartsModule,

    // AgmCoreModule.forRoot({
    //   // please get your own API key here:
    //   // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
    //   apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw',
    //   libraries: ['places']
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
