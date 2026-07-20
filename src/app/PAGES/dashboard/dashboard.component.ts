import { Component, OnInit } from '@angular/core';
import { Widget_gameModule } from '@shared/widgets/widget_game/widget_game.module';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [Widget_gameModule],
})
export class DashboardComponent implements OnInit {

  ngOnInit() {
  }

}
