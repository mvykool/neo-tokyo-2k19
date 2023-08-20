import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  jsonData: any = [];
  titleAndThumbnailData: { title: string, thumbnail: string }[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/db.json').subscribe((response: any) => {
      this.jsonData = response.data.slice(0, 30);
      this.titleAndThumbnailData = this.jsonData.map((item: any) => ({
        title: item.title,
        thumbnail: item.thumbnail
      }));
      console.log(this.jsonData);
    });
  }
}