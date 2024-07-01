import { Component } from '@angular/core';
import { MessageContactComponent } from '../../components/message-contact/message-contact.component';
import { MessageItemComponent } from '../../components/message-item/message-item.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  imports: [
    MessageItemComponent,
    MessageContactComponent,
    FooterComponent
  ],
  standalone: true,
  selector: 'messages-page',
  templateUrl: './messages.template.html',
  styleUrls: ['./messages.styles.css'],
})
export class MessagesPage {}
