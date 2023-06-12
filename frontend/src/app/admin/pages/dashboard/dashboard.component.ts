import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  http = inject(HttpClient);
  api = environment.api;

  orders: Array<any> = [];
  messages: Array<any> = [];
  deliverer: Array<any> = [];

  selectMessage: any;
  autoSelectValue = 0;
  text = '';


  setText(text: string) {
    this.text = text;
  }


  setMessageId(item: any) {
    this.selectMessage = item;
  }


  load(){
    this.http.get(this.api + 'order/active').subscribe((res: any) => this.orders = res);
    this.http.get(this.api + 'message/active').subscribe((res: any) => this.messages = res);
    this.http.get(this.api + 'deliverer').subscribe((res: any) => this.deliverer = res);
  }


  ngOnInit() {
    this.load();
  }


  sendOrder(form: NgForm) {
    this.http.post(this.api + 'order', form.value).subscribe(() => this.load());
  }


  archiveOrder(id: number) {
    let data = {
      id,
      status: 4
    };

    this.http.post(this.api + 'order/changeStatus', data).subscribe(() => this.load());
  }


  deleteOrder(id: number) {
    this.http.delete(this.api + 'order/' + id).subscribe(() => this.load());
  }


  deleteMessage(id: number) {
    this.http.delete(this.api + 'message/' + id).subscribe(() => this.load());
  }

}
