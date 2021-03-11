import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams:any[];
  teamName: any;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebook = faFacebook;

  constructor(private teamService:TeamService){}
 
  ngOnInit(): void {
    this.teamService.getTeams().subscribe((data)=>{
      this.teams=data.teams
      console.log(this.teams)
     
    })
  }
  Search() {
    if(this.teamName=="") {
      this.ngOnInit();
    }
    else{
      this.teams = this.teams.filter(res =>{
        console.log(this.teams)
        return res.strTeam.toLocaleLowerCase().match(this.teamName.toLocaleLowerCase());
      })
    }
  }


}
