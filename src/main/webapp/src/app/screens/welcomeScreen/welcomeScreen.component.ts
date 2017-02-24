/**
 * Created by Artur on 2017-02-10.
 */
import {Component, OnInit, ViewChild} from "@angular/core";
import {User} from "../../interfaces/user.interface";
import {RegistrationData} from "../../interfaces/registrationData.interface";
import {UserService} from "../../services/user.service";
import {InformModal} from "../../modals/infoModal/informModal.component";

const registerSuccessTitle:String = "Gratulujemy!";
const registerFailureTitle:String = "Ostrzeżenie!";
const registerSuccessMessage:String = "Rejestracja powiodła się!";
const registerFailureMessage:String = "Rejestracja nie powiodła się!";

@Component({
    selector: 'welcome',
    templateUrl: './app/screens/welcomeScreen/welcomeScreen.html',
    styleUrls: ['./app/screens/welcomeScreen/welcomeScreen.style.scss'],
})
export class WelcomeScreen implements OnInit {
    @ViewChild(InformModal) informModal:InformModal;

    public logingData:User = <User>{};
    public registrationData:RegistrationData = <RegistrationData>{};

    public registerTitle:String = "Uwaga";
    public registerMessage:String = "";

    constructor(private userService:UserService) {
    }

    ngOnInit():void {
        console.log("WELCOME!");
    }

    public registerNewUser = () => {
        let vm = this;
        this.userService.create(this.registrationData)
            .subscribe(
                data => {
                    vm.registerTitle = registerSuccessTitle;
                    vm.registerMessage = registerSuccessMessage;
                    vm.informModal.show();
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    //here info moda
                },
                error => {
                    //hereInfoModal
                    vm.registerTitle = registerFailureTitle;
                    vm.registerMessage = registerFailureMessage;
                    vm.informModal.show();
                });
    }

    public isRegisterFieldsFullfiled = ():boolean => {
        return !(this.registrationData.username && this.registrationData.username.length > 0 &&
        this.registrationData.password && this.registrationData.password.length > 0 &&
        this.registrationData.confirm_password && this.registrationData.confirm_password.length > 0);
    }

    public logIn():void {
        this.userService.greetingServe().subscribe(
            data => {
                console.log(data);
                // set success message and pass true paramater to persist the message after redirecting to the login page
                //here info moda
            },
            error => {
                console.log("błąd");
            });
    }
}