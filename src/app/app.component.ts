import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private cookieService: CookieService) { }

  setCookieWithSameSiteNone() {
    // Define o cookie com SameSite=None e Secure
    this.cookieService.set('cookieName', 'cookieValue', { sameSite: 'None', secure: true });
  }
}
