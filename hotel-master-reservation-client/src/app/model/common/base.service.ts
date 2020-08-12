import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class BaseService<T>{

    protected abstract url(): string;
    protected _cache: T[];

    constructor(protected http: HttpClient){}

    save(t: T){
        return this.http.post<T>(this.url(), t)
            .pipe(tap(next => this.findAll().subscribe()));
    }

    findAll(){
        return this.http.get<T[]>(this.url()).pipe(tap(data => this._cache = data));
    }
}