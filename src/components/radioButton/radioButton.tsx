import * as React from 'react';

export class RadioButton extends React.Component<RadioButtonProps> {
  public render() {
    return (
      <button>
        {this.props.children}
      </button>
    );
  }
}

export interface RadioButtonProps {
  // Value passed to onChange.
  value: string;
  children: React.ReactChild;
}
