import {StubService} from "./stub.service";
import {TestBed} from "@angular/core/testing";
import {StubComponent} from "./stub.component";

describe('StubComponent', () => {
  const serviceStub: Partial<StubService> = {
    name: 'Boothstomper'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StubComponent],
      providers: [
        { provide: StubService, useValue: serviceStub }
      ]
    }).compileComponents();
  });

  describe('status', () => {
    let service: StubService;

    beforeEach(() => {
      service = TestBed.inject(StubService);
    });

    describe('when is busy', () => {
      it('renders "is on mission" as status', () => {
        // given
        const fixture = TestBed.createComponent(StubComponent)
        service.isBusy = true;
        fixture.detectChanges();

        // when
        const message = fixture.nativeElement.querySelector('span').textContent;

        // then
        expect(message).toContain('is on mission')
      });
    });

    describe('when not busy', () => {
      it('renders "is available" as status', () => {
        // given
        const fixture = TestBed.createComponent(StubComponent)
        service.isBusy = false;
        fixture.detectChanges();

        // when
        const message = fixture.nativeElement.querySelector('span').textContent;

        // then
        expect(message).toContain('is available')
      });
    })
  })
});
