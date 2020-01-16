import { PreProductionDataComponent } from './pre-production-data/pre-production-data.component';
import { NonTelcoPartnerComponent } from './non-telco-partner/non-telco-partner.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationFiltersComponent } from './configuration-filters/configuration-filters.component';


const routes: Routes = [
  { path: '', redirectTo: 'configuraion-filters', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'configuraion-filters', component: ConfigurationFiltersComponent},
  { path: 'non-telco-partner', component: NonTelcoPartnerComponent},
  { path: 'pre-production-data', component: PreProductionDataComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
