import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  imports: [FooterComponent],
  standalone: true,
  selector: 'feed-page',
  templateUrl: './feed.template.html',
  styleUrls: ['./feed.styles.css'],
})
export class FeedPage {}
