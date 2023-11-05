import {Component} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {Task} from "@angular/compiler-cli/ngcc/src/execution/tasks/api";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  todo = this.store.collection('todo').valueChanges({idField: 'id'}) as Observable<Task[]>;
  inProgress = this.store.collection('inProgress').valueChanges({idField: 'id'}) as Observable<Task[]>;
  done = this.store.collection('done').valueChanges({idField: 'id'}) as Observable<Task[]>;

  constructor(private store: AngularFirestore) {
  }


}
