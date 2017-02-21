System.register(["@angular/core", "../../services/user.service", "../../modals/infoModal/informModal.component"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, user_service_1, informModal_component_1, WelcomeScreen;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (informModal_component_1_1) {
                informModal_component_1 = informModal_component_1_1;
            }
        ],
        execute: function () {
            WelcomeScreen = (function () {
                function WelcomeScreen(userService) {
                    var _this = this;
                    this.userService = userService;
                    this.logingData = {};
                    this.registrationData = {};
                    this.registerNewUser = function () {
                        _this.informModal.show();
                        // this.userService.create(this.registrationData)
                        //     .subscribe(
                        //         data => {
                        //             // set success message and pass true paramater to persist the message after redirecting to the login page
                        //             //here info modal
                        //         },
                        //         error => {
                        //             //hereInfoModal
                        //         });
                    };
                    this.isRegisterFieldsFullfiled = function () {
                        return !(_this.registrationData.username && _this.registrationData.username.length > 0 &&
                            _this.registrationData.password && _this.registrationData.password.length > 0 &&
                            _this.registrationData.confirm_password && _this.registrationData.confirm_password.length > 0);
                    };
                }
                WelcomeScreen.prototype.ngOnInit = function () {
                    console.log("WELCOME!");
                };
                return WelcomeScreen;
            }());
            __decorate([
                core_1.ViewChild(informModal_component_1.InformModal),
                __metadata("design:type", informModal_component_1.InformModal)
            ], WelcomeScreen.prototype, "informModal", void 0);
            WelcomeScreen = __decorate([
                core_1.Component({
                    selector: 'welcome',
                    templateUrl: './app/screens/welcomeScreen/welcomeScreen.html',
                    styleUrls: ['./app/screens/welcomeScreen/welcomeScreen.style.scss'],
                }),
                __metadata("design:paramtypes", [user_service_1.UserService])
            ], WelcomeScreen);
            exports_1("WelcomeScreen", WelcomeScreen);
        }
    };
});

//# sourceMappingURL=welcomeScreen.component.js.map
