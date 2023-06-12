import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  http = inject(HttpClient);
  api = environment.api + 'client';
  router = inject(Router);

  showError: boolean = false;
  date = new Date();

  send(form: NgForm) {
    this.http.post(this.api, form.value).subscribe((res) => {
      this.showError = true;
      setTimeout(() => {
        this.router.navigateByUrl("/client/sigin");
      }, 3000);
    });
  }
}
