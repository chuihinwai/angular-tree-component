var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, HostListener } from '@angular/core';
import { TreeVirtualScroll } from '../models/tree-virtual-scroll.model';
import { deprecatedSelector } from '../deprecated-selector';
import { throttle } from 'lodash-es';
var SCROLL_REFRESH_INTERVAL = 17;
var isFirefox = navigator && navigator.userAgent && navigator.userAgent.indexOf('Firefox') > -1;
var TreeViewportComponent = (function () {
    function TreeViewportComponent(elementRef, virtualScroll) {
        this.elementRef = elementRef;
        this.virtualScroll = virtualScroll;
        deprecatedSelector('TreeNode', 'tree-node', elementRef);
        this._debounceOnVirtualScroll = throttle(this._onVirtualScroll.bind(this), SCROLL_REFRESH_INTERVAL);
    }
    TreeViewportComponent.prototype.ngOnInit = function () {
        this.virtualScroll.init();
    };
    TreeViewportComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this._onVirtualScroll(); });
    };
    TreeViewportComponent.prototype.ngOnDestroy = function () {
        this.virtualScroll.clear();
    };
    TreeViewportComponent.prototype.onScroll = function (e) {
        this._onWheel(e);
    };
    TreeViewportComponent.prototype.getTotalHeight = function () {
        return this.virtualScroll.isEnabled() && this.virtualScroll.totalHeight + 'px' || 'auto';
    };
    TreeViewportComponent.prototype._onWheel = function (e) {
        this._onVirtualScroll();
    };
    TreeViewportComponent.prototype._onVirtualScroll = function () {
        this.virtualScroll.setNewScroll({ viewport: this.elementRef.nativeElement });
    };
    return TreeViewportComponent;
}());
__decorate([
    HostListener('scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreeViewportComponent.prototype, "onScroll", null);
TreeViewportComponent = __decorate([
    Component({
        selector: 'TreeViewport, tree-viewport',
        styles: [
            ":host {\n      height: 100%;\n      overflow: auto;\n      display: block;\n    }"
        ],
        providers: [TreeVirtualScroll],
        template: "\n    <ng-container *mobxAutorun>\n      <div [style.height]=\"getTotalHeight()\">\n        <ng-content></ng-content>\n      </div>\n    </ng-container>\n  "
    }),
    __metadata("design:paramtypes", [ElementRef,
        TreeVirtualScroll])
], TreeViewportComponent);
export { TreeViewportComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS12aWV3cG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50cy90cmVlLXZpZXdwb3J0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLFVBQVUsRUFBcUIsWUFBWSxFQUN2RCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXJDLElBQU0sdUJBQXVCLEdBQUcsRUFBRSxDQUFDO0FBRW5DLElBQU0sU0FBUyxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBb0JsRyxJQUFhLHFCQUFxQjtJQUdoQywrQkFDVSxVQUFzQixFQUN2QixhQUFnQztRQUQvQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUV2QyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyx3QkFBd0IsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsK0NBQWUsR0FBZjtRQUFBLGlCQUVDO1FBREMsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBR0Qsd0NBQVEsR0FBUixVQUFTLENBQUM7UUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCw4Q0FBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLE1BQU0sQ0FBQztJQUMzRixDQUFDO0lBRUQsd0NBQVEsR0FBUixVQUFTLENBQUM7UUFDUixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0RBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7QUFmQztJQURDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OztxREFHbEM7QUExQlUscUJBQXFCO0lBbEJqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsNkJBQTZCO1FBQ3ZDLE1BQU0sRUFBRTtZQUNOLG1GQUlFO1NBQ0g7UUFDRCxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztRQUM5QixRQUFRLEVBQUUsOEpBTVQ7S0FDRixDQUFDO3FDQUtzQixVQUFVO1FBQ1IsaUJBQWlCO0dBTDlCLHFCQUFxQixDQXVDakM7U0F2Q1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgSG9zdExpc3RlbmVyLCBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVWaXJ0dWFsU2Nyb2xsIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtdmlydHVhbC1zY3JvbGwubW9kZWwnO1xuaW1wb3J0IHsgZGVwcmVjYXRlZFNlbGVjdG9yIH0gZnJvbSAnLi4vZGVwcmVjYXRlZC1zZWxlY3Rvcic7XG5cbmltcG9ydCB7IHRocm90dGxlIH0gZnJvbSAnbG9kYXNoLWVzJztcblxuY29uc3QgU0NST0xMX1JFRlJFU0hfSU5URVJWQUwgPSAxNztcblxuY29uc3QgaXNGaXJlZm94ID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgPiAtMTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnVHJlZVZpZXdwb3J0LCB0cmVlLXZpZXdwb3J0JyxcbiAgc3R5bGVzOiBbXG4gICAgYDpob3N0IHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfWBcbiAgXSxcbiAgcHJvdmlkZXJzOiBbVHJlZVZpcnR1YWxTY3JvbGxdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm1vYnhBdXRvcnVuPlxuICAgICAgPGRpdiBbc3R5bGUuaGVpZ2h0XT1cImdldFRvdGFsSGVpZ2h0KClcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgVHJlZVZpZXdwb3J0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBfZGVib3VuY2VPblZpcnR1YWxTY3JvbGw6ICgpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyB2aXJ0dWFsU2Nyb2xsOiBUcmVlVmlydHVhbFNjcm9sbCkge1xuXG4gICAgZGVwcmVjYXRlZFNlbGVjdG9yKCdUcmVlTm9kZScsICd0cmVlLW5vZGUnLCBlbGVtZW50UmVmKTtcbiAgICB0aGlzLl9kZWJvdW5jZU9uVmlydHVhbFNjcm9sbCA9IHRocm90dGxlKHRoaXMuX29uVmlydHVhbFNjcm9sbC5iaW5kKHRoaXMpLCBTQ1JPTExfUkVGUkVTSF9JTlRFUlZBTCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnZpcnR1YWxTY3JvbGwuaW5pdCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fb25WaXJ0dWFsU2Nyb2xsKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy52aXJ0dWFsU2Nyb2xsLmNsZWFyKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdzY3JvbGwnLCBbJyRldmVudCddKVxuICBvblNjcm9sbChlKSB7XG4gICAgdGhpcy5fb25XaGVlbChlKTtcbiAgfVxuXG4gIGdldFRvdGFsSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnZpcnR1YWxTY3JvbGwuaXNFbmFibGVkKCkgJiYgdGhpcy52aXJ0dWFsU2Nyb2xsLnRvdGFsSGVpZ2h0ICsgJ3B4JyB8fCAnYXV0byc7XG4gIH1cblxuICBfb25XaGVlbChlKSB7XG4gICAgdGhpcy5fb25WaXJ0dWFsU2Nyb2xsKCk7XG4gIH1cblxuICBfb25WaXJ0dWFsU2Nyb2xsKCkge1xuICAgIHRoaXMudmlydHVhbFNjcm9sbC5zZXROZXdTY3JvbGwoeyB2aWV3cG9ydDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgfSk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19