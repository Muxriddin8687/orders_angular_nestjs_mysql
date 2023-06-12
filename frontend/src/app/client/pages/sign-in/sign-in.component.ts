import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  http = inject(HttpClient);
  router = inject(Router);

  api = environment.api + 'auth/signIn';
  client = environment.client;
  showError: boolean = false;


  send(form: NgForm) {
    this.http.post(this.api, form.value).subscribe((res: any) => {
      if (res == false) {
        this.showError = true;
        setTimeout(() => this.showError = false, 5000);
      } else {
        sessionStorage.setItem(this.client, res[0]['id']);
        this.router.navigateByUrl("/client/orders");
      }
    });
  }
}
