import { Page } from './page';
import { Component } from '@angular/core';

@Component({
  selector: 'app-site-navigation',
  templateUrl: './site-navigation.component.html',
  styleUrls: ['./site-navigation.component.css']
})
export class SiteNavigationComponent  {
  aboutPage = new Page("ABOUT", "about");
  playlistPage = new Page("PLAYLIST", "playlist");

}
