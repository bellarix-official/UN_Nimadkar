import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-founder',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './founder.component.html',
  styleUrl: './founder.component.css'
})
export class FounderComponent {
  credentials = [
    { title: 'ACMA Qualified', desc: 'Associate Member of the Institute of Cost Accountants of India (ICMAI)' },
    { title: 'Practicing CMA', desc: 'Comprehensive statutory cost auditing, corporate finance, and business consulting practice' },
    { title: 'B.Com (Hons)', desc: 'Rigorous academic background in commerce, auditing, and corporate accounting' },
    { title: 'Strategic Advisory', desc: 'Hands-on executive financial direction for startups, MSMEs, and corporate enterprises' }
  ];


  specialistUnits = [
    {
      title: 'Virtual CFO & Strategic Finance Desk',
      role: 'Management Reporting & Cash Strategy',
      icon: 'bi-graph-up-arrow',
      desc: 'Dedicated financial analysts responsible for building rolling 13-week cash projections, monthly departmental MIS packages, and budget-vs-actual variance reports.'
    },
    {
      title: 'Statutory Cost Audit & Costing Wing',
      role: 'Sec 148 & Product Costing',
      icon: 'bi-calculator-fill',
      desc: 'Cost accountants specializing in manufacturing overhead allocation, bill of materials (BOM) auditing, standard costing variance, and Companies Act cost audit compliance.'
    },
    {
      title: 'Direct & Indirect Taxation Division',
      role: 'GST, Income Tax & Dept. Notice Replies',
      icon: 'bi-receipt-cutoff',
      desc: 'Tax specialists handling monthly GSTR-1 & 3B filings, automated GSTR-2B ITC reconciliations, advance tax calculations, ITR submissions, and scrutiny appeals.'
    },
    {
      title: 'Corporate Legal & Banking Desk',
      role: 'MCA, ROC, DPR & Bank Finance',
      icon: 'bi-bank2',
      desc: 'Professionals focused on company/LLP incorporation, statutory MCA filings, Detailed Project Reports (DPR), and Gujarat state industrial subsidy documentation.'
    }
  ];
}
