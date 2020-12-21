import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private firestore: AngularFirestore) {}
  form = new FormGroup({
    name : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required)
  })

  //Firestore CRUD actions example
  createCoffeeOrder(data : any) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('coffeeOrders')
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }

  saveUser(data : any) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('users')
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        )
    })
  }

  updateCoffeeOrder(data : any) {
    return this.firestore
      .collection('coffeeOrders')
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  getCoffeeOrders() {
    return this.firestore.collection('coffeeOrders').snapshotChanges();
  }

  deleteCoffeeOrder(data : any) {
    return this.firestore
      .collection('coffeeOrders')
      .doc(data.payload.doc.id)
      .delete();
  }

  
}
