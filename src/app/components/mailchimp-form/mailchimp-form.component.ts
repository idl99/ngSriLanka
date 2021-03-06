import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface IResponseData {

  status: boolean;
  message: string;


}



@Component({
  selector: 'app-mailchimp-form',
  templateUrl: './mailchimp-form.component.html',
  styleUrls: ['./mailchimp-form.component.css']
})
export class MailchimpFormComponent implements OnInit {

  first_name;
  last_name;
  email;

  isBtnDisabled = false;
  isHideForm = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }



  async handleNotify() {

    this.isBtnDisabled = true;
    try {
      const server_url = 'https://ngsrilankaconf-backend.herokuapp.com/preregister';
      // tslint:disable-next-line:max-line-length
      const response = await this.http.post<IResponseData>(server_url, { first_name: this.first_name, last_name: this.last_name, email: this.email }).toPromise();

      if (response.status) {
        this.isHideForm = true;
      }

      alert('Awesome! Thanks for subscribing, we\'ll keep you in the loop :D');
      this.isBtnDisabled = false;

    } catch (error) {
      alert('Unable to keep you in the loop. Try again :D');
      this.isBtnDisabled = false;
    }



  }

}
