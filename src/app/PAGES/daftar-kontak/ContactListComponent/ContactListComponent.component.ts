import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactCardComponentComponent } from '../ContactCardComponent/ContactCardComponent.component';
import { HelperService } from '@core/services/helper.service';

@Component({
  selector: 'app-ContactListComponent',
  templateUrl: './ContactListComponent.component.html',
  styleUrls: ['./ContactListComponent.component.css'],
  imports: [ContactCardComponentComponent],
  host: { style: 'display: contents' },
})
export class ContactListComponentComponent implements OnInit {
  @Input() contacts = [
    {
      id: '',
      nama: '',
      email: '',
      phone: 0,
      isFavorite: false,
      createdAt: '',
    },
  ];
  @Output() onFavorite = new EventEmitter<string>();
  @Output() onDelete = new EventEmitter<string>();

  constructor(
    private helper:HelperService
  ) {}

  ngOnInit() {}

  onFavoriteContact(contactId: string) {
    const contact = this.contacts?.find((c) => c.id === contactId);
    if (contact) {
      this.onFavorite.emit(contactId)
    }
  }

  onDeleteContact(contactId: string) {
    this.helper
    .confirmationAlert({
      type: 'delete',
      title: 'Hapus Kontak',
      message: 'Apakah anda yakin?',
      button: 'Delete',
      button_cancel: 'Ga jadi'
    })
    .then((isConfirmed) => {
      if (isConfirmed) {
        this.onDelete.emit(contactId)
      }
    })
  }
}
