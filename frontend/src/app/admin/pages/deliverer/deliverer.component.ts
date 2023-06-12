import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-deliverer',
  templateUrl: './deliverer.component.html',
  styleUrls: ['./deliverer.component.scss']
})
export class DelivererComponent {
  http = inject(HttpClient);
  api = environment.api + 'deliverer';

  deliverer: Array<any> = [];
  selectedDeliverer: any = {
    id: 0,
    fullname: '',
    phone: '',
    birthday: '',
    passport_seria: '',
    address: '',
  };


  load() {
    this.http.get(this.api).subscribe((res: any) => this.deliverer = res);
  }


  ngOnInit() {
    this.load();
  }


  send(form: NgForm) {
    if(this.selectedDeliverer.id == 0)    
      this.http.post(this.api, this.selectedDeliverer).subscribe(() => this.load());
    else
      this.http.patch(this.api + '/' + this.selectedDeliverer.id, this.selectedDeliverer).subscribe(() => this.load());

    form.reset();
    this.selectedDeliverer = {
      id: 0,
      fullname: '',
      phone: '',
      birthday: '',
      passport_seria: '',
      address: '',
    };
  }


  update(item: any) {
    this.selectedDeliverer = {...item};
  }


  delete(id: number) {
    this.http.delete(this.api + '/' + id).subscribe(() => this.load());
  }
}
