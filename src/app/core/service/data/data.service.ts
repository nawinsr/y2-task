import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   chartData = [
    {
      label: "Mon",
      value: "290"
    },
    {
      label: "Tue",
      value: "260"
    },
    {
      label: "wed",
      value: "10"
    },
    {
      label: "thu",
      value: "140"
    },
    {
      label: "fri",
      value: "80"
    },
    {
      label: "sat",
      value: "200"
    },

  ];

  chartIncome = [
    {
      label: "Mon",
      value: "2900"
    },
    {
      label: "Tue",
      value: "2600"
    },
    {
      label: "wed",
      value: "100"
    },
    {
      label: "thu",
      value: "1400"
    },
    {
      label: "fri",
      value: "800"
    },
    {
      label: "sat",
      value: "2000"
    },

  ];

  ld= {
    "chart": {
      "theme": "fusion",
      "caption": "Total Sales",
      "subCaption": "Last week",
      "xAxisName": "Day",
      "yAxisName": "No. of Visitors",
      "lineThickness": "2"
    },
    "data": [{
        "label": "Mon",
        "value": "15123"
      },
      {
        "label": "Tue",
        "value": "14233"
      },
      {
        "label": "Wed",
        "value": "23507"
      },
      {
        "label": "Thu",
        "value": "9110"
      },
      {
        "label": "Fri",
        "value": "15529"
      },
      {
        "label": "Sat",
        "value": "20803"
      },
      {
        "label": "Sun",
        "value": "19202"
      }
    ],
    "trendlines": [{
      "line": [{
        "startvalue": "18500",
        "color": "#29C3BE",
        "displayvalue": "",
        "valueOnRight": "1",
        "thickness": "2"
      }]
    }]
  }
mapData={
  "chart": {
      "caption": "Global Population",
      "theme": "fusion",
      "formatNumberScale": "0",
      "numberSuffix": "M"
  },
  "colorrange": {
      "color": [
          {
              "minvalue": "0",
              "maxvalue": "100",
              "code": "#D0DFA3",
              "displayValue": "< 100M"
          },
          {
              "minvalue": "100",
              "maxvalue": "500",
              "code": "#B0BF92",
              "displayValue": "100-500M"
          },
          {
              "minvalue": "500",
              "maxvalue": "1000",
              "code": "#91AF64",
              "displayValue": "500M-1B"
          },
          {
              "minvalue": "1000",
              "maxvalue": "5000",
              "code": "#A9FF8D",
              "displayValue": "> 1B"
          }
      ]
  },
  "data": [
      {
          "id": "NA",
          "value": "515"
      },
      {
          "id": "SA",
          "value": "373"
      },
      {
          "id": "AS",
          "value": "3875"
      },
      {
          "id": "EU",
          "value": "727"
      },
      {
          "id": "AF",
          "value": "885"
      },
      {
          "id": "AU",
          "value": "32"
      }
  ]
}
  constructor() { }
  getTotalSaleData(){
    return this.chartData
  }
  getTotalInc(){
    return this.chartIncome
  }

  getLineData(){
    return this.ld

  }
  getMapData(){
    return this.mapData

  }
}
