import { Component, OnInit } from "@angular/core";
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import { StarRatingModule } from "angular-star-rating";
import { Router } from "@angular/router";
import { MovieserviceService } from "../movieservice.service";


@Component({
  selector: "app-movieslist",
  templateUrl: "./movieslist.component.html",
  styleUrls: ["./movieslist.component.css"],
  providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers
})
export class MovieslistComponent implements OnInit {
  start;
  end;
  lengthOfArray;
  Moviesvar: any[] = [];
// MOVIE DATA
  MoviesList = [
    {
      Sno: 66,
      MovieName: "Incredibals 2",
      StarRating: "5",
      Year: 2019,
      isFeatured: false
    },
    {
      Sno: 73,
      MovieName: "Captain Marvel",
      StarRating: "4",
      Year: 2019,
      isFeatured: false
    },
    {
      Sno: 64,
      MovieName: "Frozen  ",
      StarRating: "5",
      Year: 2013,
      isFeatured: false
    },
    {
      Sno: 14,
      MovieName: "Harry Potter and the Chamber of Secrets  ",
      StarRating: "1",
      Year: 2001,
      isFeatured: true
    },
    {
      Sno: 93,
      MovieName: "Harry Potter and the Deathly Hallows - Part 1  ",
      StarRating: "4",
      Year: 2010,
      isFeatured: false
    },
    {
      Sno: 11,
      MovieName: "Harry Potter and the Goblet of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },
    {
      Sno: 11,
      MovieName: "Harry  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },
    {
      Sno: 11,
      MovieName: "Harry Potter   ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },
    {
      Sno: 11,
      MovieName: "Harry Potter aand the Goblet  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },
    {
      Sno: 11,
      MovieName: "Harry Potter and fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },
    {
      Sno: 11,
      MovieName: " the Goblet of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },
    {
      Sno: 11,
      MovieName: "H of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },{
      Sno: 11,
      MovieName: "H of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },{
      Sno: 11,
      MovieName: "H of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },{
      Sno: 11,
      MovieName: "H of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },{
      Sno: 11,
      MovieName: "H of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },{
      Sno: 11,
      MovieName: "H of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },{
      Sno: 11,
      MovieName: "H of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },
    {
      Sno: 11,
      MovieName: " of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },
    {
      Sno: 11,
      MovieName: "et of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },
    {
      Sno: 11,
      MovieName: "Harry Potof Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },
    {
      Sno: 11,
      MovieName: "Harry Pott of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },{
      Sno: 11,
      MovieName: "Harry Pott of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },{
      Sno: 11,
      MovieName: "Harry Pott of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },{
      Sno: 11,
      MovieName: "Harry Pott of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },{
      Sno: 11,
      MovieName: "Harry Pott of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },{
      Sno: 11,
      MovieName: "Harry Pott of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },{
      Sno: 11,
      MovieName: "Harry Pott of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },{
      Sno: 11,
      MovieName: "Harry Pott of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },{
      Sno: 11,
      MovieName: "Harry Pott of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },{
      Sno: 11,
      MovieName: "Harry Pott of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },{
      Sno: 11,
      MovieName: "Harry Pott of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },{
      Sno: 11,
      MovieName: "Harry Pott of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },{
      Sno: 11,
      MovieName: "Harry Pott of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },{
      Sno: 11,
      MovieName: "Harry Pott of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },{
      Sno: 11,
      MovieName: "Harry Pott of Fire  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },{
      Sno: 11,
      MovieName: "Harry Pott of yo  ",
      StarRating: "3",
      Year: 2020,
      isFeatured: false
    },
  ];

  constructor(
    private router: Router,
    config: NgbRatingConfig,
    private Movieservice: MovieserviceService
  ) {
    config.max = 5;
    config.readonly = true;
  }
  ngOnInit() {
    this.getMovieData();
  }
  // TO GET THE MOVIES DATA
  getMovieData() {
    this.start = 0;
    console.log(this.MoviesList.length)
    this.end = 9;
    this.lengthOfArray = this.MoviesList.length;
    this.Moviesvar = this.MoviesList.slice(this.start, this.end);
    console.log(this.Moviesvar);
  }
// LOAD MORE BUTTON
  loadmoreMovies() {
    this.end = this.end + 6;
    this.Moviesvar = this.MoviesList.slice(0, this.end);
    console.log(this.Moviesvar);
  }
  //LOGOUT BUTTON 
  Logout() {
    this.router.navigate(["/Signup"]);
  }
  // ONCLICKING A PARTICULAR MOVIE CARD
  movieInfo(data) {
    console.log(data);
    this.Movieservice.moviename = data.MovieName;
    this.Movieservice.Rating = data.StarRating;
    this.router.navigate(["/Movieinfo"]);
  }
// SORTING
  SortByName() {
    return this.Moviesvar.sort((a, b) => (a.MovieName < b.MovieName ? -1 : 1));
  }
  SortByYear() {
    return this.Moviesvar.sort((a, b) => (a.Year > b.Year ? -1 : 1));
  }
  SortByRating() {
    return this.Moviesvar.sort((a, b) =>
      a.StarRating > b.StarRating ? -1 : 1
    );
  }
}
