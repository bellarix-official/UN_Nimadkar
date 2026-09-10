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
    { key: 'all', label: 'All Services (10)', icon: 'bi-grid-fill' },
    { key: 'Costing & Operations', label: 'Cost Accounting', icon: 'bi-calculator' },
    { key: 'Strategic Finance', label: 'Virtual CFO', icon: 'bi-person-workspace' },
    { key: 'Audit & Compliance', label: 'Audit & Assurance', icon: 'bi-shield-check' },
    { key: 'Taxation', label: 'GST & Income Tax', icon: 'bi-receipt-cutoff' },
    { key: 'Corporate Legal', label: 'Company Formation', icon: 'bi-building' },
    { key: 'Financing', label: 'Loans & Subsidies', icon: 'bi-bank' },
    { key: 'Registrations', label: 'Business Licenses', icon: 'bi-file-earmark-check' },
    { key: 'Management Advisory', label: 'Business Advisory', icon: 'bi-diagram-3' },
    { key: 'Certifications', label: 'CMA Certifications', icon: 'bi-patch-check-fill' }
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
