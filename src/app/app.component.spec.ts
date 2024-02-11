import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  test('should create the app', async () => {
    const appComponent = await render(AppComponent);
    expect(appComponent.debugElement.componentInstance).toBeDefined();
  });
});
