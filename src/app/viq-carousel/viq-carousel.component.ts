import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ViqCarouselService } from './viq-carousel.service';
import { Server } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-viq-carousel',
  templateUrl: './viq-carousel.component.html',
  styleUrls: ['./viq-carousel.component.css']
})
export class ViqCarouselComponent implements OnInit {

  public data: any[] = [];
  private leftOvers: any[] = [];
  private defaultItems = 6;
  selectedItemId = 0;

  @Output()
  public onSelect = new EventEmitter<any>();
  constructor(private service: ViqCarouselService) { }

  ngOnInit() {
    this.service.getCarouselData().subscribe(data => {
      this.data = data;
      this.activateItems();
    });
  }

  scrollLeft(event: MouseEvent) {
    if (this.leftOvers.length === 0) {
      return;
    }
    this.data.unshift(this.leftOvers.pop());
    this.activateItems();
  }

  scrollRight(event: MouseEvent) {
    if (this.data.length - this.defaultItems < 1) {
      return;
    }
    this.leftOvers.push(this.data.shift());
    this.activateItems();
  }

  selectCarouselItem(item: any) {
    this.selectedItemId = item.id;
    this.onSelect.emit(item);
  }

  activateItems(): void {
    let count = 0;
    this.data.forEach(item => {
      if (count < this.defaultItems) {
        item.isActive = true;
      }else {
        item.isActive = false;
      }
      count++;
    });
  }
}
