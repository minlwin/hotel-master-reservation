import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class BaseService<T>{

    protected abstract url(): string;
    dataChanged = new Subject<T>();

    constructor(protected http: HttpClient){}

    save(t: T){
        return this.http.post<T>(this.url(), t);
    }

    findAll(){
        return this.http.get<T[]>(this.url());
    }

    findById(id){
        return this.http.get<T>(`${this.url()}/${id}`).pipe(
            tap(hotel => this.dataChanged.next(hotel))
        )
    }
}