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
  heroImage: string;
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
      id: 'audit-assurance',
      slug: 'audit-and-assurance',
      title: 'Audit & Assurance Services',
      category: 'Audit & Compliance',
      tagline: '',
      shortDesc: 'Statutory Cost Audit under Section 148, internal audit, forensic audit, management review, concurrent bank audit, and stock verification.',
      icon: 'bi-shield-check',
      badge: 'Statutory Mandate',
      heroImage: '/assets/images/services/audit-and-assurance.jpg',
      benefits: [
        '100% compliance with Section 148 of the Companies Act, 2013',
        'Detect internal control weaknesses before they lead to financial losses',
        'Physical verification of warehouse stock reconciled with accounting records',
        'Independent assurance for bank lenders, investors, and board members'
      ],
      targetAudience: 'Manufacturing companies covered under Section 148, banks, MSMEs, and corporate boards',
      subServices: [
        {
          name: 'Cost Audit & Cost Record',
          description: 'Verification of cost records and cost statements in accordance with applicable cost accounting standards and statutory requirements.',
          points: [
            'Verification of cost records and cost statements in accordance with applicable cost accounting standards and statutory requirements.',
            'Review of cost allocation, product costing, material consumption, labour and overheads.',
            'Identification of cost inefficiencies, abnormal losses and areas for cost reduction.',
            'Analysis of product-wise profitability, capacity utilisation and operational performance.',
            'Ensuring accuracy, completeness and consistency of cost records and reports'
          ]
        },
        {
          name: 'Internal Audit',
          description: 'Management oriented review of operations, internal financial controls, and performance to improve efficiency and reliability.',
          points: [
            'Management oriented advice on organisation and its operations.',
            'Performance and financial services.',
            'Promoting efficiency, economy and effectiveness of management processes.',
            'Adding to the reliability and accuracy of operations',
            'Internal Financial controls'
          ]
        },
        {
          name: 'Forensic Audit',
          description: 'Specialized investigation into financial discrepancies, asset misappropriation, conflicts of interest, and fraud prevention.',
          points: [
            'Identifying conflicts of interest, bribery and extortion leading to corruption.',
            'Asset misappropriation',
            'Intentional forgery of accounting performance.',
            'Preventing generation of NPAs.'
          ]
        },
        {
          name: 'Management Audit',
          description: 'Comprehensive evaluation of management policies, operational processes, and resource utilization to improve efficiency and profitability.',
          points: [
            'Evaluation of management policies, systems and operational processes.',
            'Review of efficiency, economy and effectiveness of business operations.',
            'Identification of operational gaps, control weaknesses and areas for improvement.',
            'Analysis of utilisation of resources and overall managerial performance.',
            'Providing management-oriented recommendations for improving efficiency and profitability'
          ]
        },
        {
          name: 'Concurrent Bank Audit',
          description: 'Review of procedures relating to processing loans, cash retention limits, bank vouchers, and monitoring potential NPAs.',
          points: [
            'Review of procedures related to processing and sanctioning loan',
            'Keeping an eye in cash retention limit.',
            'Maintenance of all bank vouchers',
            'Focusing on potential NPAs'
          ]
        },
        {
          name: 'Stock Audit',
          description: 'Physical verification and reconciliation of inventory with books and records to detect shortages, obsolete stock, and minimize losses.',
          points: [
            'Physical verification and reconciliation of inventory with books and records.',
            'Review of inventory valuation, movement, ageing and slow/non-moving stock.',
            'Identification of shortages, excesses, obsolete and damaged inventory.',
            'Verification of stock records, internal controls and inventory management procedures.',
            'Identifying discrepancies and strengthening controls to minimise inventory losses'
          ]
        }
      ]
    },
{
      id: 'virtual-cfo',
      slug: 'virtual-cfo-services',
      title: 'Virtual CFO Services',
      category: 'Strategic Finance',
      tagline: 'Your finance function, strengthened by strategic expertise.',
      shortDesc: 'Complete financial leadership, monthly MIS reports, cash flow planning, and strategic guidance customized for growing businesses.',
      icon: 'bi-person-workspace',
      badge: 'Most Popular',
      heroImage: '/assets/images/services/virtual-cfo-services.jpg',
      benefits: [
        'Save up to 70% compared to hiring a full-time in-house CFO',
        'Direct supervision of your accounts team for clean and error-free books',
        'Weekly and monthly MIS reports showing product margins and cash runway',
        'Investor pitch decks, financial models, and bank meeting support'
      ],
      targetAudience: 'Growing MSMEs, startups, LLPs, and family-run businesses across India',
      subServices: [
        {
          name: 'Financial Management & Controls',
          description: 'Building robust accounting processes, internal controls and financial reporting systems.'
        },
        {
          name: 'MIS, Analytics & Performance Management',
          description: 'Providing customized MIS, profitability analysis, KPI monitoring, budgeting and forecasting for informed decisions.'
        },
        {
          name: 'Cash Flow & Working Capital Management',
          description: 'Improving liquidity through cash-flow forecasting, receivables management, payables planning and working capital optimisation.'
        },
        {
          name: 'Growth Strategy & Business Planning',
          description: 'Supporting business plans, financial modelling, expansion decisions and long-term growth strategies.'
        },
        {
          name: 'Fundraising & Financial Readiness',
          description: 'Investor-ready financial models, projections, due diligence support, burn-rate monitoring and financial documentation.'
        },
        {
          name: 'Compliance & Risk Management',
          description: 'Monitoring tax and corporate compliances while identifying financial risks and strengthening governance.'
        },
        {
          name: 'Investor, Banker & Stakeholder Support',
          description: 'Supporting financial communication and representation with investors, banks and other financial institutions.'
        }
      ]
    },
{
      id: 'cost-management',
      slug: 'cost-management-advisory',
      title: 'Cost & Management Advisory Services',
      category: 'Costing & Operations',
      tagline: 'Transforming cost data into actionable insights for improved efficiency, profitability and sustainable business growth',
      shortDesc: 'Product costing systems, departmental cost tracking, variance analysis, and cost reduction to protect your profit margins.',
      icon: 'bi-calculator',
      badge: 'Core Practice',
      heroImage: '/assets/images/services/cost-management-advisory.jpg',
      benefits: [
        'Know the exact unit-level cost of every product or service',
        'Identify hidden factory losses, scrap leakages, and overhead waste',
        'Implement departmental accountability with clear cost centers',
        'Set competitive prices with confidence while protecting profits'
      ],
      targetAudience: 'Manufacturers, EPC contractors, process industries, and service enterprises across India',
      subServices: [
        {
          name: 'Product Costing & Costing Systems',
          description: 'Design and implementation of product-wise costing systems to accurately track material, labour and overhead costs and determine reliable product costs.'
        },
        {
          name: 'Departmental Costing & Performance Monitoring',
          description: 'Department-wise cost tracking and analysis to strengthen accountability, monitor performance and improve operational efficiency.'
        },
        {
          name: 'Variance Analysis & Corrective Action',
          description: 'Analysis of actual performance against budgets and standards to identify cost variances, their underlying causes and appropriate corrective actions.'
        },
        {
          name: 'Cost Control & Cost Reduction',
          description: 'Identification of cost-saving opportunities and implementation of effective cost-control measures to improve operational efficiency and optimise expenditure.'
        },
        {
          name: 'Profitability & Contribution Analysis',
          description: 'Analysis of product, service, customer and segment profitability to identify value drivers and support strategic pricing and resource-allocation decisions.'
        },
        {
          name: 'Budgeting, Implementation & Performance Analysis',
          description: 'Preparation and implementation of budgets, periodic budgetary control and performance analysis to align financial resources with business objectives.'
        }
      ]
    },
{
      id: 'gst-services',
      slug: 'indirect-taxation-gst',
      title: 'Indirect Taxation (GST) Services',
      category: 'Taxation',
      tagline: '',
      shortDesc: 'Complete GST registration, monthly GSTR-1 & 3B filing, GSTR-9/9C annual returns, ITC reconciliation, and notice replies.',
      icon: 'bi-receipt-cutoff',
      badge: 'High Demand',
      heroImage: '/assets/images/services/indirect-taxation-gst.jpg',
      benefits: [
        'Zero late fees with timely GSTR-1 and GSTR-3B filings',
        'Prevent ITC loss with continuous GSTR-2B vendor reconciliation',
        'Accurate GSTR-9 and GSTR-9C annual returns with complete reconciliation',
        'Expert representation for department notices, summons, and appeals'
      ],
      targetAudience: 'Manufacturers, traders, service providers, exporters, and businesses with GST registration',
      subServices: [
        {
          name: 'GST Registration & Compliance',
          description: 'GST registration, amendments, cancellation and end-to-end compliance support for businesses.'
        },
        {
          name: 'Returns & Reconciliation',
          description: 'Accurate preparation and filing of GST returns, including GSTR-1, GSTR-3B, GSTR-9 & GSTR-9C, with comprehensive reconciliation and review.'
        },
        {
          name: 'Refunds, Litigation & Appeals',
          description: 'GST refund advisory and filing, notice management, departmental representation, adjudication and appellate support.'
        },
        {
          name: 'GST Advisory & Transaction Structuring',
          description: 'Strategic GST advisory covering transaction structuring, supply-chain optimisation, classification, valuation and customs duty/GST-related certifications.'
        }
      ]
    },
{
      id: 'direct-tax',
      slug: 'direct-taxation-income-tax',
      title: 'Direct Taxation (Income Tax) Services',
      category: 'Taxation',
      tagline: '',
      shortDesc: 'Income Tax Return (ITR) filing, TDS/TCS compliance, 12A/80G registrations, tax planning, scrutiny assessments, and inventory valuation.',
      icon: 'bi-file-earmark-text',
      badge: 'Annual & Quarterly',
      heroImage: '/assets/images/services/direct-taxation-income-tax.jpg',
      benefits: [
        'Accurate tax computation minimizing tax liabilities legally',
        'Zero penalties on quarterly TDS challans and 24Q/26Q return filings',
        '26AS and AIS/TIS matching to avoid mismatch notices from CPC',
        'Professional handling of scrutiny assessments and faceless appeals'
      ],
      targetAudience: 'Individuals, HUFs, Partnership Firms, LLPs, and Private Limited Companies',
      subServices: [
        {
          name: 'Income Tax Return Filing',
          description: 'Preparation and filing of income tax returns for individuals, HUFs, partnership firms, LLPs, companies and other entities.'
        },
        {
          name: 'TDS & TCS Compliance',
          description: 'End-to-end TDS/TCS compliance, including computation, payment, return filing, reconciliation and related compliance support.'
        },
        {
          name: 'Tax Registration & Exemptions',
          description: 'Assistance with registration and compliance under Sections 12A/12AB and 80G for eligible charitable and non-profit entities.'
        },
        {
          name: 'Tax Planning & Advisory',
          description: 'Comprehensive tax planning and advisory services focused on tax efficiency, regulatory compliance and informed business decisions.'
        },
        {
          name: 'Income Tax Assessments, Appeals & Litigation',
          description: 'Support in income tax assessments, scrutiny proceedings, notices, submissions, appeals and representation before the appropriate authorities.'
        },
        {
          name: 'Inventory Valuation',
          description: 'Assistance with inventory valuation and related reporting requirements in accordance with applicable Income Tax Act provisions.'
        }
      ]
    },
{
      id: 'business-advisory',
      slug: 'business-advisory-value-added',
      title: 'Business Advisory & Value-Added Services',
      category: 'Management Advisory',
      tagline: '',
      shortDesc: 'Design and implementation of financial systems, Standard Operating Procedures (SOPs), custom MIS frameworks, and ERP deployment support.',
      icon: 'bi-diagram-3',
      badge: 'Business Efficiency',
      heroImage: '/assets/images/services/business-advisory-value-added.jpg',
      benefits: [
        'Standardize daily tasks with clear SOPs so your business runs smoothly',
        'Select and implement the right ERP software (Tally, Zoho Books, SAP)',
        'Clear visibility into operational bottlenecks and employee accountability',
        'Customized executive reporting dashboards designed for business owners'
      ],
      targetAudience: 'Growing enterprises scaling from 10 to 100+ team members',
      subServices: [
        {
          name: 'Financial Systems Design & Implementation',
          description: 'Design, review and implementation support for robust financial systems that strengthen controls, improve reporting and enhance operational efficiency.'
        },
        {
          name: 'Standard Operating Procedures (SOPs)',
          description: 'Development and implementation of well-defined SOPs to standardize processes, strengthen internal controls and enable consistent, efficient operations.'
        },
        {
          name: 'Management Reporting & MIS',
          description: 'Design of customized MIS and management reporting frameworks providing meaningful financial and operational insights for informed decision-making and effective governance.'
        },
        {
          name: 'ERP Advisory & Implementation Support',
          description: 'Strategic guidance on ERP selection, process mapping, customization and implementation to improve financial reporting, resource planning and overall operational efficiency.'
        }
      ]
    },
{
      id: 'company-formation',
      slug: 'company-formation-corporate-services',
      title: 'Company Formation & Corporate Services',
      category: 'Corporate Legal',
      tagline: '',
      shortDesc: 'Incorporation support for Private Limited, Section 8, and Public companies, corporate conversions, ROC annual filings, and secretarial documentation.',
      icon: 'bi-building',
      badge: 'Startup Ready',
      heroImage: '/assets/images/services/company-formation-corporate-services.jpg',
      benefits: [
        'Fast company incorporation with SPICe+ MCA approval within days',
        'Complete package including DIN, PAN, TAN, MOA, AOA, and bank account setup',
        'Expert guidance on selecting the right entity type (Pvt Ltd vs LLP vs OPC)',
        'Hassle-free conversion from proprietorship or partnership to corporate entity'
      ],
      targetAudience: 'Entrepreneurs, startup founders, partnership firms converting to corporate entities',
      subServices: [
        {
          name: 'Entity Formation & Incorporation',
          description: 'Incorporation support for OPCs, Section 8 Companies, Private Limited and Public Limited Companies, including statutory registrations and documentation.'
        },
        {
          name: 'Corporate Restructuring & Conversion',
          description: 'Advisory and compliance support for conversion and restructuring of proprietorships, partnership firms and LLPs into suitable corporate structures.'
        },
        {
          name: 'ROC, Annual & XBRL Filings',
          description: 'Preparation and filing of ROC forms, annual returns, XBRL filings and other statutory submissions to ensure timely corporate compliance.'
        },
        {
          name: 'Corporate Documentation & Secretarial Support',
          description: 'Support for DIN applications, MOA, AOA and other corporate documentation required for incorporation, governance and regulatory compliance.'
        }
      ]
    },
{
      id: 'business-setup',
      slug: 'business-setup-registration',
      title: 'Business Setup & Registration Services',
      category: 'Registrations',
      tagline: 'From business idea to compliant establishment – we help you set up the right structure and get the right registrations in place.',
      shortDesc: 'Company incorporation, startup recognition, entity structuring, Trademark, DARPAN, FSSAI, Import Export Code (IEC), and Digital Signatures (DSC).',
      icon: 'bi-patch-check',
      badge: 'Essential Licenses',
      heroImage: '/assets/images/services/business-setup-registration.jpg',
      benefits: [
        'Access Startup India benefits including tax exemptions and government support',
        'Protect your brand name, logo, and intellectual property with Trademark registration',
        'Get all essential business licenses under one roof without visiting multiple agents',
        'Instant issuance and renewal of Class-3 Digital Signature Certificates (DSC)'
      ],
      targetAudience: 'New business founders, startups, traders, exporters, and food businesses',
      subServices: [
        {
          name: 'Startup & Company Incorporation',
          description: 'Company incorporation, startup recognition and end-to-end support for establishing a new business.'
        },
        {
          name: 'Entity Formation & Structuring',
          description: 'Advisory and registration support for companies, LLPs, partnership firms, trusts, HUFs and proprietorships, with a focus on selecting the appropriate business structure.'
        },
        {
          name: 'Registrations, Licences & Approvals',
          description: 'Trademark, DARPAN, FSSAI, Import Export Code (IEC), Digital Signature Certificate (DSC) and other applicable registrations, licences and regulatory approvals.'
        }
      ]
    },
{
      id: 'project-finance',
      slug: 'project-finance-subsidy-advisory',
      title: 'Project Finance & Subsidy Advisory',
      category: 'Financing',
      tagline: 'From project planning to funding – structured financial solutions that help businesses access capital and maximise eligible incentives.',
      shortDesc: 'Detailed Project Reports (DPR), working capital and term loan advisory, government subsidies, credit rating liaison, and term sheet review.',
      icon: 'bi-cash-coin',
      badge: 'Funding & Subsidies',
      heroImage: '/assets/images/services/project-finance-subsidy-advisory.jpg',
      benefits: [
        'Bank-ready Detailed Project Reports (DPR) and CMA data prepared to meet bank criteria',
        'Assistance in securing working capital (Cash Credit / Overdraft) and term loans',
        'Support for documentation and application filing for Central and Gujarat State industrial subsidies',
        'Credit rating guidance to negotiate lower interest rates from banks'
      ],
      targetAudience: 'Manufacturers setting up new plants, expanding units, exporters, and MSME borrowers',
      subServices: [
        {
          name: 'Detailed Project Reports (DPR)',
          description: 'Preparation of comprehensive, bank-ready project reports covering project viability, financial projections, cost structure, funding requirements and repayment capacity.'
        },
        {
          name: 'Working Capital & Term Loan Advisory',
          description: 'Assistance with structuring working capital facilities and term loans, including financial documentation, projections and lender requirements.'
        },
        {
          name: 'Government Subsidies & Incentives',
          description: 'Support for documentation and applications relating to eligible Central Government and Gujarat State industrial subsidies, incentives and schemes.'
        },
        {
          name: 'Credit Rating & Bank Liaison',
          description: 'Advisory support for credit rating processes, financial information requirements and coordination with banks and financial institutions.'
        },
        {
          name: 'Term Sheet Review & Due Diligence',
          description: 'Review of financing term sheets and preparation of financial information and documentation to facilitate due diligence and funding decisions.'
        }
      ]
    },
{
      id: 'cma-certifications',
      slug: 'cma-certification-compliance',
      title: 'CMA Certification & Compliance',
      category: 'Certifications',
      tagline: '',
      shortDesc: 'Cost accounting records certification, Net Worth certificates, Customs & DGFT turnover certificates, grant utilization reports, and DSC issuance.',
      icon: 'bi-award',
      badge: 'Official UDIN Seal',
      heroImage: '/assets/images/services/cma-certification-compliance.jpg',
      benefits: [
        'Certified by a practicing Cost & Management Accountant with valid UDIN',
        'Accepted by all nationalized and private banks, government tender portals, and embassies',
        'Quick turnaround for urgent tender and visa deadlines',
        '100% compliant with statutory guidelines with zero rejection risk'
      ],
      targetAudience: 'Government tender bidders, bank loan applicants, visa applicants, exporters, and grant recipients',
      subServices: [
        {
          name: 'Cost Accounting Records Certification',
          description: 'Certification relating to maintenance and compliance of cost accounting records as applicable.'
        },
        {
          name: 'Net Worth & Financial Certifications',
          description: 'Net worth and financial certifications for tenders, visas, banking and other institutional requirements.'
        },
        {
          name: 'Customs & DGFT Certifications',
          description: 'Certification of Export-Import turnover and related information for customs, DGFT and other regulatory requirements.'
        },
        {
          name: 'Utilisation Certificates',
          description: 'Preparation and certification of utilisation certificates for government grants, subsidies and sanctioned funds.'
        },
        {
          name: 'Digital Signature Certificate (DSC) Services',
          description: 'Assistance with DSC issuance, renewal and related documentation for statutory and online compliance requirements.'
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
