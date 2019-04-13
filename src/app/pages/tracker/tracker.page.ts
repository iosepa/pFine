import { FilterPopoverPage } from './../filter-popover/filter-popover.page';
import { Storage } from '@ionic/storage';
import { CashService, Transaction, CashFlow } from './../../services/cash.service';
import { CashFlowModalPage } from './../cash-flow-modal/cash-flow-modal.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, Platform, IonList, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.page.html',
  styleUrls: ['./tracker.page.scss'],
})
export class TrackerPage implements OnInit {

  selectedCurrency: String;
  transactions: Transaction[] = [];
  allTransactions: Transaction[] = [];
  cashFlow = 0;

  @ViewChild('slidingList') slidingList: IonList;

  constructor(private modalCtrl: ModalController,
    private cashService: CashService, private plt: Platform, private storage: Storage, private popOverCtrl: PopoverController) { }

  ngOnInit() {
  }


  async ionViewWillEnter() {
    await this.plt.ready();
    this.loadTransactions();
  }

  async addCashFlow() {
    let modal = await this.modalCtrl.create({
      component: CashFlowModalPage,
      cssClass: 'modalCss'

    });
    modal.present();

    modal.onDidDismiss().then(res => {
      if (res && res.data) {
        this.loadTransactions();
      }
    })
  }

  async loadTransactions() {
    await this.storage.get('selected-currency').then(cur =>
      this.selectedCurrency = cur.toUpperCase());
    await this.cashService.getTransactions().then(trans => {
      this.transactions = trans;
      this.allTransactions = trans;
    });
    this.updateCashflow();
    //console.table(this.transactions)
  }

  async removeTransaction(i) {
    this.transactions.splice(i, 1);
    this.cashService.updateTransactions(this.transactions);
    await this.slidingList.closeSlidingItems();
    this.updateCashflow();//fix for small bug
  }

  updateCashflow() {
    let result: number = 0;
    this.transactions.map(a => {
      result += a.type == CashFlow.Expense ? - +a.value : +a.value;

    })
    this.cashFlow = result;
  }

  async openFilters(e){
    const popover = await this.popOverCtrl.create({
      component: FilterPopoverPage,
      event: e,  
    })
    await popover.present();

    popover.onDidDismiss().then(res => {
      if (res && res.data) {
        if (res.data.selected.name == 'All'){
          this.transactions = this.allTransactions;
        }
        else {
          this.transactions = this.allTransactions.filter(trans =>
            trans.category.name == res.data.selected.name)
        }
      }
    })
  }
}
