import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  pillars = [
    {
      title: 'Our Mission',
      desc: 'To empower ambitious Indian enterprises with reliable financial leadership, structured internal systems, and deep costing insights that fuel sustainable profitability.',
      icon: 'bi-compass',
      colorClass: 'navy'
    },
    {
      title: 'Our Practical Approach',
      desc: 'No cookie-cutter packages. Every engagement is customized to the business size, industry vertical, and operational stage of the enterprise.',
      icon: 'bi-bullseye',
      colorClass: 'green'
    },
    {
      title: 'Real-Time Financial Command',
      desc: 'Transform raw, messy transactional books into actionable weekly and monthly MIS dashboards that business owners can review in minutes.',
      icon: 'bi-speedometer2',
      colorClass: 'gold'
    },
    {
      title: 'Zero-Penalty Compliance',
      desc: 'Proactive tracking of MCA, ROC, GST, TDS, and Income Tax deadlines so you never have to worry about penalty notices or legal bottlenecks.',
      icon: 'bi-shield-check',
      colorClass: 'purple'
    }
  ];
}
