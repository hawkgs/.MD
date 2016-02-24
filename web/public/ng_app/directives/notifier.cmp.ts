import {Component, ElementRef, OnInit} from "angular2/core";

// Services
import {NotifierService} from "../services/NotifierService";

// Enums
import {NotifierType} from "../services/enums/NotifierType";

@Component({
    selector: "notifier",
    template: `<div [innerHTML]="message"></div>`,
    styles: [`
        div {
            position: fixed;
            bottom: 25px; left: 25px;
            max-width: 0;
            color: #FFF;
            background: red;
            overflow: hidden;
            white-space: nowrap;
            padding: 20px 0;
            box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.4);
            transition: left, max-width, padding 0.3s ease;
        }

        div.active { padding: 20px; max-width: 500px; }
        div.error { background: #cd2a2a; }
        div.success { background: #2abe4f; }
        div.notice { background: #2175ad; }
    `]
})
export class NotifierComponent implements OnInit {
    public service: NotifierService;

    /**
     * Sets element reference to the corresponding service (NotifierService).
     * @param elem
     * @param service
     */
    constructor(elem: ElementRef, service: NotifierService) {
        this.service = service;
        this.service.elem = elem.nativeElement.querySelector("div");
    }

    /**
     * Gets the notifier message from its service.
     * @returns {string}
     */
    public get message(): string {
        return this.service.message;
    }

    /**
     * Calls all startup messages after the component is initialized.
     */
    public ngOnInit(): void {
        // Put some delaying
        setTimeout(() => {
            this.startUpMessages();
        }, 1000);
    }

    /**
     * Defines all startup messages to the user.
     */
    private startUpMessages() {
        var startUpMessage: string = `
        <strong>Welcome to .MD</strong><br/>
        Be aware that the project is still under<br/>
        development which means some of the<br/>
        functionality is incomplete and/or buggy.
        `;

        this.service.show(NotifierType.Notice, startUpMessage, 7000);
    }
}
