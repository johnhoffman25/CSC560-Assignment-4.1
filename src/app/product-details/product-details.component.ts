import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    //First get the product id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIDFromRoute = Number(routeParams.get('productID'));

    //Find the product that corresponds with the ID provided in the route
    this.product = products.find(
      (product) => product.id === productIDFromRoute
    );
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart.');
  }
}
