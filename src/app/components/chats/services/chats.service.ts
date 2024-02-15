import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ChatList, ChatMessage } from '../models/chat.model';

@Injectable({ providedIn: 'root' })
export class ChatService {
  constructor(private http: HttpClient) {}

  loadChatMessages(): Observable<ChatMessage[]> {
    return this.http.get<ChatList>('assets/data/mock-chats.json').pipe(
      map(({ chats }) =>
        chats.map((chat, index) => ({
          ...chat,
          id: index + 1,
          profilePicture: Math.floor(Math.random() * 16 + 1),
        }))
      )
    );
  }
}
