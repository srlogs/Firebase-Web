import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor(public orderService: OrdersService) {}
  coffees = [
    'Americano',
    'Flat White',
    'Cappuccino',
    'Latte',
    'Espresso',
    'Machiato',
    'Mocha',
    'Hot Chocolate',
    'Tea',
  ];
  
  coffeeOrder : string[] = [];



  addCoffee(data : string) {
    this.coffeeOrder.push(data);
  }

  removeCoffee = (coffee: string) => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) this.coffeeOrder.splice(index, 1);
  };

  onSubmit() {
    this.orderService.form.value.coffeeOrder = this.coffeeOrder;
    let data = this.orderService.form.value;

    this.orderService.createCoffeeOrder(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
      console.log("data is stored");
    });
  }

  ngOnInit(): void {

  }
}
