import * as React from 'react';
import './styles/radioButton.css';
export declare class FunctionalRadioButton extends React.Component<FunctionalRadioButtonProps> {
    render(): JSX.Element;
    private getButtonClass;
}
interface FunctionalRadioButtonProps {
    value: string;
    choosed: boolean;
    onClick(value: string): void;
}
export {};
