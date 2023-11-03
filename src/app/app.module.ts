import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivaPersonalizadaDirective } from './directiva-personalizada.directive';
import { TuberiaPersonalizadaPipe } from './tuberia-personalizada.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaPersonalizadaDirective,
    TuberiaPersonalizadaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
