import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemForumComponent } from './item-forum.component';

describe('ItemForumComponent', () => {
  let component: ItemForumComponent;
  let fixture: ComponentFixture<ItemForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemForumComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
