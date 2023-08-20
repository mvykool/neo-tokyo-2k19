import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
      jsonData: any = [];
      titles: string = "";
      thumbnail: string = "";

      constructor(private http: HttpClient) { }

      ngOnInit() {
        this.http.get('assets/db.json').subscribe((response: any) => {
          this.jsonData = response.data.slice(0, 30);
          this.titles = this.jsonData.map((item: { title: string; }) => item.title); 
          this.thumbnail = this.jsonData.map((item: { thumbnail: string; }) => item.thumbnail); 
          console.log(this.jsonData);
        });
      }
}
