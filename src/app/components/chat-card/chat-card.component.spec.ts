import { fireEvent, render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { ChatCardComponent } from './chat-card.component';

const chatClickedSpy = jest.fn();

const mockChat = {
  id: 1,
  sender: 'Omar abouloumoum',
  profilePicture: Math.floor(Math.random() * 16 + 1),
  received: true,
  read: true,
  pinned: true,
  receivedDate: new Date(),
  lastMessage: 'safi inchallah',
};

const config = {
  componentProperties: {
    chat: mockChat,
    chatClicked: {
      emit: chatClickedSpy,
    } as any,
  },
};

describe('ChatCardComponent', () => {
  test('should render component', async () => {
    const chatCardComponent = await render(ChatCardComponent, config);
    expect(chatCardComponent.debugElement.componentInstance).toBeTruthy();
  });

  test('should emit chatClicked when chat card gets clicked', async () => {
    await render(ChatCardComponent, config);
    fireEvent.click(screen.getByTestId('chat-card-wrapper'));
    expect(chatClickedSpy).toHaveBeenCalled();
  });

  test('should render description', async () => {
    await render(ChatCardComponent, config);
    expect(screen.getByText(mockChat.sender)).toBeInTheDocument();
  });

  test('should render last message', async () => {
    await render(ChatCardComponent, config);
    expect(screen.getByText(mockChat.lastMessage)).toBeInTheDocument();
  });
});
