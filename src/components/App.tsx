import * as React from 'react';
import { RadioGroup } from './radioGroup';
import { RadioButton } from './radioButton';

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value: 'test'
    };
  }

  public render() {
    return (
      <div>
        <RadioGroup value="test" onChanged={(value: string) => this.setState({ value: value })}>
          <RadioButton value="test">test</RadioButton>
          <RadioButton value="test1">test 1</RadioButton>
          <RadioButton value="test3">test 3</RadioButton>
          <RadioButton value="test4">test 4</RadioButton>
        </RadioGroup>
        <label>{this.state.value}</label>
      </div>
    );
  }
}

interface AppState {
  value: string;
}

export default App;
