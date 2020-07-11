//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MapComponent } from './pages/map/map.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';
import { CommercesComponent } from './pages/commerces/commerces.component';
import { MapGeoJSONComponent } from './components/map-geo-json/map-geo-json.component';
import { GraphPieComponent } from './components/graph-pie/graph-pie.component';
import { GraphBarComponent } from './components/graph-bar/graph-bar.component';
import { GraphPolarAreaComponent } from './components/graph-polar-area/graph-polar-area.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MapComponent,
    GraphicsComponent,
    CommercesComponent,
    MapGeoJSONComponent,
    GraphPieComponent,
    GraphBarComponent,
    GraphPolarAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
