import * as React from 'react';
import './styles/radioButton.css';

export class FunctionalRadioButton extends React.Component<FunctionalRadioButtonProps> {
  public render() {
    return (
      <button className={this.getButtonClass()} disabled={this.props.choosed} onClick={() => this.props.onClick(this.props.value)} >
        {this.props.children}
      </button>
    );
  }

  private getButtonClass(): string {
    if (this.props.choosed) {
      return 'button disabled';
    } else {
      return 'button';
    }
  }
}

interface FunctionalRadioButtonProps {
  value: string;
  choosed: boolean;
  onClick(value: string): void;
}
