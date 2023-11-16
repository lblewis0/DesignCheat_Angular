import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
            RouterOutlet,
            RouterLink,
            RouterLinkActive,
            SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'designcheat';
}
