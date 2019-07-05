import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Item } from '../item.model';
import { ItemsService } from '../items.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  id: number = 0;
  item: Item;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private itemService: ItemsService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = parseInt(params['id']);
        this.itemService.getItem(this.id).subscribe(
          (item: Item) => {
            this.item = item;
          }
        );
      }
    );
  }

  update(form: NgForm) {
    console.log(form);
    if (form.valid) {
      this.itemService.updateItem(this.item);
      this.router.navigate(['items']);
    }
  }

}
