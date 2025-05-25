import { Component, Input, OnInit } from '@angular/core';
import { InputTextModel } from '../input-models';

@Component({
    selector: 'input-text',
    templateUrl: './text.component.html',
    styleUrls: ['../input-styles.css']
})
export class InputTextComponent implements OnInit {
    @Input() inputModel!: InputTextModel;
    constructor() { }

    ngOnInit(): void {
    }
}