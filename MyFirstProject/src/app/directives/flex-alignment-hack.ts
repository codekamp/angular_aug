import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appFlexAlignmentHack]'
})

export class FlexAlignmentHackDirective {

    @Input() set appFlexAlignmentHack(count: number) {

        // set default value of count
        count = count || 10;

        this.viewContainerRef.clear();
        for (let i = 0; i < count; i++) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }

    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {

    }
}
