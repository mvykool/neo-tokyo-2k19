import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  defaultImage: string = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
  jsonData: any = [];
  titleAndThumbnailData: { title: string, thumbnail: string }[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/db.json').subscribe((response: any) => {
      this.jsonData = response.data.filter((item: any) => {
        const tags = item.tags || []; 
        return tags.includes('action') || tags.includes('adventure');
      }).slice(0, 4);

      this.titleAndThumbnailData = this.jsonData.map((item: any) => ({
        title: item.title,
        thumbnail: item.picture
      }));
    });
  }

  handleImageError(item: any) {
    item.thumbnail = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png";
  }
}