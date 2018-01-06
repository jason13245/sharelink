import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router' 
import { SocketIoModule, SocketIoConfig }from 'ng-socket-io';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LinkComponent } from './link/link.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { AddLinkComponent } from './add-link/add-link.component';
import { FilterPipe } from './filter.pipe';
import { LinksService } from './links.service';
import { AppRoutingModule, routingComponents } from './app-routing.module';

//const config: SocketIoConfig = { url: 'http://localhost:8988', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    SearchComponent,
    ProfileComponent,
    AddLinkComponent,
    FilterPipe,
    routingComponents
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    //SocketIoModule.forRoot(config),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LinksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
