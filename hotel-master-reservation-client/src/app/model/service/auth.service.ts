import { tap, catchError } from 'rxjs/operators';
import { BASE_API } from './../common/api-constants';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    private _isLogin = false;
    private _role;
    private _token;
    private  _loginUser;

    constructor(private http: HttpClient){}

    login(account: Account){
        return this.http.post<any>(`${BASE_API}/login`, account, {
            observe: 'events'
        }).pipe(
            tap(
                event => {
                    if(event.type === HttpEventType.Response){
                        let header = event.headers;
                        this._role = header.get('role');
                        this._token = header.get('Authorization');
                        this._isLogin = true;
                    }
                }
            ),
            catchError(error => throwError(error)),
        )
    }

    logOut(){
        this._isLogin = !this._isLogin;
        this._role = null;
        this._token = null;
    }

    get isLogin(){
        return this._isLogin;
    }

    get role(){
        return this._role;
    }

    get token(){
        return this._token;
    }
}