import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appPermission]',
  standalone: true
})
export class PermissionDirective implements OnInit {
  @Input() appPermission: string[] = [];

  private currentRole = 'agent';

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainerRef: ViewContainerRef
  ) {
  }

  ngOnInit() {
    this.appPermission.indexOf(this.currentRole) === -1 ? this.viewContainerRef.clear() : this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}
