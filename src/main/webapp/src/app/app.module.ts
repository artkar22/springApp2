import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {WelcomeScreen} from "./screens/welcomeScreen/welcomeScreen.component";

import {routing, appRoutingProviders} from './app.routing';
import {FormsModule} from "@angular/forms";
import {AuthGuard} from "./guards/auth.guard";
import {UserService} from "./services/user.service";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations: [
        AppComponent,
        WelcomeScreen
    ],
    providers: [
        appRoutingProviders,
        AuthGuard,
        UserService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}