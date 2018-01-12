import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public selectedItem: any = {};
  onSelectItem(event: any) {
    this.selectedItem = event;
  }
}
