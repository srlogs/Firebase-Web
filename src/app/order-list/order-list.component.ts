import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private ordersService : OrdersService) { }

  ngOnInit(): void {
    this.getCoffeeOrders();
  }

  coffeeOrders : any;

  getCoffeeOrders() {
    this.ordersService
      .getCoffeeOrders()
      .subscribe(res => (this.coffeeOrders = res));

  const deleteOrder = (data: any) => this.ordersService.deleteCoffeeOrder(data);

  const markCompleted = (data: any) => this.ordersService.updateCoffeeOrder(data);
  }
}
