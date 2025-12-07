import { App } from './app';

describe('App', () => {
  let component: App;

  beforeEach(() => {
    component = new App();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should have title property set to "web"', () => {
    expect(component['title']).toBe('web');
  });
});
