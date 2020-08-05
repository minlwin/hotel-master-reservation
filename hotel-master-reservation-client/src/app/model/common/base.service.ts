import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class BaseService<T>{

    protected abstract url(): string;

    constructor(protected http: HttpClient){}

    save(t: T){
        return this.http.post<T>(this.url(), t);
    }

    findAll(){
        return this.http.get<T[]>(this.url());
    }
}