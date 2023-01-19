import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj2';
  loadedFeature='recipie';
  onNavigate(feature:string)
  {
    this.loadedFeature=feature;
    console.log(feature)
  }
}
