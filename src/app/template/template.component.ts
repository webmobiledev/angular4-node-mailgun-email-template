import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../providers/app.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  @Input() pos: string;
  currentPos: number;
  currentTemp: any;
  prevTemp: any;
  nextTemp: any;
  len: number;

  constructor(private service: AppService) {
    this.len = this.service.templates.length;
    this.service.pos.subscribe(pos => {
      this.currentPos = pos;
      this.currentTemp = this.service.templates[this.currentPos];
      if(this.currentPos != 0)
        this.prevTemp = this.service.templates[this.currentPos - 1];
      else if(this.currentPos == 0)
        this.prevTemp = null;

      if(this.currentPos != this.len - 1)
        this.nextTemp = this.service.templates[this.currentPos + 1];
      else if(this.currentPos == this.len - 1)
        this.nextTemp = null;
    });
  }

  ngOnInit() {

  }

}
