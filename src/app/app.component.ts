import { Component } from '@angular/core';
import { AppService } from '../providers/app.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{provide: CarouselConfig, useValue: {interval: false, noWrap: false, noPause: false}}]
})
export class AppComponent {
  complexForm: FormGroup;
  templates: any[];
  constructor(private service: AppService, private fb: FormBuilder) {
    this.complexForm = fb.group({
      'name': [null, Validators.compose([Validators.required])],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'city': [null, Validators.compose([Validators.required])]
    });

    this.templates = this.service.templates;
  }

  changeSlide(event) {
    this.service.changePos(event);
  }

  submitForm(value: any):void {
    this.service.send(value.email, "Hello", value.name, value.city)
    .subscribe(
      res => {
        console.log(res);
      }
    );
    setTimeout(function() {
      alert("Sent Email.");
    }, 1000);
  }  
}
