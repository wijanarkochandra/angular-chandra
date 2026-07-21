import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '@shared/ui/button/button.component';
import { ContactListComponentComponent } from './ContactListComponent/ContactListComponent.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailPatternValidator } from '@shared/utils/validator_pattern';
import { Entity_Contact } from '@core/models/entities/contact.entity';
import { InputTextComponent } from '@shared/ui/input-text/input-text.component';

@Component({
  selector: 'app-daftar-kontak',
  templateUrl: './daftar-kontak.component.html',
  styleUrls: ['./daftar-kontak.component.css'],
  imports: [ButtonComponent, ContactListComponentComponent, InputTextComponent, ReactiveFormsModule],
})
export class DaftarKontakComponent implements OnInit {
  showForm = false;
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.setupForm();
  }

  setupForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, emailPatternValidator()]],
      phone: ['', [Validators.required]],
    });
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onSubmit() {
    const id = Date.now();
    const createdAt = new Date().toLocaleDateString('id-ID');
    Entity_Contact.set({ ...this.form?.getRawValue(), id: id, createdAt: createdAt });

    this.toggleForm();
  }
}
