import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { TransactionInfo } from '../models/transactionInfo';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { UserService } from './user.service';
import { map, filter as rxFilter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transactions: Array<TransactionInfo>;
  private transactionSubscription = new Subject<any>();

  get transactionUrl() {
    return environment.serverUrl + 'transactions';
  }

  constructor(private http: HttpClient, private userService: UserService) {}

  makeTransaction(transactionInfo: TransactionInfo) {
    this.http
      .post(this.transactionUrl, transactionInfo)
      .toPromise()
      .then((response: { transaction: any; allocations: Array<any>; liquidity: number }) => {
        this.addTransaction(response.transaction);
        this.userService.updateAllocations(response.allocations, false, response.transaction.symbol);
      });
  }

  addTransaction(transaction) {
    if (this.transactions) {
      this.transactions.push(transaction);
      this.transactionSubscription.next({
        symbol: transaction.symbol,
        data: this.transactions
      });
    }
  }

  getTransactions(): { data: Array<TransactionInfo>; subscription: Subject<any> } {
    if (!this.transactions) {
      this.http.get(this.transactionUrl).subscribe((data: Array<TransactionInfo>) => {
        this.transactions = data;
        this.transactionSubscription.next({
          data: this.transactions
        });
      });
    }
    return {
      subscription: this.transactionSubscription,
      data: this.transactions
    };
  }

  getTransactionsForSymbol(symbol) {
    let subscription = this.getTransactions().subscription.pipe(
      rxFilter((response: any) => {
        return response.symbol === symbol;
      })
    );
    return {
      subscription: subscription,
      data: this.transactions
    };
  }


}
