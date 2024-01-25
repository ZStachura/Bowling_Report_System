import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  const service: LocalStorageService = new LocalStorageService();

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
