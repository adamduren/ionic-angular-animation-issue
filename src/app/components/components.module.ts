import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { AppointmentSummaryListItemComponent } from './appointment-summary-list-item/appointment-summary-list-item';

@NgModule({
  declarations: [AppointmentSummaryListItemComponent],
  imports: [IonicModule, CommonModule],
  exports: [AppointmentSummaryListItemComponent],
  providers: [],
  entryComponents: [],
})
export class ComponentsModule {}
