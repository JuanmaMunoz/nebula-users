import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { fromEvent, Subscription } from 'rxjs';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'nebula-users',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'nebula-users';
  private subscription = new Subscription();
  public languageSelected: string = localStorage.getItem('nebulaLanguage') || 'en';

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.subscription.add(
      fromEvent(window, 'externalChangeLanguage').subscribe((data: Partial<CustomEvent>) => {
        this.translate.use(data.detail.language);
      })
    );
    this.translate.setDefaultLang('es');
    this.useLanguage();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeLanguage(): void {
    this.languageSelected = this.languageSelected === 'en' ? 'es' : 'en';
    this.useLanguage();
  }

  useLanguage(): void {
    this.translate.use(this.languageSelected);
    localStorage.setItem('nebulaLanguage', this.languageSelected);
  }

  changeStyle(): void {
    const root: any = document.querySelector(':root');
    root.style.setProperty('--bs-primary', '#DDDDDD');
    root.style.setProperty('--bs-primary-rgb', '13,13,13');
    root.style.setProperty('--bs-blue', '#DDDDDD');
    root.style.setProperty('--bs-btn-color', 'red');
    const btns = document.querySelectorAll('.btn-primary');
    btns.forEach((element: any) => {
      element.style.setProperty('--bs-primary', 'red');
    });
  }
}
