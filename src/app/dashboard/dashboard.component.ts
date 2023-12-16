import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { NotificationComponent } from './components/notification/notification.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,TableComponent,NotificationComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

}
