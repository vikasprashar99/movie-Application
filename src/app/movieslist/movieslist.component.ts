import { Component, OnInit } from "@angular/core";
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import { StarRatingModule } from "angular-star-rating";
import { Router } from "@angular/router";
import { MovieserviceService } from '../movieservice.service';

export class MovieDetails{
  Sno:number;
  MovieName:string;
  StarRating:string;
  Year:number;
  isFeatured:boolean;
}

@Component({
  selector: "app-movieslist",
  templateUrl: "./movieslist.component.html",
  styleUrls: ["./movieslist.component.css"],
  providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers
})
export class MovieslistComponent implements OnInit {
Movies:string[]=[];
Moviesvar:MovieDetails[]=[];
currentRate=[];
a=[  {
  Sno:66,
  MovieName:"Incredibals 2",
  StarRating:"5",
  Year:2019,
  isFeatured:false
},
{
  Sno:73,
  MovieName:"Captain Marvel",
  StarRating:"4",
  Year:2019,
  isFeatured:false
},
{
  Sno:64,
  MovieName:"Frozen  ",
  StarRating:"5",
  Year:2013,
  isFeatured:false
},
{
  Sno:14,
  MovieName:"Harry Potter and the Chamber of Secrets  ",
  StarRating:"1",
  Year:2001,
  isFeatured:true
},
{
  Sno:93,
  MovieName:"Harry Potter and the Deathly Hallows - Part 1  ",
  StarRating:"4",
  Year:2010,
  isFeatured:false
},
{
  Sno:11,
  MovieName:"Harry Potter and the Goblet of Fire  ",
  StarRating:"3",
  Year:2020,
  isFeatured:false
}
]


constructor(private router:Router,config: NgbRatingConfig, private Movieservice: MovieserviceService,
  ) {
  config.max = 5;

 }
   stars: number[] = [1, 2, 3, 4, 5];
   selectedValue: number;
   
  ngOnInit() {
    this.getMovieData();
  }
  getMovieData(){
    for (const e in this.a) {
      const ob=new MovieDetails();
      ob.Sno=this.a[e].Sno;
      ob.MovieName=this.a[e].MovieName;
      ob.Year=this.a[e].Year;
      ob.StarRating=this.a[e].StarRating;
      ob.isFeatured=this.a[e].isFeatured;
      this.Moviesvar.push(ob)
      this.currentRate.push(ob.StarRating)
     }
     console.log(this.currentRate)
  }
  
  loadmoreMovies(n){
    console.log(n)
    this.a.push()
  }
  Logout() {
    this.router.navigate(["/Signup"]);
  }
  movieInfo(data) {
    console.log(data)
    this.Movieservice.moviename=data.MovieName;
    this.Movieservice.Rating=data.StarRating;
    this.router.navigate(["/Movieinfo"]);
  }
 
  SortByName(){
    return this.Moviesvar.sort((a, b) => (a.MovieName < b.MovieName ? -1 : 1))
    
  }
  SortByYear(){
  return this.Moviesvar.sort((a, b) => (a.Year > b.Year ? -1 : 1))
;
}
SortByRating(){
  return this.Moviesvar.sort((a, b) => (a.StarRating > b.StarRating ? -1 : 1))
}
}
