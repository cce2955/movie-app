import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: any =  [];
  constructor(private moviesService : MovieService) { }
  
  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((response: any) =>{
      this.movies = response.results;
      console.log(this.movies)
    });
  }

}
