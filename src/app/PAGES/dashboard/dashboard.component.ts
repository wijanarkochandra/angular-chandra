import { Component, OnInit } from '@angular/core';
import { Widget_gameModule } from '@shared/widgets/widget_game/widget_game.module';
import { AuthService } from '@api/auth/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [Widget_gameModule],
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
