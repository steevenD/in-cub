import {ErrorHandler, Injectable} from '@angular/core';

import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {catchError} from 'rxjs/operators';

import {throwError} from 'rxjs/internal/observable/throwError';

import {Router} from '@angular/router';

import {Observable} from 'rxjs/internal/Observable';


@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor (private router: Router, private errorHandler: ErrorHandler) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((errorReponse: HttpErrorResponse) => {

        if (errorReponse.status === 401) {
          this.router.navigateByUrl('/login');

        } else if (errorReponse.status === 404) {
          this.router.navigateByUrl('/page404');

        } else {
          console.log(errorReponse);
        }
        return throwError(errorReponse);
      })
    );
  }
}
