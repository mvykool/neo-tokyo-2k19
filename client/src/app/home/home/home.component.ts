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
      this.jsonData = response.data.filter((item: any) => {
        const tags = item.tags || []; 
        return tags.includes('shonen') || tags.includes('seinen');
      }).slice(0, 50);

      this.titleAndThumbnailData = this.jsonData.map((item: any) => ({
        title: item.title,
        thumbnail: item.picture
      }));
      
      console.log(this.jsonData); 
    });
  }
}