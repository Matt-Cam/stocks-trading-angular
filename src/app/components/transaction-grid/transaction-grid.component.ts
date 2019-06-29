import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { TransactionInfo } from 'src/app/models/transactionInfo';

@Component({
  selector: 'app-transaction-grid',
  templateUrl: './transaction-grid.component.html',
  styleUrls: ['./transaction-grid.component.css']
})
export class TransactionGridComponent implements OnInit {
  @Input() symbol: string = '';

  transactionList: Array<TransactionInfo> = [];

  columnDefs = [
    { headerName: 'Date', field: 'date', sortable: true, filter: true },
    {
      headerName: 'Side',
      field: 'side',
      sortable: true,
      filter: true,
      cellClass: function(params) {
        return params.value === 'BUY' ? 'rag-green' : 'rag-red';
      }
    },
    { headerName: 'Symbol', field: 'symbol', sortable: true, filter: true },
    { headerName: 'Amount', field: 'amount', sortable: true, filter: true },
    { headerName: 'Price', field: 'tickPrice', sortable: true, filter: true },
    { headerName: 'Cost', field: 'cost', sortable: true, filter: true }
  ];

  //DI of the transaction service
  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.fetchData();
  }

  refreshTransactionList() {
    this.fetchData();
  }

  changemade() {
    this.transactionList = null;
  }
  fetchData() {
    this.transactionService.getTransactionList(this.symbol).subscribe((data) => {
      this.transactionList = data;
    });
  }
}
