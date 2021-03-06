import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { fadeInAnimation } from './animations/fade-in.animation';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ fadeInAnimation ]
})
export class AppComponent implements OnInit {

  public activeLang = 'en';

  telNumber = '9991941528';
  wpText = 'Hi! I saw your web resume. Let\'s talk!';
  social: any[] = [
    {
      icon: 'fa-linkedin-in',
      link: 'https://www.linkedin.com/in/david-cuy-59a3b7129/'
    },
    {
      icon: 'fa-github',
      link: 'https://github.com/DavidCuy'
    },
    {
      icon: 'fa-youtube',
      link: 'https://www.youtube.com/channel/UCZ6FvCE5SRLjQIYV8DhrwHQ'
    }
  ];

  constructor(private translate: TranslateService, private cookies: CookieService) {
    this.activeLang = this.cookies.get('language');
    if (this.activeLang === '' || this.activeLang === null || this.activeLang === undefined) {
      this.activeLang = 'en';
    }
    this.translate.setDefaultLang(this.activeLang);
  }

  async ngOnInit(): Promise<any> {
    // set up text to print, each item in array is new line
    this.wpText = await this.translate.get('wpBtn.text').toPromise();
  }

  prepareRoute(outlet: RouterOutlet): boolean {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  fadeInStart(event: any): void {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 750);
  }

  fadeInDone(event: any): void {
  }
}
