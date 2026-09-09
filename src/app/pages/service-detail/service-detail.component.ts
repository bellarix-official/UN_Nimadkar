import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServicesDataService, ServiceItem } from '../../services/services-data.service';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly servicesDataService = inject(ServicesDataService);

  service: ServiceItem | undefined;
  allServices: ServiceItem[] = this.servicesDataService.getAllServices();
  formSubmitted = false;

  formData = {
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  };

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.service = this.servicesDataService.getServiceBySlug(slug);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  get otherServices(): ServiceItem[] {
    return this.allServices.filter(s => s.slug !== this.service?.slug).slice(0, 5);
  }

  submitEnquiry(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (!this.formData.name || !this.formData.phone) {
      return;
    }

    const msg = encodeURIComponent(
      `Hello CMA Urvesh Nimbadkar,\n\nI am interested in your service: *${this.service?.title}*.\n\n` +
      `*Name:* ${this.formData.name}\n` +
      `*Mobile:* ${this.formData.phone}\n` +
      `*Company:* ${this.formData.company || 'N/A'}\n` +
      `*Email:* ${this.formData.email || 'N/A'}\n` +
      `*Requirement:* ${this.formData.message || 'Please connect for consultation.'}`
    );

    window.open(`https://wa.me/919824164586?text=${msg}`, '_blank');

    this.formSubmitted = true;
    this.formData = {
      name: '',
      phone: '',
      email: '',
      company: '',
      message: ''
    };

    setTimeout(() => {
      this.formSubmitted = false;
    }, 8000);
  }
}
