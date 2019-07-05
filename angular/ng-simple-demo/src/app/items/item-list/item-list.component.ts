import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../item.model';
import { ItemsService } from '../items.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, OnDestroy {
  items: Item[] = [];
  subs: Subscription;

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.subs = this.itemsService.getItems().subscribe(
      data => {
        console.log(data);
        this.items = this.items.concat(data);
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('complete');
      }
    );
  }

  ngOnDestroy() {
    if (this.subs && !this.subs.closed) {
      this.subs.unsubscribe();
    }
  }
}
