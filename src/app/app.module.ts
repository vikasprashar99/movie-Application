import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule
} from "@angular/material";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatGridListModule} from '@angular/material/grid-list';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatListModule} from '@angular/material/list'
import {MatToolbarModule} from '@angular/material/toolbar'; 

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    MatCheckboxModule,
    MatSelectModule,
    MatMenuModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatCardModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatNativeDateModule,

    // FlexLayoutModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatTableModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
