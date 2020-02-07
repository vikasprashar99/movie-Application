import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  { path: "", redirectTo: "SignUpComponent", pathMatch: "full" },
  { path: "", component: SignUpComponent },

//   {
//     path: "requests",
//     component: RequestsComponent
//   },
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
