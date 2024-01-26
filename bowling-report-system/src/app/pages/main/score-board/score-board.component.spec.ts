import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalStorageService } from '../../../../shared/services/local-storage/local-storage.service';
import { ScoreBoardComponent } from './score-board.component';
import { ShortenedFile } from '../../../../shared/interfaces/shortenedFile';
import { PlayerInfo } from '../../../../shared/interfaces/playerInfo';

describe('ScoreBoardComponent', () => {
  let component: ScoreBoardComponent;
  let localStorage: LocalStorageService;
  let fixture: ComponentFixture<ScoreBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScoreBoardComponent],
      providers: [LocalStorageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreBoardComponent);
    component = fixture.componentInstance;
    localStorage = TestBed.inject(LocalStorageService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get player info from file text', () => {
    const file: ShortenedFile = {
      name: 'test.txt',
      text: 'Alice\n0,X,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2\nBob\n4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4',
    };
    const expectedPlayers: PlayerInfo[] = [
      {
        name: 'Alice',
        scores: [0, 'X', 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
      },
      {
        name: 'Bob',
        scores: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      },
    ];
    spyOn(localStorage, 'getCurrentFileLocalStorage').and.returnValue(file);

    component.ngOnInit();

    expect(component.correctFile).toBe(true);
    expect(component.players).toEqual(expectedPlayers);
  });

  it('should set correctFile to false if file text is invalid', () => {
    const file: ShortenedFile = {
      name: 'invalid.txt',
      text: 'Alice\n,0,X,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2\nBob,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4',
    };
    spyOn(localStorage, 'getCurrentFileLocalStorage').and.returnValue(file);

    component.ngOnInit();

    expect(component.correctFile).toBe(false);
  });
});
