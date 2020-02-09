import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  data: number[] = [3, 4, 1];

  constructor(private router:Router,config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
   }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/Movies'])
  }
  Logout(){
    this.router.navigate(['/Signup'])
  }
}
