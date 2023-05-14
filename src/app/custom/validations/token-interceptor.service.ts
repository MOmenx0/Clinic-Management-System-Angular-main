import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable ,Injector} from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor{

  constructor(public authService:AuthService) { }
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> 
  {
    
    let tokenizedReq=req.clone({
      setHeaders:{
        Authorization:`Bearer ${this.authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
