System.register(["@angular/core", "ng2-bootstrap"], function (exports_1, context_1) {
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
    var core_1, ng2_bootstrap_1, InformModal;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }
        ],
        execute: function () {
            InformModal = (function () {
                function InformModal() {
                }
                InformModal.prototype.show = function () {
                    this.childModal.show();
                };
                InformModal.prototype.hide = function () {
                    this.childModal.hide();
                };
                return InformModal;
            }());
            __decorate([
                core_1.ViewChild('childModal'),
                __metadata("design:type", ng2_bootstrap_1.ModalDirective)
            ], InformModal.prototype, "childModal", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], InformModal.prototype, "modalsMessage", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], InformModal.prototype, "modalsTitle", void 0);
            InformModal = __decorate([
                core_1.Component({
                    selector: 'inform-modal',
                    templateUrl: './app/modals/infoModal/informModal.tpl.html'
                })
            ], InformModal);
            exports_1("InformModal", InformModal);
        }
    };
});

//# sourceMappingURL=informModal.component.js.map
