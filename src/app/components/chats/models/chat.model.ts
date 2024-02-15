export interface ChatList {
  chats: ChatMessage[];
}

export interface ChatMessage {
  id?: number;
  sender?: string;
  profilePicture?: number;
  received?: boolean;
  read?: boolean;
  pinned?: boolean;
  receivedDate?: string;
  lastMessage?: string;
}
