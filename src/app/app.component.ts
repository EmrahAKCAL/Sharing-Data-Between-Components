import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  inputValue: any
  msgParentToChild1: any[] = []
  msgParentToChild2: any[] = []
  msgChild1ToParent: any[] = []
  msgChild1ToChild2: any[] = []
  msgChild2ToParent: any[] = []
  msgChild2ToChild1: any[] = []

  sendToChild1() {
    this.msgParentToChild1.push(this.inputValue)
  }

  sendToChild2() {
    this.msgParentToChild2.push(this.inputValue)
  }

  eventChild1ToParent(msg: any) {
    this.msgChild1ToParent.push(msg)
  }

  eventChild1ToChild2(msg: any) {
    this.msgChild1ToChild2.push(msg)
  }

  eventChild2ToParent(msg: any) {
    this.msgChild2ToParent.push(msg)
  }

  eventChild2ToChild1(msg: any) {
    this.msgChild2ToChild1.push(msg)
  }

}
