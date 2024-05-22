import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name: string = ''
  email: string = ''
  password: string = ''

  constructor(private authService: AuthService, private router: Router) { }

  register(): void {
    const user: User = { name: this.name, email: this.email, password: this.password }
    this.authService.register(user).subscribe(
      (res) => {
        this.router.navigate(['/login'])
      },
      (err) => {
        console.error(err)
      }
    )
  }
}
