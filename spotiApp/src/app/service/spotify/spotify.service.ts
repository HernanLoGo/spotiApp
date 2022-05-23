import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  spotify_client_id,
  spotify_client_secret,
} from 'src/app/util/constant';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  paises: any[] = [];

  constructor(private http: HttpClient) {}

  auth() {
    const basicAuth = spotify_client_id + ':' + spotify_client_secret;
    console.log(window.btoa(basicAuth));

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic ' + window.btoa(basicAuth));
    //headers.append('grant_type', 'client_credentials');
    const authOptions = {
      headers,
    };

    // const body = {
    //   grant_type: 'client_credentials',
    // };

    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    body.set('redirect_uri', 'http://localhost:4200/#/home');

    this.http
      .post('https://accounts.spotify.com/api/token', JSON.stringify(body),authOptions)
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
