import { Component } from '@angular/core';
import { homeAnimations } from './home.animation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [homeAnimations],
})
export class HomePage {
  public searchResults = [1, 2, 3, 4, 5];
  public mapLayerActive = false;

  public toggleMapMode() {
    this.mapLayerActive = !this.mapLayerActive;
  }
}
