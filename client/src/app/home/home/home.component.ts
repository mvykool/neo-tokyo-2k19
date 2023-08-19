import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
      jsonData: any = [];

      constructor(private http: HttpClient) { }

      ngOnInit(){
        this.http.get('assets/db.json').subscribe((response: any) => {
          this.jsonData = response.data.slice(0,50);
          console.log(this.jsonData);
        });
      }
}
