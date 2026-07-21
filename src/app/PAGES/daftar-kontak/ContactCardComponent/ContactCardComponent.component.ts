import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonComponent } from "@shared/ui/button/button.component";

@Component({
  selector: 'app-ContactCardComponent',
  templateUrl: './ContactCardComponent.component.html',
  styleUrls: ['./ContactCardComponent.component.css'],
  imports: [ButtonComponent],
  host: { style: 'display: contents' }
})
export class ContactCardComponentComponent implements OnInit {
  @Input() contact = {
    id: '',
    nama: '',
    email: '',
    phone: 0,
    isFavorite: false,
    createdAt: ''
  };
  @Output() onFavorite = new EventEmitter<string>();
  @Output() onDelete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
