import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Item } from '../item.model';
import { ItemsService } from '../items.service';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  id: number = 0;
  item: Item;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private itemService: ItemsService,
              private loginService: LoginService) { }

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

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDelete() {
    this.itemService.deleteItem(this.id);
    this.router.navigate(['items']);
  }

  canEdit() {
    return this.loginService.canEdit;
  }
}
