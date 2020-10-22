import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-calc1',
  templateUrl: './calc1.component.html',
  styleUrls: ['./calc1.component.css']
})
export class Calc1Component implements OnInit {

  formCalc: FormGroup;
  numbers: number[] = [];

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {

    this.formCalc = this.fb.group({
      'n': [null, [Validators.min(1), Validators.max(1000)]],
      'k': [null, [Validators.min(-1000), Validators.max(1000)]]
    });

  }

  onAddCalc(form: any) { 
    if(this.formCalc.status == "INVALID")
      return;
    if(!isNaN(parseInt(form.n)) && this.numbers.indexOf(parseInt(form.n)) == -1) {
      this.numbers.push(parseInt(form.n));
    }
    if(!isNaN(parseInt(form.k)) &&  this.numbers.indexOf(parseInt(form.k)) == -1){
      this.numbers.push(parseInt(form.k));
    }
  
    this.numbers.sort((n,k) => {
      if (n > k) {
          return 1;
      }
  
      if (n < k) {
          return -1;
      }
  
      return 0;
  });
  }

  numberOnly(event, mode): boolean {console.log(event.keyCode);
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && mode =='n' 
      || 
    ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode != 45)) {
      return false;
    }
    return true;

  }
}
