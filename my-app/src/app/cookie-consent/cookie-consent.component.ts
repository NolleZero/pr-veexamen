import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.css']
})
export class CookieConsentComponent {
  showCookieMessage = false;

  ngOnInit() {
    this.showCookieMessage = true;
  }

  checkCookieConsent(): boolean {
    return !!localStorage.getItem('cookie-consent');
  }

  consentToCookies() {
    localStorage.setItem('cookie-consent', 'true');
    this.showCookieMessage = false;
  }
}
