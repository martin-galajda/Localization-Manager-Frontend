"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var project_fetcher_service_1 = require('../services/project-fetcher.service');
var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(projectFetcher, route, router) {
        this.projectFetcher = projectFetcher;
        this.route = route;
        this.router = router;
        this.project = null;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.projectFetcher.getProject(id)
                .then(function (project) { return _this.project = project; });
        });
    };
    ProjectDetailComponent.prototype.goBack = function () {
        this.router.navigate(['project-list']);
    };
    ProjectDetailComponent.prototype.edit = function () {
        this.router.navigate(['project/edit', this.project.id]);
    };
    ProjectDetailComponent = __decorate([
        core_1.Component({
            selector: 'project-detail',
            templateUrl: 'app/view/project-detail.component.html'
        }), 
        __metadata('design:paramtypes', [project_fetcher_service_1.ProjectFetcherService, router_1.ActivatedRoute, router_1.Router])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());
exports.ProjectDetailComponent = ProjectDetailComponent;
//# sourceMappingURL=project-detail.component.js.map