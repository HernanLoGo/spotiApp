import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/service/spotify/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artist:any={};
  loading:boolean=false;
  topTracks:any=[];

  constructor(private activatedRoute:ActivatedRoute,
              private spotifyService:SpotifyService) {
    this.loading=true;
    this.activatedRoute.params.subscribe(params=>{
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
   }

  ngOnInit(): void {
  }

  getArtist(artistId:string){
    this.spotifyService.getArtist(artistId).subscribe(data=>{
      this.artist=data;
      this.loading=false;
    });
  }

  getTopTracks(artistId:string){
    this.spotifyService.getTopTracks(artistId).subscribe(data=>{
      console.log(data)
      this.topTracks=data;
    });
  }

}
