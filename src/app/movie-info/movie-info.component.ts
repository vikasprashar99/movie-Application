import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/Movies'])
  }
  Logout(){
    this.router.navigate(['/Signup'])
  }
}
