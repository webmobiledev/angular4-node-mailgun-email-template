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
      {title: "Template 1", content: "Subject: Hello There\r\n\r\nThanks for visiting this site.\r\nFrom here you can email this text to us simply by filling in your name and email address below.\r\n\r\nWe will get back to you soon.\r\nThanks again for visiting.\r\n\r\nSincerely,\r\n\r\n"},
      {title: "Template 2", content: "Subject: Hello There\r\n\r\nThanks for visiting this site.\r\nFrom here you can email this text to us simply by filling in your name and email address below.\r\n\r\nWe will get back to you soon.\r\nThanks again for visiting.\r\n\r\nSincerely,\r\n\r\n"},
      {title: "Template 3", content: "Subject: Hello There\r\n\r\nThanks for visiting this site.\r\nFrom here you can email this text to us simply by filling in your name and email address below.\r\n\r\nWe will get back to you soon.\r\nThanks again for visiting.\r\n\r\nSincerely,\r\n\r\n"},
      {title: "Template 4", content: "Subject: Hello There\r\n\r\nThanks for visiting this site.\r\nFrom here you can email this text to us simply by filling in your name and email address below.\r\n\r\nWe will get back to you soon.\r\nThanks again for visiting.\r\n\r\nSincerely,\r\n\r\n"},
      {title: "Template 5", content: "Subject: Hello There\r\n\r\nThanks for visiting this site.\r\nFrom here you can email this text to us simply by filling in your name and email address below.\r\n\r\nWe will get back to you soon.\r\nThanks again for visiting.\r\n\r\nSincerely,\r\n\r\n"},
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

  send(sender: string, subject: string, name: string) {
    let body = this.templates[this.currentPos].content + name;
    return this.http.post('/api/post', {sender: sender, subject: subject, body: body})
      .map(res => res.json());
  }

}
