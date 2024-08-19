import { Component, Input } from '@angular/core';
import { CustomBadgeComponent } from '../../../custom-badge/custom-badge.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-project-content',
  standalone: true,
  imports: [CustomBadgeComponent, NgFor],
  templateUrl: './project-content.component.html',
  styleUrl: './project-content.component.css'
})
export class ProjectContentComponent {

  @Input() projectTitle: string = 'Project 1';
  @Input() projectDescription: string = 'Description 1';
  @Input() projectImageUrl: string = 'https://placehold.co/300x300/orange/white';
  @Input() projectUrl: string = 'https://www.google.com';
  @Input() projectTags: string[] = ['Tag 1', 'Tag 2', 'Tag 3'];

}
