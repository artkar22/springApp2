/**
 * Created by Artur on 2017-02-10.
 */
import {Component, OnInit, ViewChild} from "@angular/core";
import {User} from "../../interfaces/user.interface";
import {RegistrationData} from "../../interfaces/registrationData.interface";
import {UserService} from "../../services/user.service";
import {InformModal} from "../../modals/infoModal/informModal.component";
@Component({
    selector: 'welcome',
    templateUrl: './app/screens/welcomeScreen/welcomeScreen.html',
    styleUrls: ['./app/screens/welcomeScreen/welcomeScreen.style.scss'],
})
export class WelcomeScreen implements OnInit {
    @ViewChild(InformModal) informModal:InformModal;

    public logingData:User = <User>{};
    public registrationData:RegistrationData = <RegistrationData>{};

    constructor(private userService:UserService) {
    }

    ngOnInit():void {
        console.log("WELCOME!");
    }

    public registerNewUser = () => {
        this.informModal.show();
        // this.userService.create(this.registrationData)
        //     .subscribe(
        //         data => {
        //             // set success message and pass true paramater to persist the message after redirecting to the login page
        //             //here info modal
        //         },
        //         error => {
        //             //hereInfoModal
        //         });
    }
    public isRegisterFieldsFullfiled = ():boolean => {
        return !(this.registrationData.username && this.registrationData.username.length > 0 &&
        this.registrationData.password && this.registrationData.password.length > 0 &&
        this.registrationData.confirm_password && this.registrationData.confirm_password.length > 0);
    }
}