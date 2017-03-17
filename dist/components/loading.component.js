var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, TemplateRef, ElementRef } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
import { deprecatedSelector } from '../deprecated-selector';
var LoadingComponent = (function () {
    function LoadingComponent(elementRef) {
        this.elementRef = elementRef;
        deprecatedSelector('LoadingComponent', 'tree-loading-component', elementRef);
    }
    return LoadingComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], LoadingComponent.prototype, "template", void 0);
__decorate([
    Input(),
    __metadata("design:type", TreeNode)
], LoadingComponent.prototype, "node", void 0);
LoadingComponent = __decorate([
    Component({
        selector: 'LoadingComponent, tree-loading-component',
        template: "\n    <span *ngIf=\"!template\">loading...</span>\n    <template\n      [ngTemplateOutlet]=\"template\"\n      [ngOutletContext]=\"{ $implicit: node }\">\n    </template>\n  ",
    }),
    __metadata("design:paramtypes", [ElementRef])
], LoadingComponent);
export { LoadingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50cy9sb2FkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVk1RCxJQUFhLGdCQUFnQjtJQUkzQiwwQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN4QyxrQkFBa0IsQ0FBQyxrQkFBa0IsRUFBRSx3QkFBd0IsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQU5VO0lBQVIsS0FBSyxFQUFFOzhCQUFXLFdBQVc7a0RBQU07QUFDM0I7SUFBUixLQUFLLEVBQUU7OEJBQU8sUUFBUTs4Q0FBQztBQUZiLGdCQUFnQjtJQVY1QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsMENBQTBDO1FBQ3BELFFBQVEsRUFBRSxnTEFNVDtLQUNGLENBQUM7cUNBS2dDLFVBQVU7R0FKL0IsZ0JBQWdCLENBTzVCO1NBUFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XG5pbXBvcnQgeyBkZXByZWNhdGVkU2VsZWN0b3IgfSBmcm9tICcuLi9kZXByZWNhdGVkLXNlbGVjdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnTG9hZGluZ0NvbXBvbmVudCwgdHJlZS1sb2FkaW5nLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gKm5nSWY9XCIhdGVtcGxhdGVcIj5sb2FkaW5nLi4uPC9zcGFuPlxuICAgIDx0ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVcIlxuICAgICAgW25nT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogbm9kZSB9XCI+XG4gICAgPC90ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBub2RlOiBUcmVlTm9kZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBkZXByZWNhdGVkU2VsZWN0b3IoJ0xvYWRpbmdDb21wb25lbnQnLCAndHJlZS1sb2FkaW5nLWNvbXBvbmVudCcsIGVsZW1lbnRSZWYpO1xuICB9XG59XG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==