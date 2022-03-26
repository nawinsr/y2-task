import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/service/data/data.service';
import { Maps } from '@syncfusion/ej2-angular-maps';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataSource: Object;
  incomeData:Object
  lineData:Object;
  mapData:Object;
  zoom: number = 3;

  markers = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: false,
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  options:any
  constructor(private dataService:DataService) {


  }
  ngOnInit(): void {
    this.options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 12
  };
    const dataSource = {
      chart: {
        //Set the theme for your chart
        theme: "fusion",
      },
      // Chart Data - from step 2
      data: this.dataService.getTotalSaleData()
    };
    this.dataSource = dataSource;
    const dataSource1 = {
      chart: {
        theme: "fusion",
      },
      data: this.dataService.getTotalInc()
    };
    this.incomeData=dataSource1


    this.lineData=this.dataService.getLineData()

// this.mapData=
}
}





