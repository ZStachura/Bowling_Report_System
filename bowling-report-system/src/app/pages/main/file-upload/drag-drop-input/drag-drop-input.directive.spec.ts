import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DragDropInputDirective } from './drag-drop-input.directive';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `<input
    type="file"
    appDragDropInput
    (fileDropped)="onFileDropped($event)"
  />`,
})
class TestHostComponent {
  files: any[] = [];
  onFileDropped(files: any) {
    this.files = files;
  }
}

describe('DragDropInputDirective', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DragDropInputDirective, TestHostComponent],
    });
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('should create', () => {
    const directive = new DragDropInputDirective();
    expect(directive).toBeTruthy();
  });

  it('should prevent default behavior on dragover event', () => {
    const event = new Event('dragover');
    spyOn(event, 'preventDefault');
    spyOn(event, 'stopPropagation');
    inputEl.triggerEventHandler('dragover', event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(event.stopPropagation).toHaveBeenCalled();
  });

  it('should prevent default behavior on dragleave event', () => {
    const event = new Event('dragleave');
    spyOn(event, 'preventDefault');
    spyOn(event, 'stopPropagation');
    inputEl.triggerEventHandler('dragleave', event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(event.stopPropagation).toHaveBeenCalled();
  });

  it('should not emit fileDropped event on drop event if no files', () => {
    const event = new Event('drop');
    spyOn(event, 'preventDefault');
    spyOn(event, 'stopPropagation');
    spyOn(component, 'onFileDropped');
    Object.defineProperty(event, 'dataTransfer', {
      value: {
        files: [],
      },
    });
    inputEl.triggerEventHandler('drop', event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(event.stopPropagation).toHaveBeenCalled();
    expect(component.onFileDropped).not.toHaveBeenCalled();
    expect(component.files).toEqual([]);
  });
});
