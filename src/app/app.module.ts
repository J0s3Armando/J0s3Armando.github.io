import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './share/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ProjectComponent } from './pages/project/project.component';
import { AboutComponent } from './pages/about/about.component';
import { AppRouterModule } from './modules/appRouting.module';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    PortafolioComponent,
    ProjectComponent,
    AboutComponent,
    CardComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
