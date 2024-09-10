import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  projects = [
    { title: 'Project 1', description: 'Description of Project 1', link: 'http://example.com/project1' },
    { title: 'Project 2', description: 'Description of Project 2', link: 'http://example.com/project2' },
  
  ];
}
