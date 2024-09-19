import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule,ButtonModule,MenuModule, CommonModule,CardModule,TableModule,PaginatorModule,FormsModule,MultiSelectModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {




  items = [
    { label: 'Dashboard' },
    { label: 'Enquiries' },
    { label: 'Marketing' },
    { label: 'Leads' },
    { label: 'Customers' },
    { label: 'Tasks' },
    { label: 'Quotes' },
    { label: 'Inventory' },
    { label: 'Attendance' },
    { label: 'Organization' },
    { label: 'Reports' },
    { label: 'Users' },
  ];



  customers = [
    { name: 'Bessie Cooper', phone: '(609) 555-0123', description: 'Lorem ipsum dolor...', company: 'BuroSake', status: 'New', creationDate: '2022-01-24', daysIn: 1, assignedTo: 'Dakota', assignedAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    
    { name: 'Eleanor Pena', phone: '(505) 555-0192', description: 'Lorem ipsum dolor...', company: 'BMC Info', status: 'Deferred', creationDate: '2022-01-18', daysIn: 6, assignedTo: 'Olukay', assignedAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    
    { name: 'Eleanor Pena', phone: '(505) 555-0192', description: 'Lorem ipsum dolor...', company: 'BMC Info', status: 'In Progress', creationDate: '2022-01-18', daysIn: 20, assignedTo: 'Olukay', assignedAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    
    { name: 'Eleanor Pena', phone: '(505) 555-0192', description: 'Lorem ipsum dolor...', company: 'BMC Info', status: 'Deferred', creationDate: '2022-01-18', daysIn: 9, assignedTo: 'Olukay', assignedAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    
    { name: 'Eleanor Pena', phone: '(505) 555-0192', description: 'Lorem ipsum dolor...', company: 'BMC Info', status: 'In Progress', creationDate: '2022-01-18', daysIn: 11, assignedTo: 'Olukay', assignedAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },

    { name: 'Eleanor Pena', phone: '(505) 555-0192', description: 'Lorem ipsum dolor...', company: 'BMC Info', status: 'In Progress', creationDate: '2022-01-18', daysIn: 11, assignedTo: 'Olukay', assignedAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },

    { name: 'Eleanor Pena', phone: '(505) 555-0192', description: 'Lorem ipsum dolor...', company: 'BMC Info', status: 'In Progress', creationDate: '2022-01-18', daysIn: 11, assignedTo: 'Olukay', assignedAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
 
  ];
  

  statusOptions = [
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
    { label: 'Pending', value: 'pending' }
];

}

