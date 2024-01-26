import { ShortenedFile } from '../../interfaces/shortenedFile';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  const service: LocalStorageService = new LocalStorageService();

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should update files in local storage', () => {
    const mockFiles: ShortenedFile[] = [
      { name: 'test1.txt', text: 'Hello' },
      { name: 'test2.txt', text: 'World' },
    ];
    service.updateFilesLocalStorage(mockFiles);
    const storedFiles = localStorage.getItem('files');
    expect(storedFiles).toEqual(JSON.stringify(mockFiles));
  });

  it('should get files from local storage', () => {
    const mockFiles: ShortenedFile[] = [
      { name: 'test1.txt', text: 'Hello' },
      { name: 'test2.txt', text: 'World' },
    ];
    localStorage.setItem('files', JSON.stringify(mockFiles));
    const retrievedFiles = service.getFilesLocalStorage();
    expect(retrievedFiles).toEqual(mockFiles);
  });

  it('should return empty array if no files in local storage', () => {
    localStorage.removeItem('files');
    const retrievedFiles = service.getFilesLocalStorage();
    expect(retrievedFiles).toEqual([]);
  });

  it('should delete files from local storage', () => {
    const mockFiles: ShortenedFile[] = [
      { name: 'test1.txt', text: 'Hello' },
      { name: 'test2.txt', text: 'World' },
    ];
    localStorage.setItem('files', JSON.stringify(mockFiles));
    service.deleteFilesLocalStorage();
    const storedFiles = localStorage.getItem('files');
    expect(storedFiles).toBeNull();
  });

  it('should set current file in local storage', () => {
    const mockFile: ShortenedFile = { name: 'test1.txt', text: 'Hello' };
    service.setCurrentFileLocalStorage(mockFile);
    const storedFile = localStorage.getItem('currentFile');
    expect(storedFile).toEqual(JSON.stringify(mockFile));
  });

  it('should get current file from local storage', () => {
    const mockFile: ShortenedFile = { name: 'test1.txt', text: 'Hello' };
    localStorage.setItem('currentFile', JSON.stringify(mockFile));
    const retrievedFile = service.getCurrentFileLocalStorage();
    expect(retrievedFile).toEqual(mockFile);
  });

  it('should return empty array if no current file in local storage', () => {
    localStorage.removeItem('currentFile');
    const retrievedFile = service.getCurrentFileLocalStorage();
    expect(retrievedFile).toEqual([]);
  });

  it('should delete current file from local storage', () => {
    const mockFile: ShortenedFile = { name: 'test1.txt', text: 'Hello' };
    localStorage.setItem('currentFile', JSON.stringify(mockFile));
    service.deleteCurrentFileLocalStorage();
    const storedFile = localStorage.getItem('currentFile');
    expect(storedFile).toBeNull();
  });

  it('should clear local storage', () => {
    const mockFiles: ShortenedFile[] = [
      { name: 'test1.txt', text: 'Hello' },
      { name: 'test2.txt', text: 'World' },
    ];
    const mockFile: ShortenedFile = { name: 'test1.txt', text: 'Hello' };
    localStorage.setItem('files', JSON.stringify(mockFiles));
    localStorage.setItem('currentFile', JSON.stringify(mockFile));
    service.clearLocalStorage();
    expect(localStorage.length).toBe(0);
  });
});
