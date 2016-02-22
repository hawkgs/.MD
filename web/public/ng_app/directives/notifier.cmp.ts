import {Component, ElementRef} from "angular2/core";

// Services
import {NotifierService} from "../services/NotifierService";

@Component({
    selector: "notifier",
    template: "<div>{{message}}</div>",
    styles: [`
        div {
            position: fixed;
            bottom: 25px;
            padding: 20px;
            left: -100px;
            color: #FFF;
            background: grey;
        }

        div.active { left: 25px; }
        div.error { background: red; }
        div.success { background: green; }
        div.notice { background: blue; }
    `]
})
export class NotifierComponent {
    public service: NotifierService;

    /**
     * Sets element reference to the corresponding service (NotifierService).
     * @param elem
     * @param service
     */
    constructor(elem: ElementRef, service: NotifierService) {
        this.service = service;
        this.service.elem = elem;
    }

    /**
     * Gets the notifier message from its service.
     * @returns {string}
     */
    public get message(): string {
        return this.service.message;
    }
}
