import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionCheckmarkDoneOutline, ionPushOutline } from '@ng-icons/ionicons';

@Component({
  selector: 'app-chat-card',
  standalone: true,
  imports: [NgIconComponent, DatePipe],
  providers: [
    provideIcons({
      ionCheckmarkDoneOutline,
      ionPushOutline,
    }),
  ],
  templateUrl: './chat-card.component.html',
  styleUrl: './chat-card.component.scss',
})
export class ChatCardComponent {
  @Input() chat:any;
}
