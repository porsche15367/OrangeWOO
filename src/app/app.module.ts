import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConfigurationFiltersComponent } from './configuration-filters/configuration-filters.component';
import { HeaderComponent } from './layout/header/header.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {MultiSelectModule} from 'primeng/multiselect';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import { NonTelcoPartnerComponent } from './non-telco-partner/non-telco-partner.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {HttpClientModule} from '@angular/common/http';
import { GeneralService } from './services/general.service';
import { PreProductionDataComponent } from './pre-production-data/pre-production-data.component';
import { ErrorsTableComponent } from './errors-table/errors-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfigurationFiltersComponent,
    HeaderComponent,
    SideNavComponent,
    NonTelcoPartnerComponent,
    PreProductionDataComponent,
    ErrorsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    MultiSelectModule,
    ButtonModule,
    CalendarModule,
    TableModule,
    DialogModule,
    HttpClientModule 
  ],
  providers: [ GeneralService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
