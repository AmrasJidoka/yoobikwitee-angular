import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {JidokanPresenceOverviewComponent} from './jidokan-presence-overview/jidokan-presence-overview.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule, CardModule, CheckboxModule, DropdownModule, TabViewModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { JidokanTotalOverviewComponent } from './jidokan-total-overview/jidokan-total-overview.component';
import { JidokanContainerComponent } from './jidokan-container/jidokan-container.component';
import { EvacuationListComponent } from './evacuation-list/evacuation-list.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'overview', pathMatch: 'full'},
  {path: 'evacuation-list', component: EvacuationListComponent},
  {path: 'overview', component: JidokanContainerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    JidokanPresenceOverviewComponent,
    JidokanTotalOverviewComponent,
    JidokanContainerComponent,
    EvacuationListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    TabViewModule,
    DropdownModule,
    CardModule,
    CheckboxModule,
    RouterModule.forRoot(
      routes
    ),
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
