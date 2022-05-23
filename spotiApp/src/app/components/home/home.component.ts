import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) {
    this.spotifyService.auth();
  }

  ngOnInit(): void {}
}