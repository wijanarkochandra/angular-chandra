import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "@shared/ui/button/button.component";
import { ContactListComponentComponent } from './ContactListComponent/ContactListComponent.component';

@Component({
  selector: 'app-daftar-kontak',
  templateUrl: './daftar-kontak.component.html',
  styleUrls: ['./daftar-kontak.component.css'],
  imports: [ButtonComponent, ContactListComponentComponent]
})
export class DaftarKontakComponent implements OnInit {
addContact: any;

  constructor() { }

  ngOnInit() {
  }

}
