import { Component, OnInit } from '@angular/core';
import { MyHttpService } from './myHttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'hardy dylut2000 tweeter';
  jobs: any;

  constructor(private service: MyHttpService) { }

  ngOnInit(): void {
    this.getJobs();
  }


  getJobs(): void {
    this.service.getServerData()
      .subscribe(result =>
      {
        this.jobs=result;
        console.log("jobs ", result);
      });
  }


}
