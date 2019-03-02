import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appointment-summary-list-item',
  templateUrl: 'appointment-summary-list-item.html',
  styleUrls: ['appointment-summary-list-item.scss'],
})
export class AppointmentSummaryListItemComponent {
  @Input()
  public appointmentSummary: any;
}
