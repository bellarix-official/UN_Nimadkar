import { Injectable } from '@angular/core';

export interface SubService {
  name: string;
  description: string;
  points?: string[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  shortDesc: string;
  icon: string;
  badge: string;
  subServices: SubService[];
  benefits: string[];
  targetAudience: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicesDataService {
  private readonly services: ServiceItem[] = [
    {
      id: 'virtual-cfo',
      slug: 'virtual-cfo-services',
      title: 'Virtual CFO Services',
      category: 'Strategic Finance',
      tagline: 'Your finance function, strengthened by strategic executive leadership.',
      shortDesc: 'Complete financial management, monthly MIS reports, and strategic guidance customized for startups and growing MSMEs.',
      icon: 'bi-person-workspace',
      badge: 'Most Popular',
      benefits: [
        'Save up to 70% compared to hiring a full-time in-house CFO',
        'Direct supervision of your accounts team for error-free books',
        'Weekly & monthly MIS reports showing product margins and cash runway',
        'Investor pitch decks, financial models, and valuation support'
      ],
      targetAudience: 'Startups, MSMEs, LLPs & growing family businesses across India',
      subServices: [
        {
          name: 'Financial Management & Controls',
          description: 'Building robust accounting processes, internal controls, and day-to-day accounts supervision for clean, reliable books.'
        },
        {
          name: 'MIS, Analytics & Performance Management',
          description: 'Providing customized weekly, monthly, and quarterly MIS dashboards with product-wise, segment-wise, and customer-wise margin tracking.'
        },
        {
          name: 'Cash Flow & Working Capital Planning',
          description: 'Improving business liquidity through predictive cash forecasting, receivable collection monitoring, and vendor payables scheduling.'
        },
        {
          name: 'Growth Strategy & Business Planning',
          description: 'Preparing financial models, annual operating plans, profitability targets, and expansion blueprints.'
        },
        {
          name: 'Fundraising & Due Diligence Readiness',
          description: 'Building institutional-grade financial projections, pitch decks, burn-rate monitoring, and term-sheet review.'
        },
        {
          name: 'Compliance & Risk Management',
          description: 'Oversight of GST, TDS, Income Tax, and ROC filings to ensure zero late fees and avoid department penalties.'
        }
      ]
    },
    {
      id: 'cost-management',
      slug: 'cost-management-advisory',
      title: 'Cost & Management Advisory',
      category: 'Costing & Operations',
      tagline: 'Transforming cost data into actionable insights for improved efficiency and profitability.',
      shortDesc: 'Product costing systems, variance analysis, and operational cost control to stop waste and protect your profit margins.',
      icon: 'bi-calculator',
      badge: 'Core Practice',
      benefits: [
        'Know the exact unit-level cost of every product or service',
        'Identify hidden factory losses, scrap leakages, and overhead waste',
        'Implement departmental accountability with clear cost centers',
        'Set competitive prices with confidence while protecting profits'
      ],
      targetAudience: 'Manufacturers, EPC contractors, process industries, and service enterprises',
      subServices: [
        {
          name: 'Product Costing & Costing Systems',
          description: 'Design and implementation of product-wise costing systems to accurately track material, labour, and overhead costs and determine reliable product costs.'
        },
        {
          name: 'Departmental Costing & Accountability',
          description: 'Department-wise cost tracking and analysis to strengthen accountability, monitor resource usage, and improve operational efficiency.'
        },
        {
          name: 'Variance Analysis & Corrective Action',
          description: 'Analysis of actual operational performance against budgets and standards to isolate cost variances, their causes, and corrective remedies.'
        },
        {
          name: 'Cost Control & Waste Reduction',
          description: 'Systematic identification of cost-saving opportunities and implementation of practical cost-control measures across factory and office operations.'
        },
        {
          name: 'Profitability & Contribution Analysis',
          description: 'Analysis of product, service, customer, and segment profitability to identify true profit drivers and support strategic pricing.'
        },
        {
          name: 'Budgeting & Budgetary Control',
          description: 'Preparation and rollout of annual and monthly operating budgets with periodic variance analysis to keep your team aligned with targets.'
        }
      ]
    },
    {
      id: 'audit-assurance',
      slug: 'audit-and-assurance',
      title: 'Audit & Assurance Services',
      category: 'Audit & Compliance',
      tagline: 'Independent verification to ensure internal governance, asset safety, and statutory compliance.',
      shortDesc: 'Statutory Section 148 Cost Audit, internal audit, stock audit, and physical fixed asset verification.',
      icon: 'bi-shield-check',
      badge: 'Statutory Mandate',
      benefits: [
        '100% compliance with Section 148 of the Companies Act, 2013',
        'Detect internal control weaknesses before they turn into losses',
        'Physical verification of warehouse stock reconciled with accounting records',
        'Independent assurance for bank lenders, investors, and board members'
      ],
      targetAudience: 'Companies covered under Section 148, banks, MSMEs, and corporate boards',
      subServices: [
        {
          name: 'Cost Audit & Cost Records (Sec 148)',
          description: 'Statutory verification of cost records and preparation of Cost Audit reports in accordance with Cost Accounting Standards and MCA guidelines.'
        },
        {
          name: 'Internal Audit & IFC Review',
          description: 'Systematic evaluation of operational processes, internal financial controls (IFC), and governance to prevent leakages and improve reliability.'
        },
        {
          name: 'Stock & Inventory Audit',
          description: 'Physical count and verification of inventory, reconciliation with books, review of slow-moving/obsolete stock, and inventory loss control.'
        },
        {
          name: 'Fixed Assets Verification',
          description: 'Physical inspection and tagging of plant, machinery, and fixed assets with fixed asset register (FAR) reconciliation.'
        },
        {
          name: 'Forensic Audit & Risk Assessment',
          description: 'Specialized investigation into financial discrepancies, conflict of interest, asset misappropriation, and operational irregularities.'
        },
        {
          name: 'Concurrent Bank Audit',
          description: 'Verification of loan documentation, credit utilization, drawing power verification, and monitoring potential NPA indicators.'
        }
      ]
    },
    {
      id: 'gst-services',
      slug: 'indirect-taxation-gst',
      title: 'Indirect Taxation (GST) Services',
      category: 'Taxation',
      tagline: 'End-to-end GST compliance, monthly filings, reconciliation, and representation.',
      shortDesc: 'Complete GST management from registration and monthly returns to GSTR-9/9C annual reconciliation and department notice replies.',
      icon: 'bi-receipt-cutoff',
      badge: 'High Demand',
      benefits: [
        'Zero late fees with timely GSTR-1 and GSTR-3B filings',
        'Prevent 100% ITC loss with continuous GSTR-2B vendor reconciliation',
        'Clean GSTR-9 and GSTR-9C annual filings backed by CMA working sheets',
        'Expert representation for department show-cause notices and audit queries'
      ],
      targetAudience: 'Traders, manufacturers, service providers, exporters, and ecommerce sellers',
      subServices: [
        {
          name: 'GST Registration & Amendments',
          description: 'End-to-end GST registration for new business entities, additional place of business amendments, core field updates, and cancellations.'
        },
        {
          name: 'Periodic Returns & 2B Reconciliation',
          description: 'Accurate preparation and timely filing of GSTR-1 and GSTR-3B, with comprehensive Input Tax Credit (ITC) matching to avoid double taxation.'
        },
        {
          name: 'Annual Return & Reconciliation (GSTR-9 & 9C)',
          description: 'Preparation, comprehensive reconciliation, and certification of GSTR-9 annual return and GSTR-9C self-certified reconciliation statement.'
        },
        {
          name: 'GST Refunds & Export Documentation',
          description: 'End-to-end processing of GST refunds on inverted duty structure, zero-rated export turnover without payment of tax (LUT), and excess cash ledger.'
        },
        {
          name: 'Litigation, Notices & Appellate Support',
          description: 'Drafting professional replies to GST scrutiny notices, summons, mismatch intimations (DRC-01 / ASMT-10), and appeal representation.'
        },
        {
          name: 'GST Advisory & Supply Chain Structuring',
          description: 'Strategic advisory on GST rates, HSN classification, valuation rules, cross-charge, reverse charge mechanism (RCM), and contract structuring.'
        }
      ]
    },
    {
      id: 'direct-tax',
      slug: 'direct-taxation-income-tax',
      title: 'Direct Taxation (Income Tax)',
      category: 'Taxation',
      tagline: 'Holistic income tax management, planning, and filing for businesses and individuals.',
      shortDesc: 'ITR filings, quarterly TDS/TCS compliance, corporate tax planning, and scrutiny representation.',
      icon: 'bi-file-earmark-text',
      badge: 'Annual & Quarterly',
      benefits: [
        'Accurate tax computation minimizing corporate and personal liabilities legally',
        'Zero penalties on quarterly TDS challans and 24Q/26Q quarterly returns',
        '26AS and AIS/TIS matching to avoid mismatch notices from CPC',
        'Professional handling of scrutiny assessments and faceless appeal submissions'
      ],
      targetAudience: 'Individuals, HUFs, Partnership Firms, LLPs, and Private Limited Companies',
      subServices: [
        {
          name: 'Income Tax Return (ITR) Filing',
          description: 'Preparation and filing of Income Tax Returns for individuals, firms, LLPs, and companies with thorough scrutiny of books and 26AS/AIS.'
        },
        {
          name: 'TDS & TCS Compliance',
          description: 'End-to-end TDS/TCS computation, monthly challan generation, quarterly return filing (Form 24Q, 26Q, 27Q), and Form 16/16A generation.'
        },
        {
          name: 'Section 12A & 80G Registrations',
          description: 'Assistance with provisional and final registration under Sections 12A/12AB and 80G for eligible charitable and Section 8 entities.'
        },
        {
          name: 'Proactive Corporate Tax Planning',
          description: 'Strategic tax planning to optimize deductions, depreciation allowances, and incentives while staying fully compliant with law.'
        },
        {
          name: 'Assessments, Appeals & Notice Handling',
          description: 'Drafting precise legal responses for Income Tax notices, Section 143(1) adjustments, faceless scrutiny assessments, and CIT(Appeals).'
        },
        {
          name: 'Inventory Valuation under Income Tax',
          description: 'Certification and inventory valuation reporting in accordance with the provisions and rules of the Income Tax Act.'
        }
      ]
    },
    {
      id: 'company-formation',
      slug: 'company-formation-corporate-services',
      title: 'Company Formation & Corporate Services',
      category: 'Corporate Legal',
      tagline: 'Structuring and incorporating new business ventures with seamless statutory registrations.',
      shortDesc: 'Private Limited, LLP, Section 8 formation, corporate conversions, secretarial documentation, and ROC filings.',
      icon: 'bi-building-add',
      badge: 'Startup Ready',
      benefits: [
        'Speedy incorporation with SPICe+ MCA approval within days',
        'Complete package including DIN, PAN, TAN, MOA, AOA, and bank account setup',
        'Expert guidance on selecting the right entity type (Pvt Ltd vs LLP vs OPC)',
        'Hassle-free conversion from proprietorship/partnership to corporate entity'
      ],
      targetAudience: 'Entrepreneurs, new founders, partnership firms converting to Pvt Ltd/LLP',
      subServices: [
        {
          name: 'Entity Formation & Incorporation',
          description: 'Incorporation support for Private Limited, LLP, One Person Company (OPC), Section 8 Companies, and Public Limited entities.'
        },
        {
          name: 'Corporate Restructuring & Conversion',
          description: 'Advisory and complete procedural filing for converting sole proprietorships and partnership firms into LLPs or Private Limited companies.'
        },
        {
          name: 'ROC, Annual & XBRL Filings',
          description: 'Preparation and filing of ROC annual returns (MGT-7, AOC-4), XBRL filings, director KYC (DIR-3 KYC), and event-based MCA forms.'
        },
        {
          name: 'Corporate Secretarial Documentation',
          description: 'Assistance with Director Identification Number (DIN), digital signatures, MOA & AOA alterations, share certificates, and board resolutions.'
        }
      ]
    },
    {
      id: 'business-setup',
      slug: 'business-setup-registration',
      title: 'Business Setup & Registration Services',
      category: 'Registrations',
      tagline: 'From business idea to compliant establishment — we help you get the right registrations in place.',
      shortDesc: 'Startup India DPIIT recognition, Trademark registration, MSME Udyam, FSSAI license, IEC, and DSC.',
      icon: 'bi-patch-check',
      badge: 'Essential Licenses',
      benefits: [
        'Access Startup India benefits like tax exemptions and fast-track patents',
        'Protect your brand name, logo, and intellectual property with Trademark filings',
        'Get all essential business licenses under one roof without visiting multiple agents',
        'Instant issuance of Digital Signature Certificates (DSC) Class-3'
      ],
      targetAudience: 'New business starters, growing traders, exporters, food businesses',
      subServices: [
        {
          name: 'Startup India Registration & DPIIT',
          description: 'Official DPIIT recognition under Startup India scheme to unlock income tax exemptions under Section 80-IAC and angel tax relief.'
        },
        {
          name: 'Entity Structuring & Registrations',
          description: 'Registration of Partnership deeds, Trust deeds, HUF deeds, and proprietorship commercial registrations.'
        },
        {
          name: 'Trademark & Intellectual Property',
          description: 'Comprehensive brand search, trademark application filing, examination report replies, and registration certificate procurement.'
        },
        {
          name: 'Commercial Licenses (FSSAI, IEC, DARPAN)',
          description: 'Procurement of Import Export Code (IEC) from DGFT, FSSAI food license, MSME Udyam registration, and NITI Aayog DARPAN enrollment.'
        },
        {
          name: 'Digital Signature Certificate (DSC)',
          description: 'Issuance and renewal of Class-3 Digital Signatures with encrypted USB tokens for directors and authorized signatories.'
        }
      ]
    },
    {
      id: 'business-advisory',
      slug: 'business-advisory-value-added',
      title: 'Business Advisory & Value-Added Services',
      category: 'Management Advisory',
      tagline: 'Transforming internal financial architecture, business processes, and workflows for high-growth firms.',
      shortDesc: 'Financial system design, Standard Operating Procedures (SOPs), custom MIS frameworks, and ERP deployment guidance.',
      icon: 'bi-diagram-3',
      badge: 'Efficiency Boost',
      benefits: [
        'Standardize daily tasks with clear SOPs so your business runs without your constant presence',
        'Select and deploy the right ERP (Tally, Zoho Books, SAP) without costly implementation failures',
        'Clear visibility into operational bottlenecks and employee accountability',
        'Customized executive reporting dashboards tailored to the founder’s review style'
      ],
      targetAudience: 'Growing enterprises scaling from 10 to 100+ team members',
      subServices: [
        {
          name: 'Financial Systems Design & Review',
          description: 'Designing and implementing structured internal financial workflows, payment authorization limits, and billing review checkpoints.'
        },
        {
          name: 'Standard Operating Procedures (SOPs)',
          description: 'Drafting clear, step-by-step SOPs for purchasing, inventory handling, sales billing, credit control, and accounts payable.'
        },
        {
          name: 'Management Reporting Frameworks',
          description: 'Setting up weekly and monthly MIS reporting formats giving actionable insights into margins, collections, and cost centers.'
        },
        {
          name: 'ERP Selection & Deployment Support',
          description: 'Evaluating software options, charting accounts, configuring cost centers, and overseeing smooth transition from legacy records.'
        }
      ]
    },
    {
      id: 'project-finance',
      slug: 'project-finance-subsidy-advisory',
      title: 'Project Finance & Subsidy Advisory',
      category: 'Financing',
      tagline: 'From project planning to funding — structured financial solutions that help businesses access capital.',
      shortDesc: 'Detailed Project Reports (DPR), bank CMA data, working capital & term loan documentation, and Gujarat State subsidies.',
      icon: 'bi-cash-coin',
      badge: 'Funding & Grants',
      benefits: [
        'Bank-ready DPRs and CMA reports prepared to meet lender underwriting standards',
        'Assistance in securing working capital (Cash Credit / Overdraft) and term loans',
        'Documentation and claim processing for Gujarat State industrial capital & interest subsidies',
        'Credit rating advisory to secure cheaper borrowing rates from banks'
      ],
      targetAudience: 'Manufacturers setting up new plants, expanding units, exporters, MSME borrowers',
      subServices: [
        {
          name: 'Detailed Project Reports (DPR)',
          description: 'Preparation of comprehensive, bank-ready project reports covering technical feasibility, cost estimation, financial projections, and payback schedules.'
        },
        {
          name: 'Working Capital & Term Loan Advisory',
          description: 'Assisting businesses in structuring credit facilities, preparing CMA data, and liaising with nationalized and private banks.'
        },
        {
          name: 'Government Subsidies & Schemes',
          description: 'Complete documentation and filing for Central and Gujarat State industrial incentives (capital subsidy, interest subsidy, power tariff concessions).'
        },
        {
          name: 'Credit Rating & Bank Liaison',
          description: 'Advisory support for credit rating agencies, financial presentation, and negotiation of banking margins and collateral terms.'
        },
        {
          name: 'Term Sheet Review & Due Diligence',
          description: 'Review of sanction letters, financial covenants, and loan documentation to safeguard borrower commercial interests.'
        }
      ]
    },
    {
      id: 'cma-certifications',
      slug: 'cma-certification-compliance',
      title: 'CMA Statutory Certifications',
      category: 'Certifications',
      tagline: 'Professional CMA certifications mandated under central, state, and banking regulations.',
      shortDesc: 'Net worth certificates, cost accounting record certifications, Customs & DGFT turnover certificates, and grant utilization reports.',
      icon: 'bi-award',
      badge: 'Official Seal',
      benefits: [
        'Certified by a practicing Cost & Management Accountant with valid UDIN',
        'Accepted by all nationalized banks, government tender portals, and embassies',
        'Rapid turnaround for urgent tender and visa deadlines',
        'Strict statutory adherence ensuring zero rejection risk'
      ],
      targetAudience: 'Bidders on government tenders, loan applicants, visa applicants, exporters, grantees',
      subServices: [
        {
          name: 'Cost Accounting Records Certification',
          description: 'Formal certification verifying that statutory cost records have been maintained as required by the Companies Act.'
        },
        {
          name: 'Net Worth & Financial Certifications',
          description: 'Issuance of Net Worth certificates for government e-tenders, bank loan processing, foreign travel/visa documentation, and franchises.'
        },
        {
          name: 'Customs & DGFT Certifications',
          description: 'Certification of Export-Import turnover, EPCG compliance, and related financial data for Customs and DGFT submissions.'
        },
        {
          name: 'Grant & Subsidy Utilisation Certificates',
          description: 'Preparation and formal certification of fund utilization certificates for state/central government grants and schemes.'
        }
      ]
    }
  ];

  getAllServices(): ServiceItem[] {
    return this.services;
  }

  getFeaturedServices(): ServiceItem[] {
    return this.services.slice(0, 6);
  }

  getServiceBySlug(slug: string): ServiceItem | undefined {
    return this.services.find(s => s.slug === slug || s.id === slug);
  }

  getCategories(): string[] {
    const categories = new Set(this.services.map(s => s.category));
    return Array.from(categories);
  }
}
