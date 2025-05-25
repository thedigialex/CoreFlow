import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { InputLabel } from "../label/label.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface InputTextModel {
    type: 'text' | 'email' | 'password' | 'number';
    name: string;
    value: string;
    disabled?: boolean;
    stacked?: boolean;
    valid: boolean;
    rules: string[];
}

@Component({
    selector: 'input-text',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.css'],
    imports: [InputLabel, FormsModule, CommonModule]
})
export class InputTextComponent implements OnInit {
    @Input() inputModel!: InputTextModel;
    @Output() valueChangedAndValid = new EventEmitter<{ valid: boolean }>();

    required: boolean = false;
    errorMessage: string = '';
    ngOnInit() {
        if (this.inputModel.rules.length > 0) {
            this.required = true;
        }
        else {
            this.inputModel.valid = true;
        }
    }

    validateInput() {
        let isValid = true;
        let errorMessage = '';
        const currentValue = this.inputModel.value.trim();
        for (const rule of this.inputModel.rules) {
            switch (rule) {
                case 'Not Empty':
                    if (!currentValue) {
                        isValid = false;
                        errorMessage = 'This field is required.';
                    }
                    break;

                case 'Email':
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(currentValue)) {
                        isValid = false;
                        errorMessage = 'Please enter a valid email address.';
                    }
                    break;
            }

            if (!isValid) {
                break; // exit loop on first failure
            }
        }

        this.inputModel.valid = isValid;
        if (this.inputModel.valid) {
            this.errorMessage = '';
            this.valueChangedAndValid.emit({
                valid: this.inputModel.valid
            });
        }
        else {
            this.errorMessage = errorMessage;
        }
    }
}