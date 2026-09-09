import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ServicesDataService, ServiceItem } from '../../services/services-data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private readonly servicesDataService = inject(ServicesDataService);
  private readonly router = inject(Router);

  services: ServiceItem[] = this.servicesDataService.getAllServices();
  isMobileNavOpen = false;
  isDesktopServicesOpen = false;
  isMobileServicesOpen = false; // Closed by default, opens on user tap
  isScrolled = false;
  private dropdownTimer: any = null;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  // Close desktop dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement | null;
    if (target && !target.closest('.distinct-dropdown')) {
      this.closeDesktopServices();
    }
  }

  // Immediately close when mouse moves anywhere onto the home screen / outside dropdown
  @HostListener('document:mousemove', ['$event'])
  onDocumentMouseMove(event: MouseEvent) {
    if (!this.isDesktopServicesOpen) return;
    const target = event.target as HTMLElement | null;
    if (target && !target.closest('.distinct-dropdown')) {
      this.scheduleDropdownClose(100);
    }
  }

  onServicesMouseEnter() {
    this.clearDropdownTimer();
    this.isDesktopServicesOpen = true;
  }

  onServicesMouseLeave() {
    this.scheduleDropdownClose(130);
  }

  onServicesClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.clearDropdownTimer();
    this.isDesktopServicesOpen = !this.isDesktopServicesOpen;
  }

  closeDesktopServices() {
    this.clearDropdownTimer();
    this.isDesktopServicesOpen = false;
  }

  private scheduleDropdownClose(delayMs: number = 130) {
    this.clearDropdownTimer();
    this.dropdownTimer = setTimeout(() => {
      this.isDesktopServicesOpen = false;
      this.dropdownTimer = null;
    }, delayMs);
  }

  private clearDropdownTimer() {
    if (this.dropdownTimer) {
      clearTimeout(this.dropdownTimer);
      this.dropdownTimer = null;
    }
  }

  isServicesActive(): boolean {
    return this.router.url.startsWith('/services');
  }

  toggleMobileServices(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.isMobileServicesOpen = !this.isMobileServicesOpen;
  }

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  closeMobileNav() {
    this.isMobileNavOpen = false;
    this.closeDesktopServices();
  }
}
