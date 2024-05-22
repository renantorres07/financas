import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
  amount: number = 0
  type: string = 'income'
  description: string = ''

  constructor(private transactionService: TransactionService) { }

  addTransaction(): void {
    const transaction: Transaction = {
      userId: '',
      amount: this.amount,
      type: this.type,
      description: this.description
    }

    this.transactionService.addTransaction(transaction).subscribe(
      (res) => {
        console.log('Transação adicionada', res)
      },
      (err) => {
        console.error(err)
      }
    )
  }
}
