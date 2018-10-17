import * as React from 'react';
import { RadioButtonProps } from './radioButton';
import { FunctionalRadioButton } from './FunctionalRadioButton';
import './styles/radioGroup.css';

export class RadioGroup extends React.Component<RadioGroupProps, RadioGroupState> {
  constructor(props: RadioGroupProps) {
    super(props);
    this.state = {
      choosedItem: this.props.value
    };
  }

  public render() {
    return (<div className="radio-button-group">
      {React.Children.map(this.props.children, (child: React.ReactElement<RadioButtonProps>) => {
        return <FunctionalRadioButton
          children={child.props.children}
          value={child.props.value}
          choosed={this.isChoosed(child.props.value)}
          onClick={() => this.onChange(child.props.value)} />;
      })}
    </div>);
  }

  private onChange(value: string) {
    this.setState({
      choosedItem: value
    });
    this.props.onChanged(value);
  }

  private isChoosed(value: string) {
    return this.state.choosedItem === value;
  }
}

interface RadioGroupState {
  choosedItem: string;
}

interface RadioGroupProps extends React.Props<RadioGroupProps> {
  // default choosed value
  value: string;
  // event handler
  onChanged(value: string): void;
}
