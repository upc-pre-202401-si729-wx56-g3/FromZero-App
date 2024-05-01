import {Component, OnInit} from '@angular/core';
import {AuthApiService} from "../../../../../auth/services/auth-api.service";
import {IEnterpriseProfile, IProject} from "../../models/enterprise-profile.model";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent  implements OnInit {
  perfilUsuario!: IEnterpriseProfile;
  userProjects!: IProject[];
  constructor(private _authService: AuthApiService) {
  }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this._authService.getProfileById(+userId).subscribe(profile => {
        this.perfilUsuario = profile;
        this.userProjects = profile.projects;
      });
    }
  }
}
