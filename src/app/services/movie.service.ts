import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http : HttpClient) { }
  getMovies(){
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=1d8823e1e2ff6e4cc5cd3a8a4cf8a6fb');

  }
}
