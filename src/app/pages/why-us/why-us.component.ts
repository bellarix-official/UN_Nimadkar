import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css'
})
export class WhyUsComponent {
  advantages = [
    {
      num: '01',
      title: 'Direct Founder Access & Involvement',
      desc: 'You deal directly with CMA Urvesh Nimbadkar (Founder & Lead Partner). Your financial numbers are reviewed by an experienced expert, not delegated to inexperienced trainees.'
    },
    {
      num: '02',
      title: 'Plain Indian Business Language',
      desc: 'We speak the language of business owners. We explain your balance sheet, profit margins, and tax responsibilities in simple, actionable terms without unnecessary jargon.'
    },
    {
      num: '03',
      title: '100% On-Time Statutory Compliance',
      desc: 'From monthly GSTR-3B filings to quarterly TDS returns and annual MCA compliances, our proactive compliance tracker prevents costly late fees and notices.'
    },
    {
      num: '04',
      title: 'Cost Control & Margin Optimization',
      desc: 'Most accounting firms only check taxes. As Cost Accountants, we analyze product costs, raw material scrap, factory overheads, and vendor prices to increase your net profit.'
    },
    {
      num: '05',
      title: 'High Cost & Time Efficiency',
      desc: 'Get full executive financial leadership, weekly cash flow monitoring, and investor-grade models at a fraction of the cost of hiring a full-time in-house CFO.'
    },
    {
      num: '06',
      title: 'Seamless Scalability (₹3 Cr to ₹1000 Cr)',
      desc: 'Whether you are raising seed capital or operating a multi-crore manufacturing enterprise, our financial processes scale effortlessly with your revenue growth.'
    }
  ];

  comparisonPoints = [
    {
      aspect: 'Focus Area',
      traditional: 'Historical data entry and filing annual taxes',
      cmaFirm: 'Forward-looking cash flow, product margins, and profit growth'
    },
    {
      aspect: 'Reporting Frequency',
      traditional: 'Once a year or whenever tax deadline is near',
      cmaFirm: 'Weekly cash runway & monthly executive MIS dashboards'
    },
    {
      aspect: 'Costing & Waste Analysis',
      traditional: 'Rarely done; overheads are dumped into generic accounts',
      cmaFirm: 'Deep product-wise and department-wise cost control systems'
    },
    {
      aspect: 'Business Strategy Support',
      traditional: 'No guidance on pricing, fundraising, or bank loans',
      cmaFirm: 'Bank-ready DPRs, investor pitch decks, and pricing strategies'
    },
    {
      aspect: 'Internal Systems & ERP',
      traditional: 'Limited to basic bookkeeping software data entry',
      cmaFirm: 'ERP selection, SOP design, and internal control reviews'
    }
  ];
}
