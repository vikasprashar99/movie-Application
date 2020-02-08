import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {StarRatingModule} from 'angular-star-rating';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css'],
  providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers
})
export class MovieslistComponent implements OnInit {
a=[  {
  Sno:66,
  MovieName:"Incredibals 2",
  StarRating:"5",
  Year:"2019",
  isFeatured:false
},
{
  Sno:73,
  MovieName:"Captain Marvel",
  StarRating:"4",
  Year:"2019",
  isFeatured:false
},
{
  Sno:64,
  MovieName:"Frozen  ",
  StarRating:"5",
  Year:"2013",
  isFeatured:false
},
{
  Sno:14,
  MovieName:"Harry Potter and the Chamber of Secrets  ",
  StarRating:"1",
  Year:"2001",
  isFeatured:true
},
{
  Sno:93,
  MovieName:"Harry Potter and the Deathly Hallows - Part 1  ",
  StarRating:"4",
  Year:"2010",
  isFeatured:false
},
{
  Sno:11,
  MovieName:"Harry Potter and the Goblet of Fire  ",
  StarRating:"3",
  Year:"2005",
  isFeatured:false
}
]

itemsLimit=6;
  constructor(config: NgbRatingConfig,private router:Router) {
    config.max = 5;
    config.readonly = true;
   }
 
  ngOnInit() {
  }
  loadmoreMovies(n){
    console.log(n)
    this.a.push()
  }
  Logout(){
    this.router.navigate(['/Signup'])
  }
  movieInfo(){
    this.router.navigate(['/Movieinfo'])
  }
}
