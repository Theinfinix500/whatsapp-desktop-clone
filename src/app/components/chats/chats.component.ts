import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  ionCheckmarkDoneOutline,
  ionCreateOutline,
  ionFilterOutline,
  ionPushOutline,
  ionSearchOutline,
} from '@ng-icons/ionicons';
import { Observable } from 'rxjs';
import { ChatCardComponent } from './components/chat-card/chat-card.component';
import { ChatMessage } from './models/chat.model';
import { ChatService } from './services/chats.service';

@Component({
  selector: 'wtspdk-chats',
  standalone: true,
  imports: [AsyncPipe, NgIconComponent, ChatCardComponent],
  providers: [
    provideIcons({
      ionSearchOutline,
      ionFilterOutline,
      ionCreateOutline,
      ionCheckmarkDoneOutline,
      ionPushOutline,
    }),
  ],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.scss',
})
export class ChatsComponent {
  chatService: ChatService = inject(ChatService);
  chatMessages: Observable<ChatMessage[]> = this.chatService.loadChatMessages();
}
