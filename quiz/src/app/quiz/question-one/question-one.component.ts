import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.scss']
})
export class QuestionOneComponent implements OnInit {

  form: FormGroup = new FormGroup({
    NUMBER: new FormControl(),
    SELECT: new FormControl('isPrime')
  });

  result = null;

  constructor() { }

  ngOnInit(): void {
    this.form.controls.SELECT.valueChanges.subscribe((txt: string) => {
      const num = this.form.controls.NUMBER.value;
      this.result = txt === 'isPrime' ? this.isPrime(num) : this.isFibonacci(num);
    });
  }

  onBlurNumber() {
    let value = this.form.controls.NUMBER.value;
    if (value !== null) {
      value = value < 0 ? 1 : Number(value.toFixed(0));
    }
    this.form.controls.NUMBER.setValue(value);
    const select = this.form.controls.SELECT.value;
    this.result = select === 'isPrime' ? this.isPrime(value) : this.isFibonacci(value);
  }

  private isPrime(n: number) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) { return false; }
    if (n % 2 === 0) { return (n === 2); }
    const m = Math.sqrt(n);
    for (let i = 3; i <= m; i += 2) {
      if (n % i === 0) { return false; }
    }
    return true;
  }

  private isFibonacci(n: number) {
    if (n === 0 || n === 1) { return true; }
    let prev = 1;
    let count = 2;
    let temp = 0;
    while (count <= n) {
      if (prev + count === n) { return true; }
      temp = prev;
      prev = count;
      count += temp;
    }
    return false;
  }

}

