import { Component} from '@angular/core';

@Component({
  selector: 'app-my-earnings',
  templateUrl: './my-earnings.component.html',
  styleUrls: ['./my-earnings.component.css'],
 
})
export class MyEarningsComponent {
  showContent = false;
  showDistribution = false;
  toggleContent() {
    this.showContent = !this.showContent;
  }
  

  toggleDistribution() {
    this.showDistribution = !this.showDistribution;
  }
 
}
