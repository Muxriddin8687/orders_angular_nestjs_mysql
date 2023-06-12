import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  http = inject(HttpClient);

  api = environment.api;
  client = environment.client;
  client_id = sessionStorage.getItem(this.client);
  showMessage: boolean = false;

  orders: Array<any> = [];
  messages: Array<any> = [];
  text = '';


  setText(text: string) {
    this.text = text;
  }


  load(){
    this.http.get(this.api + 'order/client/' + this.client_id).subscribe((res: any) => this.orders = res);
    this.http.get(this.api + 'message/client/' + this.client_id).subscribe((res: any) => this.messages = res);
  }


  ngOnInit() {
    this.load();
  }


  deleteText(id: number) {
    this.http.delete(this.api + 'message/' + id).subscribe(() => this.load());
  }


  send(form: NgForm) {
    this.http.post(this.api + 'message', form.value).subscribe((res: any) => {
      this.load();
      this.showMessage = true;
      form.reset();
      setTimeout(() => this.showMessage = false, 7000);
    });
  }
}
