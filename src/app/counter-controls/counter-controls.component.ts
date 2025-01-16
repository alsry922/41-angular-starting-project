import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {increment, init} from "../store/counter.actions";

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent implements OnInit {
  constructor(private store: Store) {
    // this.store.dispatch(init());
  }
  ngOnInit(): void {
    this.store.dispatch(init());
  }

  increment() {
    this.store.dispatch(increment({value: 2}));
  }

  decrement() {
    this.store.dispatch(increment({value: -2}));
  }
}
