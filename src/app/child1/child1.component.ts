import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  @Input()
  msgFromParent: any
  @Input()
  msgFromChild2: any
  @Output()
  eventChild1ToParent: EventEmitter<any> = new EventEmitter<any>()
  @Output()
  eventChild1ToChild2: EventEmitter<any> = new EventEmitter<any>()
  inputValue: any

  constructor() {
  }

  sendToParent() {
    this.eventChild1ToParent.emit(this.inputValue)
  }

  sendToChild2() {
    this.eventChild1ToChild2.emit(this.inputValue)
  }

}
