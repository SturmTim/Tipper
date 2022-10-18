import {Component, OnInit} from '@angular/core';
import {NotifierService} from "./core/notifier.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackbarComponent} from "./core/snackbar/snackbar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private notifierService: NotifierService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.notifierService.listen().subscribe((message: string) => {
      if(message.includes('GET')){
        this._snackBar.openFromComponent(
          SnackbarComponent,{
            verticalPosition: 'bottom',
            duration: 5000,
            panelClass: ['green'],
            data: {message: message, icon: 'check_circle'}
          }
        );
      }
      else if(message.includes('PUT')){
        this._snackBar.openFromComponent(
          SnackbarComponent,{
            verticalPosition: 'bottom',
            panelClass: ['blue'],
            duration: 5000,
            data: {message: message, icon: 'info'}
          }
        );
      }else{
        this._snackBar.openFromComponent(
          SnackbarComponent,{
            verticalPosition: 'top',
            panelClass: ['red'],
            duration: 5000,
            data: {message: message, icon: 'error'}
          }
        );
      }
    })
  }


}
