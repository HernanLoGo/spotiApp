import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/service/spotify/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists:any[]=[];
  loading:boolean=false;

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit(): void {
  }

  searchArtist(artist:string){
    this.loading = true;
    this.spotifyService.searchArtist(artist)
    .subscribe((data:any)=>{
      console.log(data)
      this.artists=data;
      this.loading = false;
    });
  }

}
