var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
import { deprecatedSelector } from '../deprecated-selector';
var TreeNodeExpanderComponent = (function () {
    function TreeNodeExpanderComponent(elementRef) {
        this.elementRef = elementRef;
        deprecatedSelector('TreeNodeExpander', 'tree-node-expander', elementRef);
    }
    return TreeNodeExpanderComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", TreeNode)
], TreeNodeExpanderComponent.prototype, "node", void 0);
TreeNodeExpanderComponent = __decorate([
    Component({
        selector: 'TreeNodeExpander, tree-node-expander',
        encapsulation: ViewEncapsulation.None,
        styles: [
            '.toggle-children-wrapper-expanded .toggle-children { transform: rotate(90deg) }',
            '.toggle-children-wrapper-collapsed .toggle-children { transform: rotate(0); }',
            ".toggle-children-wrapper {\n      padding: 2px 3px 5px 1px;\n    }",
            /* tslint:disable */
            ".toggle-children {\n        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzRkRFQjcxODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzRkRFQjcwODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5iogFwAAAGhJREFUeNpiYGBgKABigf///zOQg0EARH4A4gZyDIIZ8B/JoAJKDIDhB0CcQIkBRBtEyABkgxwoMQCGD6AbRKoBGAYxQgXIBRuZGKgAKPIC3QLxArnRSHZCIjspk52ZKMrOFBUoAAEGAKnq593MQAZtAAAAAElFTkSuQmCC');\n        height: 8px;\n        width: 9px;\n        background-size: contain;\n        display: inline-block;\n        position: relative;\n        top: 1px;\n        background-repeat: no-repeat;\n        background-position: center;\n    }",
            /* tslint:enable */
            ".toggle-children-placeholder {\n        display: inline-block;\n        height: 10px;\n        width: 10px;\n        position: relative;\n        top: 1px;\n        padding-right: 3px;\n    }"
        ],
        template: "\n    <ng-container *mobxAutorun>\n      <span\n        *ngIf=\"node.hasChildren\"\n        [class.toggle-children-wrapper-expanded]=\"node.isExpanded\"\n        [class.toggle-children-wrapper-collapsed]=\"node.isCollapsed\"\n        class=\"toggle-children-wrapper\"\n        (click)=\"node.mouseAction('expanderClick', $event)\">\n\n        <span class=\"toggle-children\"></span>\n      </span>\n      <span\n        *ngIf=\"!node.hasChildren\"\n        class=\"toggle-children-placeholder\">\n      </span>\n    </ng-container>\n  "
    }),
    __metadata("design:paramtypes", [ElementRef])
], TreeNodeExpanderComponent);
export { TreeNodeExpanderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWV4cGFuZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS1leHBhbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQW1ENUQsSUFBYSx5QkFBeUI7SUFHcEMsbUNBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDeEMsa0JBQWtCLENBQUMsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUNILGdDQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFMVTtJQUFSLEtBQUssRUFBRTs4QkFBTyxRQUFRO3VEQUFDO0FBRGIseUJBQXlCO0lBakRyQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0NBQXNDO1FBQ2hELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1FBQ3JDLE1BQU0sRUFBRTtZQUNOLGlGQUFpRjtZQUNqRiwrRUFBK0U7WUFDL0Usb0VBRUU7WUFDRixvQkFBb0I7WUFDcEIsdzdEQVVFO1lBQ0YsbUJBQW1CO1lBQ25CLGlNQU9FO1NBQ0g7UUFDRCxRQUFRLEVBQUUseWhCQWdCVDtLQUNGLENBQUM7cUNBSWdDLFVBQVU7R0FIL0IseUJBQXlCLENBTXJDO1NBTlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XG5pbXBvcnQgeyBkZXByZWNhdGVkU2VsZWN0b3IgfSBmcm9tICcuLi9kZXByZWNhdGVkLXNlbGVjdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnVHJlZU5vZGVFeHBhbmRlciwgdHJlZS1ub2RlLWV4cGFuZGVyJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3R5bGVzOiBbXG4gICAgJy50b2dnbGUtY2hpbGRyZW4td3JhcHBlci1leHBhbmRlZCAudG9nZ2xlLWNoaWxkcmVuIHsgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIH0nLFxuICAgICcudG9nZ2xlLWNoaWxkcmVuLXdyYXBwZXItY29sbGFwc2VkIC50b2dnbGUtY2hpbGRyZW4geyB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfScsXG4gICAgYC50b2dnbGUtY2hpbGRyZW4td3JhcHBlciB7XG4gICAgICBwYWRkaW5nOiAycHggM3B4IDVweCAxcHg7XG4gICAgfWAsXG4gICAgLyogdHNsaW50OmRpc2FibGUgKi9cbiAgICBgLnRvZ2dsZS1jaGlsZHJlbiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVNDQVlBQUFCU08xNXFBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQkFocFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1EWTNJRGM1TGpFMU56YzBOeXdnTWpBeE5TOHdNeTh6TUMweU16bzBNRG8wTWlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wVW1WbVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWU1pXWWpJaUI0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUlIaHRiRzV6T21SalBTSm9kSFJ3T2k4dmNIVnliQzV2Y21jdlpHTXZaV3hsYldWdWRITXZNUzR4THlJZ2VHMXdUVTA2VDNKcFoybHVZV3hFYjJOMWJXVnVkRWxFUFNKMWRXbGtPalkxUlRZek9UQTJPRFpEUmpFeFJFSkJOa1V5UkRnNE4wTkZRVU5DTkRBM0lpQjRiWEJOVFRwRWIyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09rWXpSa1JGUWpjeE9EVXpOVEV4UlRVNFJUUXdSa1F3T0RGRU9VWkVNRUUzSWlCNGJYQk5UVHBKYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2tZelJrUkZRamN3T0RVek5URXhSVFU0UlRRd1JrUXdPREZFT1VaRU1FRTNJaUI0YlhBNlEzSmxZWFJ2Y2xSdmIydzlJa0ZrYjJKbElGQm9iM1J2YzJodmNDQkRReUF5TURFMUlDaE5ZV05wYm5SdmMyZ3BJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TVRrNU56QTFPR0V0WkRJM09DMDBORFprTFdFNE9EZ3ROR000TUdRNFlXSTFOek5tSWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKaFpHOWlaVHBrYjJOcFpEcHdhRzkwYjNOb2IzQTZZelJrWm1ReE1HTXRZMk5sTlMweE1UYzRMV0U1T0dRdFkyTmtabU01T0RrNVlXWXdJaTgrSUR4a1l6cDBhWFJzWlQ0Z1BISmtaanBCYkhRK0lEeHlaR1k2YkdrZ2VHMXNPbXhoYm1jOUluZ3RaR1ZtWVhWc2RDSStaMng1Y0docFkyOXVjend2Y21SbU9teHBQaUE4TDNKa1pqcEJiSFErSUR3dlpHTTZkR2wwYkdVK0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4KzVpb2dGd0FBQUdoSlJFRlVlTnBpWUdCZ0tBQmlnZi8vL3pPUWcwRUFSSDRBNGdaeURJSVo4Qi9Kb0FKS0RJRGhCMENjUUlrQlJCdEV5QUJrZ3h3b01RQ0dENkFiUktvQkdBWXhRZ1hJQlJ1WkdLZ0FLUElDM1FMeEFyblJTSFpDSWpzcGs1MlpLTXJPRkJVb0FBRUdBS25xNTkzTVFBWnRBQUFBQUVsRlRrU3VRbUNDXFwnKTtcbiAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgIHdpZHRoOiA5cHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgfWAsXG4gICAgLyogdHNsaW50OmVuYWJsZSAqL1xuICAgIGAudG9nZ2xlLWNoaWxkcmVuLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gICAgfWBcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICptb2J4QXV0b3J1bj5cbiAgICAgIDxzcGFuXG4gICAgICAgICpuZ0lmPVwibm9kZS5oYXNDaGlsZHJlblwiXG4gICAgICAgIFtjbGFzcy50b2dnbGUtY2hpbGRyZW4td3JhcHBlci1leHBhbmRlZF09XCJub2RlLmlzRXhwYW5kZWRcIlxuICAgICAgICBbY2xhc3MudG9nZ2xlLWNoaWxkcmVuLXdyYXBwZXItY29sbGFwc2VkXT1cIm5vZGUuaXNDb2xsYXBzZWRcIlxuICAgICAgICBjbGFzcz1cInRvZ2dsZS1jaGlsZHJlbi13cmFwcGVyXCJcbiAgICAgICAgKGNsaWNrKT1cIm5vZGUubW91c2VBY3Rpb24oJ2V4cGFuZGVyQ2xpY2snLCAkZXZlbnQpXCI+XG5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2dnbGUtY2hpbGRyZW5cIj48L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhblxuICAgICAgICAqbmdJZj1cIiFub2RlLmhhc0NoaWxkcmVuXCJcbiAgICAgICAgY2xhc3M9XCJ0b2dnbGUtY2hpbGRyZW4tcGxhY2Vob2xkZXJcIj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlTm9kZUV4cGFuZGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbm9kZTogVHJlZU5vZGU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgZGVwcmVjYXRlZFNlbGVjdG9yKCdUcmVlTm9kZUV4cGFuZGVyJywgJ3RyZWUtbm9kZS1leHBhbmRlcicsIGVsZW1lbnRSZWYpO1xuICB9XG59XG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==