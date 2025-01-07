import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGraduationCap, faCode, faLaptopCode, faCubes, faDatabase,
  faChartLine, faTools, faUniversity
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  faGraduationCap = faGraduationCap;
  faCode = faCode;
  faLaptopCode = faLaptopCode;
  faCubes = faCubes;
  faDatabase = faDatabase;
  faChartLine = faChartLine;
  faTools = faTools;
  faUniversity = faUniversity;
}
