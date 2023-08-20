import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
      jsonData: any = [];
  titles: any;

      constructor(private http: HttpClient) { }

      ngOnInit() {
        this.http.get<any>('assets/db.json').subscribe((response: any) => {
          this.jsonData = response.data.slice(0, 30);
          this.titles = this.jsonData.map((item: { title: any; }) => item.title); 
          console.log(this.jsonData);
        });
      }
}
