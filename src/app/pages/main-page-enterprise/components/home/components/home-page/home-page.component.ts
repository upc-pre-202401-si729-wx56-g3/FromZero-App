import {Component, OnInit} from '@angular/core';
import {AuthApiService} from "../../../../../auth/services/auth-api.service";
import {IProject} from "../../models/iproject";
import {ProjectsApiService} from "../../services/projects-api.service";
import {IEnterpriseProfileTemp} from "../../models/ienterprise-profile";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent  implements OnInit {
  perfilUsuario!: IEnterpriseProfileTemp;
  userProjects!: IProject[];
  constructor(private _authService: AuthApiService,private _projectsService:ProjectsApiService) {
  }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this._authService.getEnterpriseProfileById(+userId).subscribe(profile => {
        this.perfilUsuario = profile;
        localStorage.setItem('enterpriseId', profile.id.toString());
      });
      this._projectsService.getAllProjectsByEnterpriseUserId(+userId).subscribe(projects=>{
        this.userProjects=projects;
      })
    }
  }
}
