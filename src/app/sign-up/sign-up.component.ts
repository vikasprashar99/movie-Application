import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  // FORM CONTROLS FOR INPUT FILEDS
  fullname = new FormControl("", [Validators.required]);
  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/)
  ]);
  hide = true;

  constructor(private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit() {}
  // EMAIL Validator
  getErrorMessage() {
    return this.email.hasError("required")
      ? "You must enter a EmailID"
      : this.email.hasError("email")
      ? "Not a valid email"
      : "";
  }
  //PASSWORD VALIDATOR
  getPassowordErrorMessage() {
    return this.password.hasError("required")
      ? "You must enter a Password"
      : this.password.hasError("pattern")
      ? "Not a valid Password"
      : "";
  }
  // SUBMIT BUTTON
  onSubmit() {
    if (
      this.fullname.value == "" ||
      this.email.value == "" ||
      this.password.value == "" ||
      this.password.hasError("pattern") ||
      this.email.hasError("email")
    ) {
      const message = "Plase fill all the fields";
      const action = "Try again";
      this._snackBar.open(message, action, {
        duration: 2000
      });
    } else {
      this.router.navigate(["/Movies"]);
    }
  }
}
