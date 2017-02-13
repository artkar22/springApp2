import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {WelcomeScreen} from "./screens/welcomeScreen/welcomeScreen.component";
import {AppComponent} from "./app.component";
import {AuthGuard} from "./guards/auth.guard";

const appRoutes:Routes = [
    {path: '', component: AppComponent, canActivate: [AuthGuard]},
    {path: 'welcome', component: WelcomeScreen, data: {title: 'Welcome!'}},
    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
