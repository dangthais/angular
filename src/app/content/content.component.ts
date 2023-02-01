import { Component } from '@angular/core';
import { Iventor, IProduct } from 'src/interface/Inventor';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  listProduct:IProduct[]=[];
  constructor() { }

  ngOnInit(): void {
    this.listProduct=this.products;
  }

  filterValue:string='';
  filter(){
  this.products=this.listProduct.filter(p=>p.productName.includes(this.filterValue))
  }

  title: string = '';
  onRatingClicked(event: any): void {
    this.title = event;
}
  // title = 'FPT POLYTECHNIC';
  // student={
  //   name: "Lê Văn Teo",
  //   gioitinh: "Nam",
  //   ngaysinh: "04/06/1998",
  //   anh: "https://picsum.photos/200/300",
  //   diemTB: "8.9"
  // };
  // inventors:Iventor[] = [
  //   {id: 1, first: "Nam", last: "Nguyen", year: 1897, passed: 1999},
  //   {id: 2, first: "Hai", last: "Bui", year: 1897, passed: 1999},
  //   {id: 3, first: "Minh", last: "Nguyen", year: 1897, passed: 1999},
  //   {id: 4, first: "Thai", last: "Nguyen", year: 1897, passed: 1999},
  //   {id: 5, first: "Cuong", last: "Nguyen", year: 1897, passed: 1999},
  //   {id: 6, first: "Thien", last: "Nguyen", year: 1897, passed: 1999},
  // ]
  products: IProduct[] = [
      {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
      },
      {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        },
        {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
        },
        {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
        }

  ]
}
