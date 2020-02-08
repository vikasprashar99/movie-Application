import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit {
a=[1,2,3,4,5,6,7,8,9];

itemsLimit=6
  constructor() { }
  ngOnInit() {
  }
  loadmoreMovies(n){
    console.log(n)
    this.a.push()
  }

}
