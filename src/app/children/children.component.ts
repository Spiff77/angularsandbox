import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  @Output() out: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {}

  sendMessage(): void {
    console.log('test button');
    this.out.emit('Hello parent');
  }

}
