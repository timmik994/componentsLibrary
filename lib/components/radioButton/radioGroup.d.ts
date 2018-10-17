import * as React from 'react';
import './styles/radioGroup.css';
export declare class RadioGroup extends React.Component<RadioGroupProps, RadioGroupState> {
    constructor(props: RadioGroupProps);
    render(): JSX.Element;
    private onChange;
    private isChoosed;
}
interface RadioGroupState {
    choosedItem: string;
}
interface RadioGroupProps extends React.Props<RadioGroupProps> {
    value: string;
    onChanged(value: string): void;
}
export {};
