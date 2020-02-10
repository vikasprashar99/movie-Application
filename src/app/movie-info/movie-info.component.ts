import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { MovieserviceService } from '../movieservice.service';
import * as data from '../../db.json';

export class MOVIELIST{
  Sno:string;
  Moviename:string;
  Starrating:any;
  year:string;
  isfeatured:string
}

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
 FeaturedDataofMovies:MOVIELIST[]=[];
  Movienamevar;
  Ratingsvar;
  constructor(private router:Router,config: NgbRatingConfig, private Movieservice: MovieserviceService) {
    // FOR STARS
    config.max = 5;
    config.readonly = true;
   }

  ngOnInit() {
    // TO GET THE DETAILS OF SLECTED MOVIE CARD
this.Movienamevar=this.Movieservice.moviename
this.Ratingsvar=this.Movieservice.Rating;
this.slides = this.chunk(this.FeaturedDataofMovies, 3);
for(const e in data.Sheet1){
  const ob=new MOVIELIST();
  if(data.Sheet1[e].isFeatured== "TRUE"){
  ob.Sno=data.Sheet1[e].Sno;
  ob.Moviename=data.Sheet1[e].Moviename;
  ob.Starrating=data.Sheet1[e].Starrating;
  ob.year=data.Sheet1[e].Year;
  ob.isfeatured=data.Sheet1[e].isFeatured
  this.FeaturedDataofMovies.push(ob)
  }
}

}
// FOR carousel
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  // NAVIGATING BUTTONS
  back(){
    this.router.navigate(['/Movies'])
  }
  Logout(){
    this.router.navigate(['/Signup'])
  }

  
}
