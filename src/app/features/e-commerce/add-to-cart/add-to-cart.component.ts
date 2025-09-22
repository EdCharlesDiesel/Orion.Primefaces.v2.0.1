import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  templateUrl: './add-to-cart.component.html',
  standalone: true,
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  items: MenuItem[] = [];

  cardMenu: MenuItem[] = [];

  ngOnInit() {
    this.items = []

  }

}
