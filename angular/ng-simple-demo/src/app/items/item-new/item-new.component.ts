import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../item.model';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.css']
})
export class ItemNewComponent implements OnInit {

  @ViewChild('idInput') idInput: ElementRef;

  constructor(private router: Router,
              private itemService: ItemsService) { }

  ngOnInit() {
  }

  onSave(nameInput: HTMLInputElement) {
    console.log(this.idInput.nativeElement.value, nameInput.value);
    const item = new Item(this.idInput.nativeElement.value, nameInput.value, '/favicon.ico');
    this.itemService.newItem(item);
    this.router.navigate(['items']);
  }

}
