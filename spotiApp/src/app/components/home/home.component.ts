import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  loading:Boolean = false;

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.spotifyService.getNewReleases().subscribe((data: any) => {
      console.log(data);
      this.newReleases = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {}
}
