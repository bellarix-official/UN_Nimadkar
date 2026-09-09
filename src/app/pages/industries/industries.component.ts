import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface IndustryData {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  costingChallenges: string[];
  cmaSolutions: string[];
  regulatoryNotes: string;
}

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.css'
})
export class IndustriesComponent {
  selectedCategory = 'all';

  categories = [
    { id: 'all', label: 'All Sectors' },
    { id: 'manufacturing', label: 'Manufacturing & Core' },
    { id: 'energy', label: 'Clean Energy & Chemicals' },
    { id: 'agro', label: 'Agro & Food Processing' },
    { id: 'infra', label: 'Infra & Real Estate' },
    { id: 'tech', label: 'Tech & Modern Services' }
  ];

  industries: IndustryData[] = [
    {
      id: 'mfg-eng',
      name: 'Manufacturing & Engineering',
      category: 'manufacturing',
      icon: 'bi-gear-fill',
      description: 'Precision machining, metal fabrication, tooling, and industrial equipment manufacturing.',
      costingChallenges: ['Machine-hour rate estimation', 'Work-in-progress (WIP) valuation', 'Rejection & shop-floor scrap control'],
      cmaSolutions: ['Standard costing models', 'Unit-level BOM cost tracking', 'Break-even & capacity utilization analysis'],
      regulatoryNotes: 'Section 148 Cost Audit mandatory if turnover exceeds ₹50 Cr / ₹100 Cr threshold.'
    },
    {
      id: 'solar-energy',
      name: 'Solar & Renewable Energy',
      category: 'energy',
      icon: 'bi-sun-fill',
      description: 'EPC solar contractors, rooftop solar installers, component fabricators, and green tech providers.',
      costingChallenges: ['Project-wise margin erosion', 'Long working capital cycles', 'Subsidy disbursement cash delays'],
      cmaSolutions: ['Milestone-based project costing', 'Cash runway forecasting', 'Bank DPRs for equipment financing'],
      regulatoryNotes: 'Detailed subsidy documentation, vendor reconciliation, and green tax incentive structuring.'
    },
    {
      id: 'chemicals',
      name: 'Chemicals & Petrochemicals',
      category: 'energy',
      icon: 'bi-droplet-half',
      description: 'Specialty chemicals, dyes, pigments, industrial solvents, and petrochemical intermediaries.',
      costingChallenges: ['Volatile raw material rates', 'By-product & joint-product costing', 'Strict effluent compliance costs'],
      cmaSolutions: ['Yield & recipe-based batch costing', 'Yield variance monitoring', 'Inventory valuation per Ind AS 2'],
      regulatoryNotes: 'Covered under regulated sector list for Companies (Cost Records and Audit) Rules.'
    },
    {
      id: 'pharma',
      name: 'Pharmaceuticals & Healthcare',
      category: 'manufacturing',
      icon: 'bi-capsule',
      description: 'Formulations, API manufacturing, surgical disposables, and diagnostic chain operations.',
      costingChallenges: ['Batch yield discrepancies', 'High QA/QC overhead allocation', 'Expiry and batch recall losses'],
      cmaSolutions: ['Activity-Based Costing (ABC)', 'R&D expenditure capitalization', 'Strict batch traceability records'],
      regulatoryNotes: 'Regulated sector under Section 148; mandatory CRA-1 format maintenance.'
    },
    {
      id: 'food-agro',
      name: 'Food Processing & Agro Commodities',
      category: 'agro',
      icon: 'bi-egg-fried',
      description: 'Grain mills, cold storage facilities, edible oil processing, spices, and dairy packaging.',
      costingChallenges: ['Seasonal purchase price swings', 'Perishable wastage & shrinkage', 'FMCG distributor margin structures'],
      cmaSolutions: ['Seasonal hedging budget models', 'Transit loss audit systems', 'Direct vs. distribution channel ROI'],
      regulatoryNotes: 'FSSAI compliance records, agricultural mandi cess tracking, and GST reverse charge.'
    },
    {
      id: 'textiles',
      name: 'Textiles, Garments & Apparel',
      category: 'manufacturing',
      icon: 'bi-scissors',
      description: 'Spinning, weaving, denim processing, garment exports, and synthetic yarn units.',
      costingChallenges: ['Yarn-to-fabric conversion losses', 'Order-specific fabric wastage', 'Frequent style turnover costs'],
      cmaSolutions: ['Standard conversion cost tables', 'Job-work reconciliation', 'Export drawback & RoDTEP optimization'],
      regulatoryNotes: 'Cost records mandatory for integrated textile and synthetic yarn mills.'
    },
    {
      id: 'infra-construction',
      name: 'Infrastructure & Construction',
      category: 'infra',
      icon: 'bi-bricks',
      description: 'Civil contractors, road construction firms, industrial sheds, and MEP engineering providers.',
      costingChallenges: ['Subcontractor billing leaks', 'Equipment idle time costs', 'Material price escalation disputes'],
      cmaSolutions: ['Job-costing & contract ledger systems', 'Escalation clause audit', 'Project-wise cash flow management'],
      regulatoryNotes: 'RERA compliance, Ind AS 115 revenue recognition on percentage completion.'
    },
    {
      id: 'real-estate',
      name: 'Real Estate & Commercial Housing',
      category: 'infra',
      icon: 'bi-building',
      description: 'Residential townships, commercial retail hubs, and industrial plotting developers.',
      costingChallenges: ['FSI/TDR land cost allocation', 'Escrow account cash planning', 'Sales speed vs. interest cost'],
      cmaSolutions: ['Square-foot cost benchmarks', 'RERA quarterly compliance audits', 'Project viability financial modeling'],
      regulatoryNotes: 'Strict adherence to RERA Separate Bank Account withdrawal certification rules.'
    },
    {
      id: 'logistics',
      name: 'Logistics, Warehousing & Fleet',
      category: 'tech',
      icon: 'bi-truck',
      description: '3PL warehouse operators, container freight handlers, commercial trucking, and cold chain.',
      costingChallenges: ['Fuel price volatility', 'Route-wise profitability blindspots', 'Warehouse cubic-space idle cost'],
      cmaSolutions: ['Ton-kilometer cost metrics', 'Fleet maintenance lifecycle ROI', 'Customer-wise profitability analysis'],
      regulatoryNotes: 'E-way bill audit reconciliation, GST multi-state branch transfers.'
    },
    {
      id: 'plastics-pkg',
      name: 'Plastics, Polymers & Packaging',
      category: 'manufacturing',
      icon: 'bi-box-seam',
      description: 'Injection molding, blow molding, corrugated boxes, flexible laminate packaging, and PET preforms.',
      costingChallenges: ['Polymer granule price indexation', 'Re-grind material blending cost', 'Die & mold setup time losses'],
      cmaSolutions: ['Granule-to-finished conversion matrix', 'Tooling cost amortization', 'Scrap credit accounting'],
      regulatoryNotes: 'EPR (Extended Producer Responsibility) credit audits and plastic waste records.'
    },
    {
      id: 'tech-saas',
      name: 'IT, Startups & SaaS',
      category: 'tech',
      icon: 'bi-laptop',
      description: 'Software development agencies, B2B SaaS, mobile platforms, and fintech startups.',
      costingChallenges: ['Software engineer billing rates', 'Cloud server (AWS/GCP) cost spiraling', 'Burn-rate & runaway metrics'],
      cmaSolutions: ['Project profitability tracking', 'Unit economics (CAC / LTV)', 'Virtual CFO & investor board decks'],
      regulatoryNotes: 'Startup India tax exemptions, transfer pricing for cross-border software export.'
    },
    {
      id: 'waste-recycle',
      name: 'Waste Management & Circular Economy',
      category: 'energy',
      icon: 'bi-recycle',
      description: 'Industrial hazardous waste processors, e-waste recyclers, biomass pelleting, and scrap shredders.',
      costingChallenges: ['Unorganized scrap sourcing costs', 'Sorting & grading labor allocation', 'Pollution plant running costs'],
      cmaSolutions: ['Reverse logistics costing', 'Energy cost per ton of recovery', 'ESG compliance value modeling'],
      regulatoryNotes: 'State Pollution Control Board compliance, EPR certificate trading verification.'
    }
  ];

  get filteredIndustries(): IndustryData[] {
    if (this.selectedCategory === 'all') {
      return this.industries;
    }
    return this.industries.filter(item => item.category === this.selectedCategory);
  }

  setCategory(catId: string) {
    this.selectedCategory = catId;
  }
}
