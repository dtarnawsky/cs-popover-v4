import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopContentComponent } from '../pop-content/pop-content.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private popoverController: PopoverController) {
    for (let i = 0; i < 10; i++) {
      this.grouped.push([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }
  }

  grouped = [];

  async showPop(ev: any, item: any) {
    const popover = await this.popoverController.create({
      component: PopContentComponent,
      event: ev
    });    
    await popover.present();
  }

}
