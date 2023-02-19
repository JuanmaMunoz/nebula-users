import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor(private router: Router, private sessionService: SessionService) {}
  ngOnInit(): void {
    this.sessionService.checkSession().subscribe((session: boolean) => {
      if (!session) {
        this.router.navigate(['/login/auth']);
      }
    });
  }
}
