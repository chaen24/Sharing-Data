import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyserviceService } from './myservice.service';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
