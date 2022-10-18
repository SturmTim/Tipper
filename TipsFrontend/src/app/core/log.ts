import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {NotifierService} from "./notifier.service";
import {Observable} from "rxjs";
import { Buffer } from 'buffer';

@Injectable()
export class LogInterceptor implements HttpInterceptor {

  constructor(
    private notifierService: NotifierService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.notifierService.notify(`${request.method} ${Buffer.byteLength(JSON.stringify(request.body))} byte from ${request.url}`);
    return next.handle(request);
  }
}
