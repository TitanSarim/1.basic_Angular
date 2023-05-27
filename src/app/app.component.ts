import { Component } from "@angular/core";


// * use template or templateUrl at one time

@Component({
selector: 'app-root',
// template: `
//   <p>Hello</p>
// `,
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
styles: ['']
})
export class AppComponent{

  name = 'Sarim xahid'
  imgURL = "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"

  images = [
    "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
  ]

  currentDate = new Date()
  cost = 2000
  temperature= 25.3

  pizza= {
    toppings: ['nawabi', 'tikka'],
    size: 'Large'
  }

  blueClass = false
  fontSize = 16

  getName(){
    return this.name
  }

  changeImage(e: KeyboardEvent){
    this.imgURL = (e.target as HTMLInputElement).value
  }

  logImg(event: string){
    console.log(event);

  }

}
