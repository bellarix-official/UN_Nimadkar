import { Component, inject, OnInit, OnDestroy, ChangeDetectorRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServicesDataService, ServiceItem } from '../../services/services-data.service';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly servicesDataService = inject(ServicesDataService);
  private readonly cdr = inject(ChangeDetectorRef);

  allServices: ServiceItem[] = this.servicesDataService.getAllServices();
  isServicesOverlayOpen = false;

  openServicesOverlay(): void {
    this.isServicesOverlayOpen = true;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
    this.cdr.markForCheck();
  }

  closeServicesOverlay(): void {
    this.isServicesOverlayOpen = false;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
    this.cdr.markForCheck();
  }

  @HostListener('document:keydown.escape')
  onEscapePress(): void {
    if (this.isServicesOverlayOpen) {
      this.closeServicesOverlay();
    }
  }

  // 5 Most demanding core practice areas for Home Page
  featuredServices = [
    {
      title: 'Cost Audit & Cost Records',
      slug: 'cost-management-advisory',
      icon: 'bi-calculator',
      desc: 'Maintaining statutory cost records under Section 148, accurate unit BOM product costing, and factory wastage control.'
    },
    {
      title: 'Virtual CFO Services',
      slug: 'virtual-cfo-services',
      icon: 'bi-person-workspace',
      desc: 'Hands-on financial direction, monthly MIS reports, cash flow planning, and supervision of your accounts department.'
    },
    {
      title: 'Auditing & Assurance',
      slug: 'audit-and-assurance',
      icon: 'bi-shield-check',
      desc: 'Independent statutory audits, internal financial controls (IFC) review, physical stock audit, and asset tagging.'
    },
    {
      title: 'Direct Tax & Income Tax',
      slug: 'direct-taxation-income-tax',
      icon: 'bi-file-earmark-text',
      desc: 'Corporate and personal ITR filing, quarterly TDS/TCS returns, proactive advance tax planning, and scrutiny handling.'
    },
    {
      title: 'Indirect Tax (GST)',
      slug: 'indirect-taxation-gst',
      icon: 'bi-receipt-cutoff',
      desc: 'Complete GST management, timely monthly return filings, continuous 2B ITC vendor reconciliation, and notice replies.'
    }
  ];

  activeFilter = 'all';
  openFaqIndex: number | null = 0;
  formSubmitted = false;

  formData = {
    name: '',
    phone: '',
    email: '',
    company: '',
    service: 'Virtual CFO Services',
    message: ''
  };

  industriesRow1 = [
    {
      name: 'Manufacturing & Engineering',
      category: 'BOM Costing & Audit',
      icon: 'bi-gear-wide-connected',
      color: '#003466',
      bg: '#eff6ff',
      border: 'rgba(0, 52, 102, 0.25)'
    },
    {
      name: 'Solar & Clean Energy',
      category: 'Project DPR & Subsidies',
      icon: 'bi-sun-fill',
      color: '#d97706',
      bg: '#fffbeb',
      border: 'rgba(217, 119, 6, 0.3)'
    },
    {
      name: 'Chemicals & Petrochemicals',
      category: 'Process Scrap & Yield MIS',
      icon: 'bi-droplet-half',
      color: '#0891b2',
      bg: '#ecfeff',
      border: 'rgba(8, 145, 178, 0.3)'
    },
    {
      name: 'Pharmaceuticals & Healthcare',
      category: 'Batch Costing & Compliance',
      icon: 'bi-capsule',
      color: '#e11d48',
      bg: '#fff1f2',
      border: 'rgba(225, 29, 72, 0.3)'
    },
    {
      name: 'Food Processing & Agro FMCG',
      category: 'MoFPI Subsidies & Inventory',
      icon: 'bi-basket2-fill',
      color: '#0A5C36',
      bg: '#ecfdf5',
      border: 'rgba(10, 92, 54, 0.3)'
    },
    {
      name: 'Textiles & Garments',
      category: 'TUFS Subsidies & Job Work GST',
      icon: 'bi-patch-check-fill',
      color: '#7c3aed',
      bg: '#f5f3ff',
      border: 'rgba(124, 58, 237, 0.3)'
    },
    {
      name: 'Infrastructure & EPC',
      category: 'Contract Costing & WIP',
      icon: 'bi-bricks',
      color: '#ea580c',
      bg: '#fff7ed',
      border: 'rgba(234, 88, 12, 0.3)'
    },
    {
      name: 'Logistics & Supply Chain',
      category: 'Fleet Margin & E-Way MIS',
      icon: 'bi-truck',
      color: '#2563eb',
      bg: '#eff6ff',
      border: 'rgba(37, 99, 235, 0.3)'
    },
    {
      name: 'IT, Software & SaaS',
      category: 'Transfer Pricing & Export SEZ',
      icon: 'bi-laptop',
      color: '#4f46e5',
      bg: '#eef2ff',
      border: 'rgba(79, 70, 229, 0.3)'
    }
  ];

  industriesRow2 = [
    {
      name: 'Automotive & EV Mobility',
      category: 'PLI Incentives & Component Cost',
      icon: 'bi-car-front-fill',
      color: '#0d9488',
      bg: '#f0fdfa',
      border: 'rgba(13, 148, 136, 0.3)'
    },
    {
      name: 'Hospitality & Tourism',
      category: 'F&B Cost Control & Audit',
      icon: 'bi-cup-hot-fill',
      color: '#f59e0b',
      bg: '#fffbeb',
      border: 'rgba(245, 158, 11, 0.3)'
    },
    {
      name: 'Real Estate & Housing',
      category: 'RERA Compliance & Joint Ventures',
      icon: 'bi-building',
      color: '#1e3a8a',
      bg: '#eff6ff',
      border: 'rgba(30, 58, 138, 0.3)'
    },
    {
      name: 'Packaging & Printing',
      category: 'Raw Material Yield Analysis',
      icon: 'bi-box-seam-fill',
      color: '#b45309',
      bg: '#fef3c7',
      border: 'rgba(180, 83, 9, 0.3)'
    },
    {
      name: 'Waste Management',
      category: 'EPR Credits & Environmental Cost',
      icon: 'bi-recycle',
      color: '#16a34a',
      bg: '#f0fdf4',
      border: 'rgba(22, 163, 74, 0.3)'
    },
    {
      name: 'Fintech & Financial Services',
      category: 'NBFC Compliances & Virtual CFO',
      icon: 'bi-cash-coin',
      color: '#047857',
      bg: '#ecfdf5',
      border: 'rgba(4, 120, 87, 0.3)'
    },
    {
      name: 'Gems & Precision Jewellery',
      category: 'Inventory Audit & Metal Variance',
      icon: 'bi-gem',
      color: '#c026d3',
      bg: '#fdf4ff',
      border: 'rgba(192, 38, 211, 0.3)'
    },
    {
      name: 'Manpower & Staffing',
      category: 'PF, ESI & Margin Costing',
      icon: 'bi-people-fill',
      color: '#0284c7',
      bg: '#f0f9ff',
      border: 'rgba(2, 132, 199, 0.3)'
    },
    {
      name: 'Retail & E-Commerce',
      category: 'Marketplace Reconciliation & SKU',
      icon: 'bi-cart-check-fill',
      color: '#dc2626',
      bg: '#fef2f2',
      border: 'rgba(220, 38, 38, 0.3)'
    }
  ];

  reviews = [
    {
      name: 'Rajesh Patel',
      designation: 'Managing Director',
      company: 'Precision Engineering Works (Vatva GIDC)',
      service: 'Product Costing & Wastage Control',
      initials: 'RP',
      color: 'navy',
      comment: 'Before working with CMA Urvesh, our product pricing was largely guesswork. His team implemented unit-level BOM costing and overhead allocations. We cut over ₹14 Lakh in avoidable factory scrap in our very first year.'
    },
    {
      name: 'Amit Shah',
      designation: 'Co-Founder & CEO',
      company: 'CleanTech Solar Solutions',
      service: 'Virtual CFO & Monthly MIS',
      initials: 'AS',
      color: 'green',
      comment: 'Hiring a ₹30 Lakh/yr full-time CFO was out of reach for our growing solar company. U N Nimbadkar & Associates took over as our Virtual CFO. Now we receive complete monthly MIS by the 5th, clean cash runway, and total peace of mind.'
    },
    {
      name: 'Dharmesh Desai',
      designation: 'Director',
      company: 'Apex Polymers & Chemicals',
      service: 'Section 148 Cost Audit & IFC',
      initials: 'DD',
      color: 'navy',
      comment: 'Their deep command over Section 148 statutory Cost Audit and inventory reconciliation is second to none. Direct involvement from CMA Urvesh gave our board tremendous confidence during statutory filings.'
    },
    {
      name: 'Nilesh Mehta',
      designation: 'Promoter',
      company: 'SwiftMove Logistics & Supply Chain',
      service: 'Bank DPR & Working Capital CMA Data',
      initials: 'NM',
      color: 'green',
      comment: 'They prepared our Detailed Project Report and CMA Data for a ₹6 Crore working capital limit with the bank. The bank manager complimented the clarity and accuracy of the projections. Sanctioned without delays!'
    },
    {
      name: 'Pooja Radhakrishnan',
      designation: 'Finance Head',
      company: 'EcoPack Agro Industries',
      service: 'GST Reconciliation & ITC Recovery',
      initials: 'PR',
      color: 'navy',
      comment: 'We had complex pending Input Tax Credit mismatches from multiple vendors. Urvesh and his taxation desk reconciled our portal records and successfully recovered ₹28 Lakh of blocked credit.'
    },
    {
      name: 'Vikas Solanki',
      designation: 'Managing Partner',
      company: 'Solanki Infrastructure & Projects',
      service: 'Virtual CFO & Cash Runway Advisory',
      initials: 'VS',
      color: 'green',
      comment: 'In contracting and construction, cash flow timing is life or death. Their weekly payment calendars and vendor release models prevented sudden overdrafts. Highly recommended for any serious promoter.'
    }
  ];

  // =========================================================================
  // Clean & Professional FAQ Section
  // =========================================================================
  openFaqId: number | null = 1; // 1st FAQ open by default

  faqs: FaqItem[] = [
    {
      id: 1,
      question: 'What is the key difference between a Chartered Accountant (CA) and a Cost & Management Accountant (CMA)?',
      answer: 'While Chartered Accountants (CAs) primarily focus on historical accounting records, statutory financial audits, and direct taxes, Cost & Management Accountants (CMAs) specialize in forward-looking financial strategy, unit-level product costing, factory wastage reduction, statutory Section 148 Cost Audits, and Virtual CFO leadership to actively increase operating profits.'
    },
    {
      id: 2,
      question: 'How does the Virtual CFO service work for small businesses and MSMEs?',
      answer: 'Hiring a full-time CFO typically costs ₹25 Lakh to ₹50 Lakh+ per year, which is not viable for most MSMEs. With our Virtual CFO service, CMA Urvesh Nimbadkar and senior team act as your strategic finance department on a flexible monthly retainer. We supervise your accounts staff, deliver monthly MIS reports by the 5th, manage cash flow runway, and guide strategic business decisions.'
    },
    {
      id: 3,
      question: 'When is a Cost Audit under Section 148 of the Companies Act mandatory in India?',
      answer: 'Under the Companies (Cost Records and Audit) Rules, 2014, a statutory Cost Audit by a practicing CMA is legally mandatory for regulated sector companies with an annual turnover of ₹50 Crore or more, and non-regulated manufacturing sectors with a turnover of ₹100 Crore or more. Maintenance of cost records is required at an earlier threshold of ₹35 Crore+.'
    },
    {
      id: 4,
      question: 'How do you help manufacturing units reduce costs and factory scrap?',
      answer: 'We conduct on-site Bill of Materials (BOM) yield analyses, machine downtime tracking, and overhead variance audits. By comparing standard design benchmarks with actual shop-floor consumption, we identify invisible scrap, rework, and unrecovered overheads—typically helping clients reduce 2% to 5% of avoidable material waste within 6 months.'
    },
    {
      id: 5,
      question: 'How are your professional fees structured?',
      answer: 'We believe in full transparency with zero hidden charges. For recurring advisory services like Virtual CFO and Monthly MIS, we operate on a fixed monthly retainer based on your company size. For statutory Cost Audits, Bank DPRs, and certifications, fees are project-based with clearly agreed scopes.'
    },
    {
      id: 6,
      question: 'How do we begin working with U N Nimbadkar & Associates?',
      answer: 'Simply call us at +91 98241 64586 or send a WhatsApp message. We arrange an initial discovery discussion to understand your business requirements, review your current accounting status, and propose a tailored engagement plan that fits your business scale.'
    }
  ];

  toggleFaq(id: number) {
    this.openFaqId = this.openFaqId === id ? null : id;
    this.cdr.markForCheck();
  }

  get filteredServices(): ServiceItem[] {
    if (this.activeFilter === 'all') {
      return this.allServices;
    }
    return this.allServices.filter(s => {
      if (this.activeFilter === 'cfo') return s.id === 'virtual-cfo' || s.id === 'business-advisory';
      if (this.activeFilter === 'costing') return s.id === 'cost-management';
      if (this.activeFilter === 'tax') return s.id === 'gst-services' || s.id === 'direct-tax';
      if (this.activeFilter === 'audit') return s.id === 'audit-assurance' || s.id === 'cma-certifications';
      if (this.activeFilter === 'setup') return s.id === 'company-formation' || s.id === 'business-setup';
      if (this.activeFilter === 'finance') return s.id === 'project-finance';
      return true;
    });
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  submitConsultation(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (!this.formData.name || !this.formData.phone) {
      return;
    }

    const msg = encodeURIComponent(
      `Hello CMA Urvesh Nimbadkar,\n\nI visited your website and would like to request a consultation.\n\n` +
      `*Name:* ${this.formData.name}\n` +
      `*Mobile/WhatsApp:* ${this.formData.phone}\n` +
      `*Company:* ${this.formData.company || 'Not mentioned'}\n` +
      `*Email:* ${this.formData.email || 'Not mentioned'}\n` +
      `*Required Service:* ${this.formData.service}\n` +
      `*Message:* ${this.formData.message || 'Please contact me for details.'}`
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
    this.cdr.markForCheck();

    setTimeout(() => {
      this.formSubmitted = false;
      this.cdr.markForCheck();
    }, 8000);
  }

  // =========================================================================
  // Interactive Customer Reviews Arc Carousel (Dribbble Smooth Gliding Motion)
  // =========================================================================
  activeReviewIndex = 0;
  private reviewTimer: any = null;
  isReviewPaused = false;

  ngOnInit() {
    this.startReviewTimer();
  }

  ngOnDestroy() {
    this.stopReviewTimer();
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  startReviewTimer() {
    this.stopReviewTimer();
    this.reviewTimer = setInterval(() => {
      if (!this.isReviewPaused) {
        this.nextReview();
      }
    }, 6500);
  }

  stopReviewTimer() {
    if (this.reviewTimer) {
      clearInterval(this.reviewTimer);
      this.reviewTimer = null;
    }
  }

  pauseReviewTimer() {
    this.isReviewPaused = true;
  }

  resumeReviewTimer() {
    this.isReviewPaused = false;
  }

  setActiveReview(index: number) {
    if (index === this.activeReviewIndex) return;
    this.activeReviewIndex = index;
    this.startReviewTimer();
    this.cdr.markForCheck();
  }

  nextReview() {
    this.activeReviewIndex = (this.activeReviewIndex + 1) % this.reviews.length;
    this.startReviewTimer();
    this.cdr.markForCheck();
  }

  prevReview() {
    this.activeReviewIndex = (this.activeReviewIndex - 1 + this.reviews.length) % this.reviews.length;
    this.startReviewTimer();
    this.cdr.markForCheck();
  }

  getReviewPosition(index: number): { x: number; y: number; scale: number; opacity: number; zIndex: number; isActive: boolean } {
    const N = this.reviews.length;
    let diff = index - this.activeReviewIndex;
    while (diff > N / 2) diff -= N;
    while (diff < -N / 2) diff += N;

    const isActive = diff === 0;

    let x = 75;
    let y = 160;
    let opacity = 0;
    let scale = 0.88;

    if (diff === 0) {
      // Active center node dead-centered on the ring crest
      x = 115;
      y = 160;
      opacity = 1;
      scale = 1.12;
    } else if (diff === -1) {
      // Top node directly on the ring
      x = 77;
      y = 35;
      opacity = 0.7;
      scale = 0.88;
    } else if (diff === 1) {
      // Bottom node directly on the ring
      x = 77;
      y = 285;
      opacity = 0.7;
      scale = 0.88;
    } else if (diff === -2) {
      // Smooth exit above
      x = 35;
      y = -35;
      opacity = 0;
      scale = 0.6;
    } else if (diff === 2) {
      // Smooth entry below
      x = 35;
      y = 355;
      opacity = 0;
      scale = 0.6;
    } else {
      x = 0;
      y = 160;
      opacity = 0;
      scale = 0.5;
    }

    const zIndex = diff === 0 ? 10 : 4;

    return {
      x,
      y,
      scale,
      opacity,
      zIndex,
      isActive
    };
  }

  get currentReview() {
    return this.reviews[this.activeReviewIndex];
  }
}
