import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ButtonModel {
  label: string;
  enabled: boolean;
  isLoading: boolean;
  successful?: boolean; 
  error?: boolean;
  response?: string;
  onClick: () => void;
}
@Component({
    selector: 'input-button',
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})

export class InputButtonComponent {
    @Input() model!: ButtonModel;

    handleClick() {
        if (this.model.enabled && !this.model.isLoading) {
            this.model.isLoading = true;
            this.model.onClick?.();
        }
    }
}
