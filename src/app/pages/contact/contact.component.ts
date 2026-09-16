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
  successMessage = '';
  errorMessage = '';

  formData = {
    name: '',
    phone: '',
    email: '',
    company: '',
    service: 'Virtual CFO Services',
    message: ''
  };

  submitViaWhatsApp(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (!this.formData.name.trim()) {
      this.errorMessage = 'Please enter your Full Name.';
      return;
    }

    if (!this.formData.phone.trim()) {
      this.errorMessage = 'Please enter your Mobile / WhatsApp Number.';
      return;
    }

    this.errorMessage = '';

    const msg = encodeURIComponent(
      `Hello CMA Urvesh Nimbadkar,\n\nI visited your website and would like to schedule a consultation.\n\n` +
      `*Name:* ${this.formData.name.trim()}\n` +
      `*Mobile/WhatsApp:* ${this.formData.phone.trim()}\n` +
      `*Company:* ${this.formData.company.trim() || 'Not mentioned'}\n` +
      `*Email:* ${this.formData.email.trim() || 'Not mentioned'}\n` +
      `*Service Required:* ${this.formData.service}\n` +
      `*Details:* ${this.formData.message.trim() || 'Please contact me to discuss my requirements.'}`
    );

    window.open(`https://wa.me/919824164586?text=${msg}`, '_blank');

    this.successMessage = 'Thank you! Your details have been submitted and redirected to WhatsApp.';
    this.formSubmitted = true;
    this.resetForm();

    setTimeout(() => {
      this.formSubmitted = false;
      this.successMessage = '';
    }, 7000);
  }

  submitViaEmail(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (!this.formData.name.trim()) {
      this.errorMessage = 'Please enter your Full Name.';
      return;
    }

    if (!this.formData.phone.trim() && !this.formData.email.trim()) {
      this.errorMessage = 'Please provide either a Phone number or Email address so we can reach you.';
      return;
    }

    this.errorMessage = '';

    const subject = encodeURIComponent(`Consultation Request: ${this.formData.name.trim()} - ${this.formData.service}`);
    const body = encodeURIComponent(
      `Dear U N Nimbadkar & Associates,\n\nI would like to schedule a consultation.\n\n` +
      `Name: ${this.formData.name.trim()}\n` +
      `Mobile Number: ${this.formData.phone.trim() || 'Not provided'}\n` +
      `Email Address: ${this.formData.email.trim() || 'Not provided'}\n` +
      `Company / Business Name: ${this.formData.company.trim() || 'Not mentioned'}\n` +
      `Service Required: ${this.formData.service}\n\n` +
      `Requirement Details:\n${this.formData.message.trim() || 'Please contact me to schedule a discussion.'}\n\n` +
      `Thank you.`
    );

    window.location.href = `mailto:unnimbadkarassociates@gmail.com?subject=${subject}&body=${body}`;

    this.successMessage = 'Thank you! Your email client has been opened with your inquiry details.';
    this.formSubmitted = true;
    this.resetForm();

    setTimeout(() => {
      this.formSubmitted = false;
      this.successMessage = '';
    }, 7000);
  }

  resetForm() {
    this.formData = {
      name: '',
      phone: '',
      email: '',
      company: '',
      service: 'Virtual CFO Services',
      message: ''
    };
  }
}
