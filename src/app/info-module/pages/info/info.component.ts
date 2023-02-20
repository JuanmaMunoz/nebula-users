import { Component, OnDestroy, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared-module/services/session.service';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit, OnDestroy {
  public imageUrl = assetUrl('images/png/user-empty.png');
  public userId: string = '';
  constructor(private session: SessionService) {}

  ngOnInit(): void {
    console.log(this.session.jwt);
    this.userId = this.session.jwt.email;
  }

  ngOnDestroy(): void {}
}
