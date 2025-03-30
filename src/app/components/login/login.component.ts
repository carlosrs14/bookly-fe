import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule]
})
export class LoginComponent {
  username = '';
  password = '';
  constructor(private authService: AuthService) {}
  login() {
    this.authService.login(this.username, this.password).subscribe(response => {
      localStorage.setItem('tokenAccess', response.access);
      localStorage.setItem('tokenRefresh', response.refresh);
      console.log("Exito");
    }, error => {
      console.log("Error")
    });
  }
}
