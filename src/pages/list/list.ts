import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { DrugProvider } from '../../providers/drug/drug.provider';
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [DrugProvider]
})
export class ListPage {
  items: any[] = [];
  allItems: any[];
  page: number = 1;
  itemsToShow: number = 10;
  myInput: string = '';
  modelChanged: Subject<string> = new Subject<string>();


  constructor(public navCtrl: NavController, public navParams: NavParams, public drugProvider: DrugProvider) {}

  ionViewDidEnter() {
    this.drugProvider.getAll().subscribe( data => {
      this.allItems = data
      this.items = this.items.concat(this.allItems.slice(0, 10));
    });
  }

  getItems() {
    if (this.myInput === "") {
      this.page = 1;
      this.items = [];
      this.items = this.items.concat(this.allItems.slice(0, 10));
    } else {
      this.items = this.allItems.filter((item) => {
        return item.name.toLowerCase().includes(this.myInput.toLowerCase());
      });
    }
  }

  onCancel() {
      this.page = 1;
      this.items = [];
      this.items = this.items.concat(this.allItems.slice(0, 10));
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.items = this.items.concat(this.allItems.slice(this.page * this.itemsToShow, (this.page + 1) * this.itemsToShow));
      this.page++;
      infiniteScroll.complete();
    }, 500);
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
