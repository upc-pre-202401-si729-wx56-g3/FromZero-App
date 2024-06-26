import {Component, Input} from '@angular/core';
import {IDeveloper} from "../../model/ideveloper";
import {IDeveloperProfileTemp} from "../../../../../main-page-developer/components/home/models/ideveloper-profile";
//import {Ishowproject} from "../../../../../../core/models/example.interface";

@Component({
  selector: 'app-developer-profile-card',
  templateUrl: './developer-profile-card.component.html',
  styleUrl: './developer-profile-card.component.css'
})
export class DeveloperProfileCardComponent {
  @Input() perfilDeveloper!: IDeveloperProfileTemp ;

  constructor() {}
}
