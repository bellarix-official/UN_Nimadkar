import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServicesDataService, ServiceItem } from '../../services/services-data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  private readonly servicesDataService = inject(ServicesDataService);

  services: ServiceItem[] = this.servicesDataService.getAllServices();
  activeFilter = 'all';

  categories = [
    { key: 'all', label: 'All Services (10)' },
    { key: 'Strategic Finance', label: 'Virtual CFO' },
    { key: 'Costing & Operations', label: 'Cost Accounting' },
    { key: 'Taxation', label: 'GST & Income Tax' },
    { key: 'Audit & Compliance', label: 'Audit & Assurance' },
    { key: 'Corporate Legal', label: 'Company Formation' },
    { key: 'Financing', label: 'Project Finance & Loans' },
    { key: 'Registrations', label: 'Business Licenses' },
    { key: 'Certifications', label: 'CMA Certifications' }
  ];

  get filteredServices(): ServiceItem[] {
    if (this.activeFilter === 'all') {
      return this.services;
    }
    return this.services.filter(s => s.category === this.activeFilter);
  }

  setFilter(category: string) {
    this.activeFilter = category;
  }
}
