import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {
  items: Observable<any[]>;
  
  constructor(firestore: AngularFirestore) { 
    this.items = firestore.collection('items').valueChanges();
  }

  ngOnInit(): void {
  }

}
