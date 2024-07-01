import { Component } from '@angular/core';
import { MainNavbarComponent } from '../main-navbar/main-navbar.component';
import { ContentNavbarComponent } from '../content-navbar/content-navbar.component';
import { HeaderSearchComponent } from '../header-search/header-search.component';

@Component({
  imports: [
    MainNavbarComponent,
    ContentNavbarComponent,
    HeaderSearchComponent
  ],
  templateUrl: './header.template.html',
  standalone: true,
  styleUrls: ['./header.styles.css'],
  selector: 'app-header',
})
export class HeaderComponent {
  public isMainPage = false;

  // @ViewChild(MainNavbarComponent) public mainNavbar!: MainNavbarComponent;

  // constructor() {}

  // public ngAfterViewInit(): void {

  // }

}
