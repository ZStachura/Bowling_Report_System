import { PageNotFoundModule } from './page-not-found.module';

describe('PageNotFoundModule', () => {
  const module: PageNotFoundModule = new PageNotFoundModule();

  it('should create', () => {
    expect(module).toBeTruthy();
  });
});
