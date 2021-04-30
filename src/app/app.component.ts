import { Component } from '@angular/core';
import {Client} from './model/client.model';
import {Product} from './model/product.model';
import {Supplier} from './model/supplier.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  count = 0;
  prenom = 'Thomas';
  /**
   * Faire un input#text qui change la valeur de client.firstname
   */
  client = new Client(10, 'Jean', 'Jacques', true);
  product = new Product(10, 'Jean', 'Vetements', 'C\'est cool', 15,  true, 10);
  supplier = new Supplier(10, 'Pierre', 'Paul', 'Google', '123456789', 200000, true, 25);

  pColor = '';

  increment(): void {
    this.count++;
  }

  toggle(): void {
    this.client.active = !this.client.active;
    this.client.age = 4;
  }

  changePrenom(): void {
    this.prenom = 'Luc';
  }

  methode(): void {

  }
}
