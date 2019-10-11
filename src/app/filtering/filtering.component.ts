import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import {
  trigger,
  state,
  style,
  query,
  transition,
  animate,
  stagger
} from '@angular/animations';


@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css'],
  animations: [
    trigger('filterAnimation', [
      transition(':increment', [
        query(':enter', [
          // style({ opacity: 0, width: '0px' }),
          style({ opacity: 0, transform: 'translateX(-100px)' }),
          stagger(100, [
            animate(250, style({ opacity: 1, transform: 'translateX(0px)' }))
          ])
        ])
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(100, [
            // animate(500, style({ opacity: 0, width: '0px' }))
            animate(250, style({ opacity: 0, transform: 'translateX(-100px)' }))
          ])
        ])
      ]),
    ])
  ]
})
export class FilteringComponent implements OnInit {
  private allItems = ['item1', 'item11', 'item2', 'item12', 'item21', 'item22', 'item3', 'item31', 'item33' ];

  queryControl = new FormControl('');
  results$: Observable<string[]>;
  totalItems = -1;

  constructor() { }

  ngOnInit() {
    this.results$ = this.queryControl.valueChanges.pipe(
      startWith(''),
      map(query => this.allItems.filter(i => i.indexOf(query) !== -1)),
      tap(items => this.totalItems = items.length)
    )
  }

}