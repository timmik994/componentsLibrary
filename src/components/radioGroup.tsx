import * as React from 'react';
import { RadioButtonProps } from './radioButton';

export class RadioGroup extends React.Component<RadioGroupProps, RadioGroupState> {
  constructor(props: RadioGroupProps) {
    super(props);
    this.state = {
      choosedItem: this.props.value
    };
  }

  public render() {
    // tslint:disable-next-line:no-console
    console.log(this.props.children);
    React.Children.map(this.props.children, (child: React.ReactElement<RadioButtonProps>, i) => {
      // tslint:disable-next-line:no-console
      console.log(child);
    });
    return (<div className="">
      {this.props.children}
    </div>);
  }
}

interface RadioGroupState {
  choosedItem: string;
}

interface RadioGroupProps extends React.Props<RadioGroupProps> {
  value: string;
  onChanged(value: string): void;
}
