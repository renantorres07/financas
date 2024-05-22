import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  transactions: Transaction[] = []

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(
      (transactions) => {
        this.transactions = transactions
      },
      (err) => {
        console.error(err)
      }
    )
  }
}
