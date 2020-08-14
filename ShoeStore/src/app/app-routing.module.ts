import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './admin/users/users.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BooksComponent } from './admin/books/books.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : "About-us", component: AboutUsComponent},
  {path : "Login", component: LoginComponent},
  {path : "Sign-up", component: SignUpComponent},
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/books', component: BooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
