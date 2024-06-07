import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {HomePageComponent} from "./components/home/components/home-page/home-page.component";
import {MessageComponent} from "./components/message/components/message/message.component";
import {
  LookingfordevelopComponent
} from "../main-page-enterprise/components/looking-for-developer/components/lookingfordevelop/lookingfordevelop.component";
import {
  SearchProjectsComponent
} from "./components/search-projects/components/search-projects/search-projects.component";
import {
  ProjectProfilePageComponent
} from "./components/project-profile/components/project-profile-page/project-profile-page.component";

const routes: Routes = [

  {
    path:"main",
    component: MainPageComponent,
    children:[
      {
        path:"home",
        component:HomePageComponent,
      },
      {
        path: 'message',
        component: MessageComponent
      },
      {
        path: 'search-projects',
        component: SearchProjectsComponent
      },
      {
        path: 'enterprise-profile/:enterpriseId',
        component: ProjectProfilePageComponent
      }




    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageDeveloperRoutingModule { }
