import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observer } from 'rxjs';
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
  constructor(private route: ActivatedRoute, private session: SessionService) {
    /*this.route.params.subscribe((params) => {
      this.userId = (params as { id: string }).id;
    });*/
  }

  ngOnInit(): void {
    console.log(this.session.jwt);
    this.userId = this.session.jwt.email;
  }

  ngOnDestroy(): void {}
}
