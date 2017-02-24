/**
 * Created by B51-80 on 2017-02-21.
 */
import {Component, Input, ViewChild} from "@angular/core";
import {ModalDirective} from "ng2-bootstrap";

@Component({
    selector: 'inform-modal',
    templateUrl: './app/modals/infoModal/informModal.tpl.html'
})
export class InformModal {
    @ViewChild('childModal') public childModal:ModalDirective;
    @Input() modalsMessage:String;
    @Input() modalsTitle:String;

    public show():void {
        this.childModal.show();
    }

    public hide():void {
        this.childModal.hide();
    }
}