import { BASE_API } from './../common/api-constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { tap, map } from 'rxjs/operators'
import { forkJoin } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ImageUploadService {
    constructor(private http: HttpClient) { }

    upload(...files: File[]) {
        return forkJoin(files.map(file => {
            let formData = new FormData();
            formData.append('file', file);
            return this.http.post<{ path }>(`${BASE_API}/image-upload`, formData).pipe(map(data => data.path))
        }))
    }
}