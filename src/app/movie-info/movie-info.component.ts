import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { MovieserviceService } from '../movieservice.service';


export class MovieDetails{
  Sno:number;
  MovieName:string;
  StarRating:string;
  Year:number;
  isFeatured:boolean;
}
@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
 
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
  Movienamevar;
  Ratingsvar;
  constructor(private router:Router,config: NgbRatingConfig, private Movieservice: MovieserviceService) {
    config.max = 5;
   }

  ngOnInit() {
this.Movienamevar=this.Movieservice.moviename
this.Ratingsvar=this.Movieservice.Rating;
    console.log(this.Movieservice.moviename,this.Movieservice.Rating)
  }
  back(){
    this.router.navigate(['/Movies'])
  }
  Logout(){
    this.router.navigate(['/Signup'])
  }

  
}
