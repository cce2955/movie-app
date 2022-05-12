import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MovieDto } from '../models/movie';
import { of, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl = "https://api.themoviedb.org/3";
  apiKey = "1d8823e1e2ff6e4cc5cd3a8a4cf8a6fb"
  constructor(private http : HttpClient) { }
  getMovies(type: String = 'upcoming', count: number = 12){

    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(
      switchMap(response => {
      return of(response.results.slice(0, count) );
    }));

  }
  searchMovies(page:number = 0){

    return this.http.get<MovieDto>(`${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`).pipe(
      switchMap(response => {
      return of(response.results);
    }));

  }
 
}
