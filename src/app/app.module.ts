import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamService } from './services/team.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    FontAwesomeModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
