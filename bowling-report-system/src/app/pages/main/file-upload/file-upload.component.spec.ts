import { Router } from '@angular/router';
import { FileUploadComponent } from './file-upload.component';
import { LocalStorageService } from '../../../../shared/services/local-storage/local-storage.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('FileUploadComponent', () => {
  let component: FileUploadComponent;
  let fixture: ComponentFixture<FileUploadComponent>;
  let router:Router;
  let localStorage: LocalStorageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadComponent ],
      providers: [
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } },
        { provide: LocalStorageService, useValue: { 
          getFilesLocalStorage: jasmine.createSpy('getFilesLocalStorage'),
          deleteCurrentFileLocalStorage: jasmine.createSpy('deleteCurrentFileLocalStorage'),
          clearLocalStorage: jasmine.createSpy('clearLocalStorage'),
          setCurrentFileLocalStorage: jasmine.createSpy('setCurrentFileLocalStorage'),
          updateFilesLocalStorage: jasmine.createSpy('updateFilesLocalStorage')
        } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    localStorage = TestBed.inject(LocalStorageService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get files from local storage on init', () => {
    component.ngOnInit();
    expect(localStorage.getFilesLocalStorage).toHaveBeenCalled();
    expect(component.files).toEqual(localStorage.getFilesLocalStorage());
  });

  it('should delete file by index', () => {
    const mockFiles = [
      { name: 'test1.txt', text: 'Hello' },
      { name: 'test2.txt', text: 'World' }
    ];
    component.files = mockFiles;
    component.deleteFile(1);
    expect(component.files).toEqual([mockFiles[0]]);
    expect(localStorage.updateFilesLocalStorage).toHaveBeenCalledWith([mockFiles[0]]);
  });

  it('should delete current file from local storage if files list is empty', () => {
    component.files = [{ name: 'test1.txt', text: 'Hello' }];
    component.deleteFile(0);
    expect(localStorage.deleteCurrentFileLocalStorage).toHaveBeenCalled();
  });

  it('should clear files and local storage', () => {
    component.files = [
      { name: 'test1.txt', text: 'Hello' },
      { name: 'test2.txt', text: 'World' }
    ];
    component.clearFiles();
    expect(component.files).toEqual([]);
    expect(localStorage.clearLocalStorage).toHaveBeenCalled();
  });

  it('should set current file in local storage and navigate to board', () => {
    const mockFile = { name: 'test1.txt', text: 'Hello' };
    component.onToShow(mockFile);
    expect(localStorage.setCurrentFileLocalStorage).toHaveBeenCalledWith(mockFile);
    expect(router.navigate).toHaveBeenCalledWith(['/main/board']);
  });
});
