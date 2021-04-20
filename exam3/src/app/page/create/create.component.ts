import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(
    private customerService: CustomerService,
    private router: Router,
  ) { }

  onCreate(customer: Customer): void {
    // tslint:disable-next-line: deprecation
    this.customerService.create(customer).subscribe(
      () => this.router.navigate([''])
    );
  }

  ngOnInit(): void {
  }

}
