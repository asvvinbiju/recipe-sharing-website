import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../app/components/signup/signup.component';
import { LoginComponent } from '../app/components/login/login.component';
import { HomeComponent } from '../app/components/home/home.component';
import { HomeLayoutComponent } from '../app/components/home-layout/home-layout.component';
import { MyprofileComponent } from "../app/components/myprofile/myprofile.component";
import { SubmitrecipeComponent } from '../app/components/submitrecipe/submitrecipe.component';
import { RecipeViewComponent } from '../app/components/recipe-view/recipe-view.component';
import { DashboardComponent } from '../app/admin/dashboard/dashboard.component';
import { AdminLayoutComponent } from '../app/admin/admin-layout/admin-layout.component';


const routes: Routes = [
  {
    path: "", component: HomeLayoutComponent, children: [
      { path: "", component: HomeComponent },
      { path: "signup", component: SignupComponent },
      { path: "login", component: LoginComponent },
      { path: "myprofile", component: MyprofileComponent },
      { path: "submitrecipe", component: SubmitrecipeComponent },
      { path: "recipe-view/:id", component: RecipeViewComponent },
    ]
  },
  { path: "admin", component: AdminLayoutComponent,
    children: [
      { path: "", component: DashboardComponent },
    ]
   },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
