import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/services/stocks.service';
import { UserService } from 'src/app/services/user.service';
import { AllocationInfo, allocationUpdate } from 'src/app/models/allocations';
import { StockTick, StockInfo } from 'src/app/models/stock';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-assets-grid',
  templateUrl: './assets-grid.component.html',
  styleUrls: ['./assets-grid.component.css']
})
export class AssetsGridComponent implements OnInit {
  rowData: Array<any>;
  recentTicks: any;
  private trash = new Subject();

  constructor(private stockService: StocksService, private userService: UserService) {}

  columnDefs = [
    { headerName: 'Stock', field: 'symbol', sortable: true, filter: true },
    { headerName: 'Amount', field: 'amount', sortable: true, filter: true },
    { headerName: 'Current Price', field: 'price', sortable: true, filter: true },
    { headerName: 'Total', field: 'total', sortable: true, filter: true },
    { headerName: 'Sell', field: 'sell', sortable: true, filter: true }
  ];

  ngOnInit() {
    this.fetchData();
  }
  ngOnDestroy() {
    this.trash.next();
    this.trash.complete();
  }

  fetchData() {
    let allocationData;

    let result: {data: Array<any>, subscription: Subject<any>} = this.userService.getAllocations();

    // always assign the data
    allocationData = result.data;
    this.addPrices(allocationData);
    //merge tempRowData with prices and assign new array to rowData
    // ...


    result.subscription.subscribe((data) => {
      allocationData = data.data;
      this.addPrices(allocationData);
      
      //merge tempRowData with prices and assign new array to rowData
      // ...
      
    });



    /*//local arrays
    let allocationData, currentTicks;
    //get allocations
    this.userService.getAllocations().subscription.subscribe( x => {
      allocationData = x.data 
      console.log('allocationData is:');
      console.log(allocationData);
      
      //get stock prices
      this.stockService.getStockList().subscribe((data: StockInfo[]) => {
        //map a simplified version of data object to currentTicks{}
        currentTicks = data.map(x => { 
          return { 
            name: x.lastTick.stock, 
            price: x.lastTick.price.toFixed(2) 
          } 
        });
        console.log('currentTicks is:');
        console.log(currentTicks);

      //after mergeArrays, allocationData will now have ticker price
      this.mergeArrays(allocationData, currentTicks);
      
      //now add the value of asset by multiplying
      allocationData.forEach(element => {
        element.total = (element.amount * element.price).toFixed(2);
      });
      console.log(allocationData);
      this.rowData = allocationData; 
      });
    });
*/
  }


  addPrices(allocationData){
    let currentTicks;
    this.stockService.getStockList().subscribe((data: StockInfo[]) => {
      //map a simplified version of data object to currentTicks{}
      currentTicks = data.map(x => { 
        return { 
          name: x.lastTick.stock, 
          price: x.lastTick.price.toFixed(2) 
        } 
      });
      console.log('currentTicks is:');
      console.log(currentTicks);

    //after mergeArrays, allocationData will now have ticker price
    this.mergeArrays(allocationData, currentTicks);
    
    //now add the value of asset by multiplying
    allocationData.forEach(element => {
      element.total = (element.amount * element.price).toFixed(2);
    });
    this.rowData = allocationData; 
    });
  }
  ngAfterViewInit() {
    this.fetchData();
  }

  mergeArrays(allocs, currTicks) {
    allocs.forEach((a) => {
      let found = currTicks.find(function(b) {
        return b.name === a.symbol;
      });
      a.price = found.price;
    });
  }
}
