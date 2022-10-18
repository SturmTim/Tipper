import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {NotifierService} from "./notifier.service";
import {catchError, Observable, throwError} from "rxjs";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private notifierService: NotifierService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
        this.notifierService.notify(`Http failure response for : ${error.url} ${JSON.stringify(error.error)}`);
        return throwError(error);
      })
    )
  }
}
