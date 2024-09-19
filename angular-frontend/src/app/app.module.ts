import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { SubmitrecipeComponent } from './components/submitrecipe/submitrecipe.component';
import { UserRecipesComponent } from './components/user-recipes/user-recipes.component';
import { SavedRecipesComponent } from './components/saved-recipes/saved-recipes.component';
import { RecipeViewComponent } from './components/recipe-view/recipe-view.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    LoginComponent,
    MyprofileComponent,
    SubmitrecipeComponent,
    UserRecipesComponent,
    SavedRecipesComponent,
    RecipeViewComponent,
    DashboardComponent,
    AdminLayoutComponent,
    HomeLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
