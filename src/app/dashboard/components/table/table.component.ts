import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculateAgePipe } from 'src/app/shared/pipes/calculate-age.pipe';
import { StatusDirective } from 'src/app/shared/directives/status.directive';

export type User = {
  name: string;
  email: string;
  dob: string;
  status: string;
}


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,CalculateAgePipe, StatusDirective],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  users: User[] = [
    {
      "name": "John Smith",
      "email": "john.smith@email.com",
      "dob": "1990-05-15",
      "status":"pending"
    },
    {
      "name": "Emily Johnson",
      "email": "emily.j@email.com",
      "dob": "1985-12-03",
      "status":"active"
    },
    {
      "name": "Michael Davis",
      "email": "michael.davis@email.com",
      "dob": "1995-08-22",
      "status":"active"
    },
    {
      "name": "Sarah Miller",
      "email": "sarah.miller@email.com",
      "dob": "",
      "status":"active"
    },
    {
      "name": "Brian Wilson",
      "email": "brian.w@email.com",
      "dob": "1998-11-28",
      "status":"pending"
    }
  ]
}
