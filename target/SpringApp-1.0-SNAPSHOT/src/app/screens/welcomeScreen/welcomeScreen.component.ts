/**
 * Created by Artur on 2017-02-10.
 */
import {Component, OnInit} from "@angular/core";
import {User} from "../../interfaces/user.interface";
import {RegistrationData} from "../../interfaces/registrationData.interface";
@Component({
    selector: 'welcome',
    templateUrl: './app/screens/welcomeScreen/welcomeScreen.html',
    styleUrls: ['./app/screens/welcomeScreen/welcomeScreen.style.scss']

})
export class WelcomeScreen implements OnInit {

    public logingData:User = <User>{};
    public registrationData:RegistrationData = <RegistrationData>{};

    constructor() {
    }

    ngOnInit():void {
        console.log("WELCOME!");
    }

    public registerNewUser = () => {
        console.log("registering...");
    }
    public isRegisterFieldsFullfiled = ():boolean => {
        return !(this.registrationData.username && this.registrationData.username.length > 0 &&
            this.registrationData.password && this.registrationData.password.length > 0 &&
            this.registrationData.confirm_password && this.registrationData.confirm_password.length > 0);
    }
}