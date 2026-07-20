import { Component, OnInit } from '@angular/core';
import { ContactCardComponentComponent } from "../ContactCardComponent/ContactCardComponent.component";

@Component({
  selector: 'app-ContactListComponent',
  templateUrl: './ContactListComponent.component.html',
  styleUrls: ['./ContactListComponent.component.css'],
  imports: [ContactCardComponentComponent],
  host: { style: 'display: contents' }
})
export class ContactListComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
