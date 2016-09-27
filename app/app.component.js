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
var project_fetcher_service_1 = require('./js/services/project-fetcher.service');
var AppComponent = (function () {
    function AppComponent(projectFetcherService) {
        this.projectFetcherService = projectFetcherService;
        this.title = 'Web application for managing localization resources.';
        this.version = 'Prototype';
        this.projects = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    AppComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectFetcherService.getProjects().then(function (projects) { return _this.projects = projects; });
    };
    AppComponent.prototype.getSelectedProject = function () {
        if (this.projects && this.projects[0]) {
            return this.projects[0];
        }
        else {
            return null;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/view/layout.html'
        }), 
        __metadata('design:paramtypes', [project_fetcher_service_1.ProjectFetcherService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map