import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  panelOpenState = false
  public orderForumGroup!: FormGroup;
  name = new FormControl('');

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.orderForumGroup = this.formBuilder.group({
      quantity: ['', Validators.required]
    });

    this.orderForumGroup.get('quantity')?.setValue(1);
  }

  onAddToBasket(id: number): void {
    alert('add to basket');
  }

  increaseQuantity(): void {
    const currentQuantity = this.orderForumGroup.get('quantity')?.value;
    this.orderForumGroup.get('quantity')?.setValue( parseInt(currentQuantity) + 1);
  }

  decreaseQuantity(): void {
    const currentQuantity = this.orderForumGroup.get('quantity')?.value;
    if (currentQuantity > 0) {
      this.orderForumGroup.get('quantity')?.setValue(currentQuantity - 1);
    }
  }
}
