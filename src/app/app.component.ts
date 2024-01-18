import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgIconComponent, NgIconsModule, provideIcons } from '@ng-icons/core';
import {
  ionSettingsOutline,
  ionArchiveOutline,
  ionStarOutline,
  ionChatbubbleEllipsesOutline,
  ionCallOutline,
  ionPersonCircleOutline
} from '@ng-icons/ionicons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgIconComponent],
  providers: [
    provideIcons({
      ionSettingsOutline,
      ionArchiveOutline,
      ionStarOutline,
      ionChatbubbleEllipsesOutline,
      ionCallOutline,
      ionPersonCircleOutline
    }),
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'whatsapp-clone';
}
