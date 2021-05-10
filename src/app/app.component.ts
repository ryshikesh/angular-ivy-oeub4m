import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isChange: boolean;
  gender: string = null;
  uname: string;
  clr: string;

  maleStyle = {
    color: 'blue',
    'font-size': '50px'
  };

  femaleStyle = {
    color: 'pink',
    'font-size': '30px'
  };

  changeBg() {
    this.isChange = !this.isChange;
  }

  onChange(event) {
    //this.gender = event.target.value;
    this.clr = this.gender == 'F' ? 'pink' : this.gender == 'M' ? 'blue' : '';
    //this.clr = event.target.value == 'F' ? 'pink' : 'blue';
  }
}
