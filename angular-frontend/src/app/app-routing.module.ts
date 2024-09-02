import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../app/components/signup/signup.component';
import { LoginComponent } from '../app/components/login/login.component';
import { HomeComponent } from '../app/components/home/home.component';
import { MyprofileComponent } from "../app/components/myprofile/myprofile.component";
import { SubmitrecipeComponent } from '../app/components/submitrecipe/submitrecipe.component';
const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"signup", component:SignupComponent},
  {path:"login", component:LoginComponent},
  {path:"myprofile", component:MyprofileComponent},
  {path:"submitrecipe", component:SubmitrecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
