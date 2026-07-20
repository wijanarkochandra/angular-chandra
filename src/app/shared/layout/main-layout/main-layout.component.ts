import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '@api/auth/auth.service';
import { ButtonComponent } from "@shared/ui/button/button.component";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  imports: [NgFor, RouterLink, RouterLinkActive, RouterOutlet, ButtonComponent],
})
export class MainLayoutComponent {
  menu = [
    { label: 'Home', link: '/dashboard' },
    { label: 'Daftar Kontak', link: '/daftar-kontak' },
  ];

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}
