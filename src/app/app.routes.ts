import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { FounderComponent } from './pages/founder/founder.component';
import { WhyUsComponent } from './pages/why-us/why-us.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/:slug', component: ServiceDetailComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'team', component: FounderComponent },
  { path: 'founder', redirectTo: 'team', pathMatch: 'full' },
  { path: 'why-us', component: WhyUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
