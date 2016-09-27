"use strict";
var router_1 = require('@angular/router');
var project_detail_component_1 = require('./js/components/project-detail.component');
var project_list_component_1 = require('./js/components/project-list.component');
var project_edit_component_1 = require('./js/components/project-edit.component');
var appRoutes = [
    {
        path: 'project-list',
        component: project_list_component_1.ProjectListComponent
    },
    {
        path: 'project/detail/:id',
        component: project_detail_component_1.ProjectDetailComponent
    },
    {
        path: '',
        redirectTo: '/project-list',
        pathMatch: 'full'
    },
    {
        path: 'project/edit/:id',
        component: project_edit_component_1.ProjectEditComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map