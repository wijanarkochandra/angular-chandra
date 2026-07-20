import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from "@shared/ui/button/button.component";

@Component({
  selector: 'app-ContactCardComponent',
  templateUrl: './ContactCardComponent.component.html',
  styleUrls: ['./ContactCardComponent.component.css'],
  imports: [ButtonComponent],
  host: { style: 'display: contents' }
})
export class ContactCardComponentComponent implements OnInit {
  @Input() class = '';

  constructor() { }

  ngOnInit() {
  }

  toggleFavorite() {
  }

  deleteContact() {
  }

}
