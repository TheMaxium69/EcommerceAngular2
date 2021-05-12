import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Product} from '../model/Product';
import {Supplier} from '../model/Supplier';
import {ProductHttpService} from '../product-http.service';
import {Router} from '@angular/router';
import {SupplierHttpService} from '../supplier-http.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  @Input() supplier: Supplier;
  @Output() evt = new EventEmitter<Supplier>();

  @HostListener('click')
  productClick(): void {
    this.evt.emit(this.supplier);
  }

  constructor(  private pService: SupplierHttpService,
                private router: Router) { }

  ngOnInit(): void {
  }

  deleteSupp(): void{

    const result = window.confirm ('voulez vous vraiment supprimer ' + this.supplier.companyName + ' ?');
    if(result === true){

      this.pService.delete(this.supplier.id).subscribe(v => this.router.navigate(['/']));
    }
  }
}
