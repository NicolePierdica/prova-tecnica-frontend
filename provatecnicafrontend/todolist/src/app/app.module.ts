import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { CompletedComponent } from './completed/completed.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Route[] = [

  {
    path: "todo",
    component: TodoComponent
  },

  {
    path: "completed",
    component: CompletedComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CompletedComponent,
    NavbarComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
