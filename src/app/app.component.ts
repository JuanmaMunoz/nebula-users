import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { fromEvent, Subscription } from 'rxjs';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'nebula-users',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'nebula-users';
  private subscription = new Subscription();
  public imageUrl = assetUrl('images/png/user-empty.png')
  public languageSelected: string = localStorage.getItem('nebulaLanguage') || 'en';

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void{
    this.subscription.add(
      fromEvent(window,'externalChangeLanguage').subscribe((data:Partial<CustomEvent>)=>{
        this.translate.use(data.detail.language);
      })
    );
    this.translate.setDefaultLang('es');
    this.useLanguage();
  }

  changeLanguage(): void {
    this.languageSelected = this.languageSelected === 'en' ? 'es' : 'en';
    this.useLanguage();
  }

  useLanguage():void{
    this.translate.use(this.languageSelected);
    localStorage.setItem('nebulaLanguage', this.languageSelected);
  }
}
