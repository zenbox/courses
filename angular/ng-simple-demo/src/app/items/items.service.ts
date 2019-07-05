import { Injectable } from '@angular/core';
import { Observable, Observer, from, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { flatMap, map, filter } from 'rxjs/operators';

import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private items: Item[] = [
    new Item(1, 'Item 1', '/favicon.ico'),
    new Item(2, 'Item 2', '/favicon.ico'),
    new Item(3, 'Item 3', '/favicon.ico')
  ];

  constructor() {}

  getItems(): Observable<Item[]> {
    // return this.getItemsByAjax();
    return this.getItemsByObservable();
  }

  getItem(id: number): Observable<Item> {
    return this.getItemByElements(id, this.getItemsByAjax());
  }

  /// different method of getting data as Observable
  getItemsByArray(): Item[] {
    return this.items.slice();
  }

  getItemsByOf(): Observable<Item[]> {
    return of(this.items);
  }

  getItemsByFrom(): Observable<Item> {
    return from(this.items);
  }

  getItemsByObservable(): Observable<Item[]> {
    return Observable.create((observer: Observer<Item[]>) => {
      setTimeout(() => {
        observer.next(this.items.slice(0, 1));
      }, 1000);

      setTimeout(() => {
        observer.next(this.items.slice(1, 2));
      }, 2000);

      setTimeout(() => {
        observer.next(this.items.slice(2, 3));
      }, 3000);

      setTimeout(() => {
        // observer.error('no more data');
      }, 4000);

      setTimeout(() => {
        observer.complete();
      }, 5000);
      
    });
  }

  getItemsByAjax(): Observable<Item[]> {
    return ajax.getJSON('/assets/data/items.json') as Observable<Item[]>;
  }

  getItemByElement(id: number, obsItem: Observable<Item>): Observable<Item> {
    return obsItem.pipe(filter(item => item.id === id));
  }

  getItemByElements(id: number, obsItems: Observable<Item[]>): Observable<Item>  {
    return obsItems.pipe(
      flatMap(items => items),
      filter(item => item.id === id)
    );
    /*       .pipe(
        map(items => items.filter(item => item.id === id))
      ); */
  }

  newItem(item: Item) {
    console.log('created item:', item);
  }

  updateItem(item: Item) {
    console.log('updated item:', item);
  }

  deleteItem(id: number) {
    console.log('deleted item with id:', id);
  }
}
