import { MainModule } from './main.module';

describe('MainModule', () => {
  const module: MainModule = new MainModule();

  it('should create', () => {
    expect(module).toBeTruthy();
  });
});
