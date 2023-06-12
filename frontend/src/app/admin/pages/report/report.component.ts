import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  http = inject(HttpClient);
  fb = inject(FormBuilder);
  api = environment.api;

  filterForm = this.fb.group({
    start_date: null,
    end_date: null,
    deliverer_id: 0
  });
  order: any;
  deliverer: any;
  text: string = '';


  setText(text: string) {
    this.text = text;
  }


  load () {
    this.http.get(this.api + 'order/archive').subscribe(res => this.order = res);
    this.http.get(this.api + 'deliverer').subscribe(res => this.deliverer = res);
  }


  ngOnInit(): void {
    this.load();
  }


  send() {
    this.http.post(this.api + 'order/filter', this.filterForm.value)
             .subscribe((res) => this.order = res );
  }
}
