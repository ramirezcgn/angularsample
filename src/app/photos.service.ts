import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Photo } from './models/photo';

@Injectable()
export class PhotosService {

  private basePath:string;

  constructor(private http: Http) {
    this.basePath = 'https://jsonplaceholder.typicode.com';
  }

  public getPhotos(): Observable<Photo[]> {
    return this.http.get(this.basePath + '/photos')
      .map(res => res.json());
  }
}
