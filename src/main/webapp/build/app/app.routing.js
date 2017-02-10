System.register(["@angular/router", "./screens/welcomeScreen/welcomeScreen.component", "./app.component", "./guards/auth.guard"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, welcomeScreen_component_1, app_component_1, auth_guard_1, appRoutes, appRoutingProviders, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (welcomeScreen_component_1_1) {
                welcomeScreen_component_1 = welcomeScreen_component_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (auth_guard_1_1) {
                auth_guard_1 = auth_guard_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
                { path: '', component: app_component_1.AppComponent, canActivate: [auth_guard_1.AuthGuard] },
                { path: 'welcome', component: welcomeScreen_component_1.WelcomeScreen, data: { title: 'Welcome!' } },
                // otherwise redirect to home
                { path: '**', redirectTo: '' }
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true }));
        }
    };
});

//# sourceMappingURL=app.routing.js.map
