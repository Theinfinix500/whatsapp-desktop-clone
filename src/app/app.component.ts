import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  ionArchiveOutline,
  ionCallOutline,
  ionChatbubbleEllipsesOutline,
  ionPersonCircleOutline,
  ionSettingsOutline,
  ionStarOutline,
} from '@ng-icons/ionicons';
import { ChatsComponent } from './components/chats/chats.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgIconComponent, ChatsComponent],
  providers: [
    provideIcons({
      ionSettingsOutline,
      ionArchiveOutline,
      ionStarOutline,
      ionChatbubbleEllipsesOutline,
      ionCallOutline,
      ionPersonCircleOutline,
    }),
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'whatsapp-clone';

  constructor() {
    const names = ['omar', 'abdelali', 'othmane'];

    console.log(this.searchByName(names, 'a'));
  }

  searchByName(names: string[], searchTerm: string) {
    const searchedItems = names.filter((name) => name.startsWith(searchTerm));
    if(searchedItems.length) {
      return searchedItems
    }
    return 'Item not found!'
  }
}
