import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { URL_AUTH_GET_TOKEN } from 'src/app/util/constant';
@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQA8tSQzME_kx-Vxwajhvbnbnll2i3_EzeY5Vp9RNePGzqQ45kYSc7Fu9iFDEBBc5Xtr44eR59Bc0NDHaow',
    });
    return this.http.get(url, { headers });
  }

  async authGetToken() {
    this.http.get(URL_AUTH_GET_TOKEN).subscribe((data: any) => {
      // return data.access_token;

      const token = data.access_token;
      const headers = new HttpHeaders({
        Authorization: 'Bearer ' + token,
      });
      console.log('bearer ' + token);
      this.http
        .get('https://api.spotify.com/v1/browse/new-releases?limit=20', {
          headers,
        })
        .subscribe((data) => {
          console.log(data);
        });
    });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data: any) => data.albums.items)
    );
  }

  searchArtist(artist: string) {
    return this.getQuery(`search?q=${artist}&type=artist&limit=15`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  getArtist(artistId: string) {
    return this.getQuery(`artists/${artistId}`);
  }

  getTopTracks(artistId: string) {
    return this.getQuery(`artists/${artistId}/top-tracks?market=us`).pipe(
      map((data: any) => data.tracks)
    );
  }
}
