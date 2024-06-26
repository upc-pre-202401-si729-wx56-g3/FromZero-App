import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./components/home/components/home-page/home-page.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {
  FormCreateProjectComponent
} from "./components/projects/components/form-create-project/form-create-project.component";
import {
  LookingfordevelopComponent
} from "./components/looking-for-developer/components/lookingfordevelop/lookingfordevelop.component";
import {DeliverablesComponent} from "./components/deliverables/components/deliverables/deliverables.component";
import {
  DeveloperProfilePageComponent
} from "./components/developer-profile/components/developer-profile-page/developer-profile-page.component";
//import {MessageComponent} from "./components/message/components/message/message.component";
import {DeliverableComponent} from "./components/review-deliverable/components/deliverable/deliverable.component";

const routes: Routes = [
  {
    path:'main',
    component: MainPageComponent,
    children:[
      {
        path:'home',
        component:HomePageComponent,
      },
      {
        path: 'create-project',
        component: FormCreateProjectComponent,
      },
      {
        path: 'search-developers',
        component: LookingfordevelopComponent
      },
      {
        path:':projectId/deliverables',
        component:DeliverablesComponent
      },
      {
        path:':projectId/deliverables/:deliverableId',
        component:DeliverableComponent
      },
      {
        path: 'developer-profile/:developerId',
        component: DeveloperProfilePageComponent
      },
      /*{
        path: 'message',
        component: MessageComponent
      },*/
      {
        path:'shared',
        loadChildren:()=>import("../../shared/shared.module").then(m=>m.SharedModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppContentRoutingModule { }
