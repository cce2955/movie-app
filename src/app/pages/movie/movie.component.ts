import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie: Movie | null = null;
  constructor(private route: ActivatedRoute, private movieService:MovieService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) =>{
        this.getMovie(id);
    })
  }
  getMovie(id:String){
      this.movieService.getMovie(id).subscribe(item =>{ 
        this.movie = item;

      });
  }
}
