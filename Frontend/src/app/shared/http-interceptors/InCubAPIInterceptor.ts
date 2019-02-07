import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable()
export class GithubAPIInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('api.github.com')) {
      const clone = req.clone({
        setHeaders: {
          'content-type': `application\json`
        }
      });
      return next.handle(clone);
    }
    return next.handle(req);
  }
}
