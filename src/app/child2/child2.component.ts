import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  @Input()
  msgFromParent: any
  @Input()
  msgFromChild1: any
  @Output()
  eventChild2ToParent: EventEmitter<any> = new EventEmitter<any>()
  @Output()
  eventChild2ToChild1: EventEmitter<any> = new EventEmitter<any>()
  inputValue: any

  constructor() {
  }

  sendToParent() {
    this.eventChild2ToParent.emit(this.inputValue)
  }

  sendToChild1() {
    this.eventChild2ToChild1.emit(this.inputValue)
  }
}
