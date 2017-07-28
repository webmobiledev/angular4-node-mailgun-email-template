import { Component } from '@angular/core';
import { AppService } from '../providers/app.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  complexForm: FormGroup;
  constructor(private service: AppService, private fb: FormBuilder) {
    this.complexForm = fb.group({
      'name': [null, Validators.compose([Validators.required])],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
    });
  }
  
  changePos(btn) {
    this.service.changePos(btn);
  }

  submitForm(value: any):void {
    this.service.send(value.email, "Hello", value.name)
    .subscribe(
      res => {
        console.log(res);
      }
    );
  }  
}
