import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { TransactionInfo } from '../models/transactionInfo';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { UserService } from './user.service';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transactions: Array<any>;
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

  getTransactionList(symb?: string): Observable<Array<TransactionInfo>> {
    if (symb) {
      return this.http.get(this.transactionUrl).pipe(
        map((x: Array<TransactionInfo>) => {
          return x.map((s) => new TransactionInfo(s)).filter((z) => z.symbol === symb);
        })
      );
    } else {
      return this.http.get(this.transactionUrl).pipe(
        map((x: Array<TransactionInfo>) => {
          return x.map((s) => new TransactionInfo(s));
        })
      );
    }
  }
}
