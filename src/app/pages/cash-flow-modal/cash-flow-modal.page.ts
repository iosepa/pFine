import { Transaction, CashFlow, CashService } from './../../services/cash.service';
import { ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-flow-modal',
  templateUrl: './cash-flow-modal.page.html',
  styleUrls: ['./cash-flow-modal.page.scss'],
})
export class CashFlowModalPage implements OnInit {

  categories = [
    { name: 'Food', icon: 'pizza' },
    { name: 'Rent', icon: 'business' },
    { name: 'Shopping', icon: 'cart' },
    { name: 'Education', icon: 'school' },
    { name: 'Travel', icon: 'airplane' },
  ];

  now = new Date().toISOString();

  transaction: Transaction = {
    created_at: Date.now(),
    title: '',
    value: null,
    type: CashFlow.Expense,
    category: this.categories[0],
  }

  constructor(private modalCtrl: ModalController, private cashService: CashService, private toastCtrl: ToastController) {


  }

  ngOnInit() {

  }


  addTransaction() {
    this.transaction.type = +this.transaction.type;
    this.transaction.created_at = new Date(this.now).getTime();


    if (this.transaction.type === CashFlow.Income)
      this.transaction.category = { name: 'Income', icon: 'cash' };

    this.cashService.addTransaction(this.transaction).then(() => {
      let toast = this.toastCtrl.create({
        message: 'Transaction saved',
        duration: 2000
      });
      toast.then(toast => toast.present());
      this.modalCtrl.dismiss({ reload: true });
    });

  }

  close() {
    this.modalCtrl.dismiss();
  }
}
