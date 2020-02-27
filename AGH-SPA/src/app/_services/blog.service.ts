import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../_models/blog';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }


  getBlog(id: number): Observable<Blog> {
    return this.http.get<Blog>(this.baseUrl + 'blog/' + id);
  }

}
