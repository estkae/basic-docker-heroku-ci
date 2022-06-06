import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  //Declare the ninjaTurtles variable
  ninjaTurtles: any;
  //Copy here your server URL
  api_url = "";
  
  constructor(private http: HttpClient) {
 
    if(process.env.NG_APP_GITPOD_WORKSPACE_URL != undefined ) {
      let tmp_server_url = process.env.NG_APP_GITPOD_WORKSPACE_URL.replace('https://','');;
      let port = 5000
      this.api_url = `https://${port}-${tmp_server_url}`;
    }
  
    if(process.env.NG_APP_HEROKU_API_URL != undefined) this.api_url = process.env.NG_APP_HEROKU_API_URL;

    console.log(this.api_url);
    //Request the ninjaTurtles list
    //Update the variable ninjaTurtles with new data
    this.http.get(`${this.api_url}/api/ninjaTurtles`).
      subscribe(data => this.ninjaTurtles = data);
  }
}

/*
let server_url = process.env.NG_APP_GITPOD_WORKSPACE_URL
this.ninjaTurtles = process.env;*/