import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationFiltersComponent } from './configuration-filters/configuration-filters.component';


const routes: Routes = [
  { path: '', redirectTo: 'configuraion-filters', pathMatch: 'full' },

{ path: 'configuraion-filters', component: ConfigurationFiltersComponent},
{ path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
