import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainPage } from './pages/main/main.page';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { SignUpPage } from './pages/sign-up/sign-up.page';
import { ProfilePage } from './pages/profile/profile.page';
import { FeedPage } from './pages/feed/feed.page';
import { MessagesPage } from './pages/messages/messages.page';
import { Pages } from './shared/constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    RouterOutlet,
    MainPage,
    SignUpPage,
    SignInPage,
    ProfilePage,
    FeedPage,
    MessagesPage
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  public pages = Pages;

  public title = 'readme-blog';

  public activePage: keyof typeof Pages = this.pages.SignIn;
}
