import { Component, OnInit } from '@angular/core';
import { IToastPayload, ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private toast: ToastService){ }
  toastPayload!: IToastPayload;
  title = 'e-auction-web';

  ngOnInit(): void {
    // this.toastPayload={
    //   message: 'A new Bid with amount 1000 has been added for product oil painting by user Sooraj.',
    //   title: 'Bid Placed'
    // };

    this.toastPayload={
      message: '',
      title: 'Welcome to E-Auction!'
    };
    this.toast.showToast(this.toastPayload)
  }
}
