import { Router } from '@angular/router';
import { FileUploadComponent } from './file-upload.component';
import { LocalStorageService } from '../../../../shared/services/local-storage/local-storage.service';

describe('FileUploadComponent', () => {
  let component: FileUploadComponent;
  let router:Router;
  const localStorage = new LocalStorageService;

  beforeEach(() => {
    component = new FileUploadComponent(router, localStorage);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
