import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from './models/customer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [CommonModule, FormsModule]
})
export class App {

  customers: Customer[] = [
    { id:1, name:'Deepak', address:'Delhi', email:'deep@gmail.com', phone:'111', dateOfBirth:'2000-01-01', gender:'Male' },
    { id:2, name:'Raj Deepak', address:'Mumbai', email:'raj@gmail.com', phone:'222', dateOfBirth:'1999-02-02', gender:'Male' },
    { id:3, name:'Anushka', address:'Pune', email:'anu@gmail.com', phone:'333', dateOfBirth:'2001-03-03', gender:'Female' },
    { id:4, name:'Deepdas', address:'Chennai', email:'deepdas@gmail.com', phone:'444', dateOfBirth:'1998-04-04', gender:'Male' },
    { id:5, name:'Ravi', address:'Hyderabad', email:'ravi@gmail.com', phone:'555', dateOfBirth:'2002-05-05', gender:'Male' },
    { id:6, name:'Sneha', address:'Bangalore', email:'sneha@gmail.com', phone:'666', dateOfBirth:'2003-06-06', gender:'Female' },
    { id:7, name:'Priya Sharma', address:'Kolkata', email:'priya@gmail.com', phone:'777', dateOfBirth:'1997-07-07', gender:'Female' },
    { id:8, name:'Amit Kumar', address:'Ahmedabad', email:'amit@gmail.com', phone:'888', dateOfBirth:'1996-08-08', gender:'Male' },
    { id:9, name:'Kavita Singh', address:'Jaipur', email:'kavita@gmail.com', phone:'999', dateOfBirth:'1995-09-09', gender:'Female' },
    { id:10, name:'Vikram Patel', address:'Surat', email:'vikram@gmail.com', phone:'1010', dateOfBirth:'1994-10-10', gender:'Male' },
    { id:11, name:'Meera Joshi', address:'Indore', email:'meera@gmail.com', phone:'1111', dateOfBirth:'1993-11-11', gender:'Female' }
  ];

  searchText: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;

  get filteredCustomers() {
    return this.customers.filter(c =>
      c.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  get paginatedCustomers() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredCustomers.slice(start, start + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  totalPages(): number {
    return Math.ceil(this.filteredCustomers.length / this.itemsPerPage);
  }
}