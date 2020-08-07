import { BASE_API } from './../common/api-constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { tap, map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class ImageUploadService{
    constructor(private http:HttpClient){}

    upload(file: File){
        let formData = new FormData();
        formData.append('file', file);
        return this.http.post<{path}>(`${BASE_API}/image-upload`, formData).pipe(map(data => data.path))
    }
}