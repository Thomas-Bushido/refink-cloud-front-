import { Component, Input } from '@angular/core';
import { LoginService } from '../../../utils/services/auth/login';
import { FormsModule } from '@angular/forms';
import { LoginResponseDto } from '../../../models/loginResponseDto';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
 @Input() alertFront : string = ""
  @Input() registeredFront : string = ""
  
  loginData = { emailAddress: '', password: '' };
  

  constructor(private auth: LoginService, private router:Router) {}
  
  onLoginHandler() {
    this.auth.login(this.loginData).subscribe({
      next: (res: LoginResponseDto) => {
        console.log('Token reçu:', res.token);
        localStorage.setItem('token', res.token); 
        this.alertFront = "connecter"
        this.router.navigate(['/home']);
        console.log(this.alertFront);
        
      },
      error: err => {
        if (err.status == 401) {
          localStorage.setItem('token', ""); 
        }
        console.error('Erreur de login:', err);
        this.alertFront = "Adresse email ou mot de passe invalide"
      }
    });
  }
}
