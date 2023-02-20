import { Component, OnInit } from '@angular/core';
import { IJwt } from 'src/app/shared-module/models/interfaces';
import { SessionService } from 'src/app/shared-module/services/session.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
})
export class ConfigurationComponent implements OnInit {
  public jwt: IJwt = {} as IJwt;
  constructor(private session: SessionService) {}

  ngOnInit(): void {
    this.jwt = this.session.jwt;
  }
}
