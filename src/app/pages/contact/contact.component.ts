import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formSubmitted = false;

  formData = {
    name: '',
    phone: '',
    email: '',
    company: '',
    service: 'Virtual CFO Services',
    message: ''
  };

  submitConsultation(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (!this.formData.name || !this.formData.phone) {
      return;
    }

    const msg = encodeURIComponent(
      `Hello CMA Urvesh Nimbadkar,\n\nI visited your website and would like to schedule a consultation.\n\n` +
      `*Name:* ${this.formData.name}\n` +
      `*Mobile/WhatsApp:* ${this.formData.phone}\n` +
      `*Company:* ${this.formData.company || 'Not mentioned'}\n` +
      `*Email:* ${this.formData.email || 'Not mentioned'}\n` +
      `*Service Required:* ${this.formData.service}\n` +
      `*Details:* ${this.formData.message || 'Please contact me for details.'}`
    );

    window.open(`https://wa.me/919824164586?text=${msg}`, '_blank');

    this.formSubmitted = true;
    this.formData = {
      name: '',
      phone: '',
      email: '',
      company: '',
      service: 'Virtual CFO Services',
      message: ''
    };

    setTimeout(() => {
      this.formSubmitted = false;
    }, 8000);
  }
}
