//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MapComponent } from './pages/map/map.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';
import { CommercesComponent } from './pages/commerces/commerces.component';
import { MapGeoJSONComponent } from './components/map-geo-json/map-geo-json.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MapComponent,
    GraphicsComponent,
    CommercesComponent,
    MapGeoJSONComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
