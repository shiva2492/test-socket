import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-ng6-app';
constructor(private http: HttpClient){
  }
ngOnInit(): void {
this.http.get('http://54.202.82.192/api').subscribe(data => {
      console.log(data);
    });
  }
}
