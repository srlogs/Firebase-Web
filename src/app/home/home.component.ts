import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public orderService : OrdersService) { }
  

  onSubmit() {
    let data = this.orderService.form.value;
    this.orderService.saveUser(data).then(res => {
      console.log("data entered successfully");
    })
  }

  ngOnInit(): void {
  }

}
