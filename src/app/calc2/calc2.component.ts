import { isDefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface OperatorType {
  value: string,
  id: number
}

@Component({
  selector: 'app-calc2',
  templateUrl: './calc2.component.html',
  styleUrls: ['./calc2.component.css']
})
export class Calc2Component implements OnInit {

  operators: OperatorType[] = [
    {id: 0, value: '+'},
    {id: 2,value: '*'},
    {id: 3,value: '/'},
    {id: 4,value: '%'}
  ];

  numbers: string[] = [];

  formCalc: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.formCalc = this.fb.group({
      'n': [null, Validators.required],
      'op': [null, Validators.required],
      'k': [null, Validators.required]
    });

  }

  onAddCalc(form: any) { 
    let n = parseInt( form.n, 10 );
    let k = parseInt( form.k, 10 );
    let result: number;
    console.log(form);
    
    switch (form.op) {
      case 0 : result = (n + k);
      break;
      case 1 : result = (n * k);
      break;
      case 2 : result = (n / k);
      break;
      case 3 : result = (n % k);
      break;
    }
    if(isDefined(result))
      this.numbers.push(result.toString(2));

  }

  numberOnly(event, op): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 48 ||  charCode == 49){
      return true;
    }
    return false;

  }
}
