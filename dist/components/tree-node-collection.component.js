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
import { reaction } from 'mobx';
import { observable, computed } from 'ng2-mobx';
import { TreeVirtualScroll } from '../models/tree-virtual-scroll.model';
import { deprecatedSelector } from '../deprecated-selector';
var TreeNodeCollectionComponent = (function () {
    function TreeNodeCollectionComponent(virtualScroll, elementRef) {
        this.virtualScroll = virtualScroll;
        this.elementRef = elementRef;
        this._dispose = [];
        deprecatedSelector('TreeNodeCollection', 'tree-node-collection', elementRef);
    }
    Object.defineProperty(TreeNodeCollectionComponent.prototype, "nodes", {
        get: function () { return this._nodes; },
        set: function (nodes) { this._nodes = nodes; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNodeCollectionComponent.prototype, "marginTop", {
        get: function () {
            var firstNode = this.viewportNodes && this.viewportNodes[0];
            var relativePosition = firstNode ? firstNode.position - firstNode.parent.position - firstNode.parent.getSelfHeight() : 0;
            return relativePosition + "px";
        },
        enumerable: true,
        configurable: true
    });
    TreeNodeCollectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dispose = [
            // return node indexes so we can compare structurally,
            reaction(function () {
                return _this.virtualScroll.getViewportNodes(_this.nodes).map(function (n) { return n.index; });
            }, function (nodeIndexes) {
                _this.viewportNodes = nodeIndexes.map(function (i) { return _this.nodes[i]; });
            }, { compareStructural: true, fireImmediately: true }),
            reaction(function () { return _this.nodes; }, function (nodes) {
                _this.viewportNodes = _this.virtualScroll.getViewportNodes(nodes);
            })
        ];
    };
    TreeNodeCollectionComponent.prototype.ngOnDestroy = function () {
        this._dispose.forEach(function (d) { return d(); });
    };
    TreeNodeCollectionComponent.prototype.trackNode = function (index, node) {
        return node.id;
    };
    return TreeNodeCollectionComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TreeNodeCollectionComponent.prototype, "nodes", null);
__decorate([
    observable,
    __metadata("design:type", Object)
], TreeNodeCollectionComponent.prototype, "_nodes", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TreeNodeCollectionComponent.prototype, "templates", void 0);
__decorate([
    observable,
    __metadata("design:type", Array)
], TreeNodeCollectionComponent.prototype, "viewportNodes", void 0);
__decorate([
    computed,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], TreeNodeCollectionComponent.prototype, "marginTop", null);
TreeNodeCollectionComponent = __decorate([
    Component({
        selector: 'tree-node-collection, TreeNodeCollection',
        encapsulation: ViewEncapsulation.None,
        template: "\n    <ng-container *mobxAutorun>\n      <div\n        [style.margin-top]=\"marginTop\">\n        <tree-node\n          *ngFor=\"let node of viewportNodes; let i = index; trackBy: trackNode\"\n          [node]=\"node\"\n          [index]=\"i\"\n          [templates]=\"templates\">\n        </tree-node>\n      </div>\n    </ng-container>\n  "
    }),
    __metadata("design:paramtypes", [TreeVirtualScroll, ElementRef])
], TreeNodeCollectionComponent);
export { TreeNodeCollectionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWNvbGxlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2NvbXBvbmVudHMvdHJlZS1ub2RlLWNvbGxlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFxQixVQUFVLEVBQ25FLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFtQjVELElBQWEsMkJBQTJCO0lBbUJ0QyxxQ0FBb0IsYUFBZ0MsRUFBVSxVQUFzQjtRQUFoRSxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRnBGLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFHWixrQkFBa0IsQ0FBQyxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBbkJELHNCQUFJLDhDQUFLO2FBQVQsY0FBYyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDbkMsVUFBVSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7T0FETjtJQVF6QixzQkFBSSxrREFBUzthQUFiO1lBQ1IsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELElBQU0sZ0JBQWdCLEdBQUcsU0FBUyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFM0gsTUFBTSxDQUFJLGdCQUFnQixPQUFJLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFRRCw4Q0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2Qsc0RBQXNEO1lBQ3RELFFBQVEsQ0FBQztnQkFDUCxNQUFNLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssRUFBUCxDQUFPLENBQUMsQ0FBQztZQUMzRSxDQUFDLEVBQUUsVUFBQyxXQUFXO2dCQUNYLEtBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQWIsQ0FBYSxDQUFDLENBQUM7WUFDN0QsQ0FBQyxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FDdEQ7WUFDRCxRQUFRLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxFQUFFLFVBQUMsS0FBSztnQkFDL0IsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xFLENBQUMsQ0FBQztTQUNILENBQUM7SUFDSixDQUFDO0lBRUQsaURBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxFQUFFLEVBQUgsQ0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELCtDQUFTLEdBQVQsVUFBVSxLQUFLLEVBQUUsSUFBSTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUgsa0NBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDO0FBNUNDO0lBREMsS0FBSyxFQUFFOzs7d0RBQzJCO0FBR3ZCO0lBQVgsVUFBVTs7MkRBQVE7QUFFVjtJQUFSLEtBQUssRUFBRTs7OERBQVc7QUFFUDtJQUFYLFVBQVU7O2tFQUEyQjtBQUM1QjtJQUFULFFBQVE7Ozs0REFLUjtBQWZVLDJCQUEyQjtJQWpCdkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDBDQUEwQztRQUNwRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtRQUNyQyxRQUFRLEVBQUUsd1ZBWVQ7S0FDRixDQUFDO3FDQW9CbUMsaUJBQWlCLEVBQXNCLFVBQVU7R0FuQnpFLDJCQUEyQixDQThDdkM7U0E5Q1ksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uSW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmVhY3Rpb24sIGF1dG9ydW4gfSBmcm9tICdtb2J4JztcbmltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkIH0gZnJvbSAnbmcyLW1vYngnO1xuaW1wb3J0IHsgVHJlZVZpcnR1YWxTY3JvbGwgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS12aXJ0dWFsLXNjcm9sbC5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4uL21vZGVscy90cmVlLW5vZGUubW9kZWwnO1xuaW1wb3J0IHsgZGVwcmVjYXRlZFNlbGVjdG9yIH0gZnJvbSAnLi4vZGVwcmVjYXRlZC1zZWxlY3Rvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZWUtbm9kZS1jb2xsZWN0aW9uLCBUcmVlTm9kZUNvbGxlY3Rpb24nLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm1vYnhBdXRvcnVuPlxuICAgICAgPGRpdlxuICAgICAgICBbc3R5bGUubWFyZ2luLXRvcF09XCJtYXJnaW5Ub3BcIj5cbiAgICAgICAgPHRyZWUtbm9kZVxuICAgICAgICAgICpuZ0Zvcj1cImxldCBub2RlIG9mIHZpZXdwb3J0Tm9kZXM7IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNrTm9kZVwiXG4gICAgICAgICAgW25vZGVdPVwibm9kZVwiXG4gICAgICAgICAgW2luZGV4XT1cImlcIlxuICAgICAgICAgIFt0ZW1wbGF0ZXNdPVwidGVtcGxhdGVzXCI+XG4gICAgICAgIDwvdHJlZS1ub2RlPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgVHJlZU5vZGVDb2xsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBnZXQgbm9kZXMoKSB7IHJldHVybiB0aGlzLl9ub2RlczsgfVxuICBzZXQgbm9kZXMobm9kZXMpIHsgdGhpcy5fbm9kZXMgPSBub2RlczsgfVxuXG4gIEBvYnNlcnZhYmxlIF9ub2RlcztcblxuICBASW5wdXQoKSB0ZW1wbGF0ZXM7XG5cbiAgQG9ic2VydmFibGUgdmlld3BvcnROb2RlczogVHJlZU5vZGVbXTtcbiAgQGNvbXB1dGVkIGdldCBtYXJnaW5Ub3AoKTogc3RyaW5nIHtcbiAgICBjb25zdCBmaXJzdE5vZGUgPSB0aGlzLnZpZXdwb3J0Tm9kZXMgJiYgdGhpcy52aWV3cG9ydE5vZGVzWzBdO1xuICAgIGNvbnN0IHJlbGF0aXZlUG9zaXRpb24gPSBmaXJzdE5vZGUgPyBmaXJzdE5vZGUucG9zaXRpb24gLSBmaXJzdE5vZGUucGFyZW50LnBvc2l0aW9uIC0gZmlyc3ROb2RlLnBhcmVudC5nZXRTZWxmSGVpZ2h0KCkgOiAwO1xuXG4gICAgcmV0dXJuIGAke3JlbGF0aXZlUG9zaXRpb259cHhgO1xuICB9XG5cbiAgX2Rpc3Bvc2UgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpcnR1YWxTY3JvbGw6IFRyZWVWaXJ0dWFsU2Nyb2xsLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBkZXByZWNhdGVkU2VsZWN0b3IoJ1RyZWVOb2RlQ29sbGVjdGlvbicsICd0cmVlLW5vZGUtY29sbGVjdGlvbicsIGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fZGlzcG9zZSA9IFtcbiAgICAgIC8vIHJldHVybiBub2RlIGluZGV4ZXMgc28gd2UgY2FuIGNvbXBhcmUgc3RydWN0dXJhbGx5LFxuICAgICAgcmVhY3Rpb24oKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy52aXJ0dWFsU2Nyb2xsLmdldFZpZXdwb3J0Tm9kZXModGhpcy5ub2RlcykubWFwKG4gPT4gbi5pbmRleCk7XG4gICAgICB9LCAobm9kZUluZGV4ZXMpID0+IHtcbiAgICAgICAgICB0aGlzLnZpZXdwb3J0Tm9kZXMgPSBub2RlSW5kZXhlcy5tYXAoKGkpID0+IHRoaXMubm9kZXNbaV0pO1xuICAgICAgICB9LCB7IGNvbXBhcmVTdHJ1Y3R1cmFsOiB0cnVlLCBmaXJlSW1tZWRpYXRlbHk6IHRydWUgfVxuICAgICAgKSxcbiAgICAgIHJlYWN0aW9uKCgpID0+IHRoaXMubm9kZXMsIChub2RlcykgPT4ge1xuICAgICAgICB0aGlzLnZpZXdwb3J0Tm9kZXMgPSB0aGlzLnZpcnR1YWxTY3JvbGwuZ2V0Vmlld3BvcnROb2Rlcyhub2Rlcyk7XG4gICAgICB9KVxuICAgIF07XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kaXNwb3NlLmZvckVhY2goZCA9PiBkKCkpO1xuICB9XG5cbiAgdHJhY2tOb2RlKGluZGV4LCBub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuaWQ7XG4gIH1cblxufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=