import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignUpComponent } from './sign-up/sign-up.component';
import { MovieslistComponent } from './movieslist/movieslist.component'; 


const routes: Routes = [
  { path: "", redirectTo: "SignUpComponent", pathMatch: "full" },
  { path: "", component: SignUpComponent },
  {
    path: "Movies",
    component: MovieslistComponent
  },
//   {
//     path: "orderdetails",
//     component: OrderDetailscomponentComponent
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
