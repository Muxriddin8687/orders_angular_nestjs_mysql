import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  http = inject(HttpClient);

  api = environment.api;
  deliverer = environment.deliverer;
  deliverer_id = sessionStorage.getItem(this.deliverer);
  showMessage: boolean = false;

  orders: Array<any> = [];
  text = '';


  setText(text: string) {
    this.text = text;
  }


  changeStatus(id: number, status: number) {
    let data = {
      id,
      status
    };

    this.http.post(this.api + 'order/changeStatus', data).subscribe(() => this.load());
  }


  load(){
    this.http.get(this.api + 'order/deliverer/' + this.deliverer_id).subscribe((res: any) => this.orders = res);
  }


  ngOnInit() {
    this.load();
  }
}
