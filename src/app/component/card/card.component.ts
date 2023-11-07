import {Component} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // todo = this.store.collection('todo').valueChanges({idField: 'id'}) as Observable<any[]>;
  // inProgress = this.store.collection('inProgress').valueChanges({idField: 'id'}) as Observable<any[]>;
  // done = this.store.collection('done').valueChanges({idField: 'id'}) as Observable<any[]>;

  constructor() {
  }


}
