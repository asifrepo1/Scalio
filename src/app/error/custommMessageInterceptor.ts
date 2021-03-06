import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize, retry} from 'rxjs/operators';
import { DataService } from '../data.service';


@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor(private dataService : DataService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Add Auth Token
    // In production you would get the token value from an auth service
    //const hardcodedToken = '1d38d128-0671-4121-8084-f6332a992a40';
    req = req.clone({
      setHeaders: {
        Authorization: `111`
      }
    }) 

    return next.handle(req)
      .pipe(
        // Retry on failure
        retry(2),

        // Handle errors
        catchError((error: HttpErrorResponse) => {
          // TODO: Add error handling logic here
         // alert(`HTTP Error: ${error.statusText}`);
          this.dataService.http404.next(error.statusText)
          return throwError(error);
         
          
        }),

        // PROFILING
        finalize(() => {
          const profilingMsg = `${req.method} "${req.urlWithParams}"`;
          console.log(profilingMsg);
        })
        );
  }
  
}