import {Component, ElementRef} from "angular2/core";

// Services
import {NotifierService} from "../services/NotifierService";

@Component({
    selector: "notifier",
    template: "<div>{{message}}</div>",
    styles: [`
        div {
            position: fixed;
            bottom: 25px; left: 25px;
            max-width: 0;
            color: #FFF;
            background: red;
            transition: left, max-width 0.3s ease;
        }

        div.active { padding: 20px; max-width: 500px; }
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
