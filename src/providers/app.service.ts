import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Http, RequestOptions, Headers } from '@angular/http';
import "rxjs/Rx";

@Injectable()
export class AppService {
  templates: any[];
  currentPos: number = 1;
  public pos: any = new BehaviorSubject(this.currentPos);

  constructor(public http: Http) { 
    this.templates = [
      {title: "Template 1", content: "This is email template."},
      {title: "Template 2", content: "This is email template."},
      {title: "Template 3", content: "This is email template."},
      {title: "Template 4", content: "This is email template."},
      {title: "Template 5", content: "This is email template."},
    ];
  }

  changePos(btn) {
    if(btn == "prev" && this.currentPos > 0) {
      this.currentPos -= 1;
      this.pos.next(this.currentPos);
    } else if(btn == "next" && this.currentPos < this.templates.length - 1) {
      this.currentPos += 1;
      this.pos.next(this.currentPos);
    }
  }

  send(recipient: string, subject: string, name: string) {
    let body = this.templates[this.currentPos].content + "<br>" + name;
    return this.http.post('/api/post', {recipient: recipient, subject: subject, body: body})
      .map(res => res.json());
  }

}
