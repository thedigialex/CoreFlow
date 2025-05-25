import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputTextModel } from '../text/text.component';

@Component({
    selector: 'input-label',
    templateUrl: './label.component.html',
    styleUrls: ['./label.component.css'],
    imports: [CommonModule]
})
export class InputLabel {
    @Input() inputModel?: InputTextModel;
    @Input() isRequired: boolean = false;
    label: string = '';
    stacked: boolean = false;

    ngOnChanges() {
        if (this.inputModel) {
            this.label = this.inputModel.name;
            this.stacked = this.inputModel.stacked ?? false;
        }
    }
}