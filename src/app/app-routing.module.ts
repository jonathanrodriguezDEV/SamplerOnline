import { VibesPageComponent } from './vibes-page/vibes-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PlaylistPageComponent } from './playlist-page/playlist-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'vibes', component: VibesPageComponent},
  {path: 'playlists', component: PlaylistPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent, AboutPageComponent, VibesPageComponent, PlaylistPageComponent]