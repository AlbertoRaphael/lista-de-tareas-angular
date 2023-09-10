import { TestBed } from '@angular/core/testing';
import { StandaloneComponent } from  './standalone.component'



describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StandaloneComponent
      ],
    }).compileComponents();
  }); 

  it('should create the app', () => {
    const fixture = TestBed.createComponent(StandaloneComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'lista-tareas-angular'`, () => {
    const fixture = TestBed.createComponent(StandaloneComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('lista-tareas-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(StandaloneComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('lista-tareas-angular app is running!');
  });
});
