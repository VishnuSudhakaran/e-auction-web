import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

export interface IToastPayload {
  message: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) {}

  showToast(toast: IToastPayload) {
    this.toastr.info(
      toast.message,
      toast.title
    );
  }
}
