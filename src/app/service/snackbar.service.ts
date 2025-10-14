import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(public snackBar: MatSnackBar) { }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }


}
