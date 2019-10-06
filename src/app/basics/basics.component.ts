import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css'],
  animations: [
    trigger('clickToMove', [
      state('initial', style({ position: 'relative', left: '0px' })),
      state('toTheRight', style({ position: 'relative', left: '200px' })),
      transition('initial <=> toTheRight', [ animate('500ms ease-out') ]),
      
    ])
  ]
})
export class BasicsComponent implements OnInit {
  state = 'initial';

  constructor() { }

  ngOnInit() {
  }

  togglePosition() {
    this.state = this.state === 'initial' ? 'toTheRight' : 'initial';
  }

}