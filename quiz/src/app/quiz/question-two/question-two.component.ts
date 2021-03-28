import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-question-two',
  templateUrl: './question-two.component.html',
  styleUrls: ['./question-two.component.scss']
})
export class QuestionTwoComponent implements OnInit {

  private dataList = [];
  displayDataList = [];
  form: FormGroup = new FormGroup({
    SEARCH: new FormControl()
  });

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.query().subscribe((res: any) => {
      this.dataList = res;
      this.displayDataList = this.dataList;
    });

    this.form.controls.SEARCH.valueChanges.subscribe((txt: string) => {
      this.displayDataList = this.dataList.filter((ds: string) => ds.toLowerCase().indexOf(txt ? txt.toLowerCase() : '') !== -1);
    });
  }

  private query(): Observable<any> {
    return this.http.get('https://api.publicapis.org/categories');
  }

}
