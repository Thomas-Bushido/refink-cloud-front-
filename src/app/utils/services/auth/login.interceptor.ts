import {  HttpRequest,  HttpHandlerFn } from '@angular/common/http';
import { HttpInterceptorFn } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  
   let token: string | null = null;

  if (typeof window !== 'undefined') { 
    token = localStorage.getItem('token');
  }
  
  if (token != null){
     
    const cloned = req.clone({
      headers: req.headers.set('Authorization', "Bearer " + token),
    })

    return next(cloned)
  
  }

  return next(req);
};
 
