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

  name = 'Sarim'


}
