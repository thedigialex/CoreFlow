export interface InputTextModel {
    type: 'text' | 'email' | 'password' | 'number';
    label: string;
    name: string;
    value: string;
    required?: boolean;
    disabled?: boolean;
}