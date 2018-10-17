interface RadioButtonProps {
  // Value passed to onChange.
  value: string;
  children: React.ReactChild;
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


declare class RadioButton extends React.Component<RadioButtonProps, {}> { }

declare class RadioGroup extends React.Component<RadioGroupProps, RadioGroupState> { }