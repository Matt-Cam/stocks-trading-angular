import { Component, OnInit, Input, AfterViewInit, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-stock-graph',
  templateUrl: './stock-graph.component.html',
  styleUrls: ['./stock-graph.component.css']
})
export class StockGraphComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() symbol: string;
  @Input() isHomePage: boolean;
  options: any;
  graphViewMode: string = 'today';

  constructor(private stockService: StocksService) {}

  ngOnInit() {
    this.initializeOptionsObject();
    this.updateStockPrices(this.symbol, this.graphViewMode);
  }

  ngAfterViewInit(): void {
    //MATT: I don't think I need this, but it was suggested to be used for 3rd party libraries
  }

  ngOnChanges(changes): void {
    //make sure following lines don't run on initial page load
    if (!changes.symbol.firstChange) {
      this.updateStockPrices(this.symbol, this.graphViewMode);
    }
  }

  //triggered when dropdown changes
  onChange(eventVal) {
    this.graphViewMode = eventVal;
    this.updateStockPrices(this.symbol, this.graphViewMode);
  }

  updateStockPrices(stockSymbol: string, mode: string) {
    //tempData will hold values that will eventually be pushed to options object
    var tempData = {
      detailed: [],
      aggregated: []
    };
    this.options.series = [];
    this.stockService.getStockPrices(stockSymbol, mode).subscribe((x: { detailed: Array<any>; aggregated: Array<any> }) => {
      /*
      OLD CODE
      x.aggregated.forEach((element: { date: Date; price: number }) => {
        tempData.aggregated.push(element);
      });
      x.detailed.forEach((element: { date: Date; price: number }) => {
        tempData.detailed.push(element);
      });
      OLD CODE
*/
tempData = x;
      //push detailed series onto the series array
      this.options.series.push({
        name: 'detailed',
        data: tempData.detailed.map((obj) => {
          return {
            x: new Date(obj.date),
            y: obj.price
          };
        })
      });

      //push detailed series onto the series array
      this.options.series.push({
        name: 'aggregated',
        data: tempData.aggregated.map((obj) => {
          return {
            x: new Date(obj.date),
            y: obj.price
          };
        })
      });
  
      //place the chart in our HTML
      Highcharts.chart('chartContainer', this.options);
    });

  } //end of updateStockPrices()



  //initialize our Options object to be passed to HighCharts
  initializeOptionsObject() {
    this.options = {
      chart: {
        type: 'line',
        height: 400
      },
      title: {
        text: 'Sample Scatter Plot'
      },
      credits: {
        enabled: false
      },
      tooltip: {
        formatter: function() {
          return 'x: ' + Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x) + ' y: ' + this.y.toFixed(2);
        }
      },
      xAxis: {
        type: 'datetime',
        labels: {
          formatter: function() {
            return Highcharts.dateFormat('%e %b %y', this.value);
          }
        }
      },
      series: []
    };
  }
}
