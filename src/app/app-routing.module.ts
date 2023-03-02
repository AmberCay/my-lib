import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { BooksComponent } from './pages/books/books.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "form", component: RegisterComponent},
  {path: "profile", component: ProfileComponent},
  {path: "books", component: BooksComponent},
  {path: "addBooks", component:AddBookComponent},
  {path: "editBooks", component:EditBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
