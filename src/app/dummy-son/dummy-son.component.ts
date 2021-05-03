import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dummy-son',
  templateUrl: './dummy-son.component.html',
  styleUrls: ['./dummy-son.component.css']
})
export class DummySonComponent implements OnInit {

  @Input() perso!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
