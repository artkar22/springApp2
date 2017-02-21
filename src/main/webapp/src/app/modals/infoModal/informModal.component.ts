import {Component} from "@angular/core";
/**
 * Created by B51-80 on 2017-02-21.
 */

import { ViewChild } from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";

@Component({
    selector: 'inform-modal',
    template: 'informModal.tpl.html'
})
export class InformModal {
    @ViewChild('childModal') public childModal:ModalDirective;

    public show():void {
        this.childModal.show();
    }

    public hide():void {
        this.childModal.hide();
    }
}