import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  imports: [
    // BrowserModule, En la consola decia que esto no iba
    FormsModule,
    NgbModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "Formulario para datos básicos de un usuario";
  user = new User();

  onSubmit() {
    console.log(this.user);
  }
  
}

export class User {
  name: string = "";
  email: string = "";
}
