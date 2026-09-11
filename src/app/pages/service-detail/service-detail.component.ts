import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
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
  private readonly cdr = inject(ChangeDetectorRef);

  service: ServiceItem | undefined;
  allServices: ServiceItem[] = this.servicesDataService.getAllServices();

  formData = {
    serviceTitle: '',
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  };
  formSubmitted = false;
  formSuccessMessage = '';
  formValidationWarning = '';

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.service = this.servicesDataService.getServiceBySlug(slug);
        if (this.service) {
          this.formData.serviceTitle = this.service.title;
        }
        this.cdr.detectChanges();
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    });
  }

  get otherServices(): ServiceItem[] {
    return this.allServices.filter(s => s.slug !== this.service?.slug).slice(0, 5);
  }

  sendViaWhatsApp(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (!this.formData.name || !this.formData.phone) {
      this.formValidationWarning = 'Please provide your Full Name and WhatsApp Mobile number.';
      return;
    }
    this.formValidationWarning = '';

    const selectedService = this.formData.serviceTitle || this.service?.title || 'Practice Advisory';
    const msg = encodeURIComponent(
      `Hello CMA Urvesh Nimbadkar,\n\nI want to enquire about: *${selectedService}*\n\n` +
      `*Service Required:* ${selectedService}\n` +
      `*Client Name:* ${this.formData.name}\n` +
      `*Mobile Number:* ${this.formData.phone}\n` +
      `*Business / Company:* ${this.formData.company || 'N/A'}\n` +
      `*Email Address:* ${this.formData.email || 'N/A'}\n` +
      `*Requirement / Note:* ${this.formData.message || 'Please connect for consultation.'}`
    );

    window.open(`https://wa.me/919824164586?text=${msg}`, '_blank');

    this.formSubmitted = true;
    this.formSuccessMessage = 'Opening WhatsApp with your pre-filled inquiry...';

    setTimeout(() => {
      this.formSubmitted = false;
    }, 6000);
  }

  sendViaEmail(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (!this.formData.name) {
      this.formValidationWarning = 'Please provide your Full Name.';
      return;
    }
    this.formValidationWarning = '';

    const selectedService = this.formData.serviceTitle || this.service?.title || 'Practice Advisory';
    const recipient = 'unnimbadkarassociates@gmail.com';
    const subject = encodeURIComponent(`Service Inquiry: ${selectedService} - ${this.formData.name}`);
    const body = encodeURIComponent(
      `Dear CMA Urvesh Nimbadkar,\n\n` +
      `I would like to enquire regarding: ${selectedService}\n\n` +
      `--- CLIENT DETAILS ---\n` +
      `Full Name: ${this.formData.name}\n` +
      `Mobile Number: ${this.formData.phone || 'N/A'}\n` +
      `Company / Business: ${this.formData.company || 'N/A'}\n` +
      `Email Address: ${this.formData.email || 'N/A'}\n\n` +
      `--- REQUIREMENT / NOTE ---\n` +
      `${this.formData.message || 'Please connect for consultation regarding this practice area.'}\n\n` +
      `Best regards,\n` +
      `${this.formData.name}`
    );

    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    this.formSubmitted = true;
    this.formSuccessMessage = 'Redirecting to your email client with all details pre-filled...';

    setTimeout(() => {
      this.formSubmitted = false;
    }, 6000);
  }

  submitEnquiry(event?: Event) {
    this.sendViaWhatsApp(event);
  }
}
