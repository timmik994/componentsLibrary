import * as React from 'react';
import { RadioGroup } from './radioGroup';
import { RadioButton } from './radioButton';

class App extends React.Component {
  public render() {
    return (
      <RadioGroup value="Test" onChanged={(value: string) => alert(value)} >
        <RadioButton value="test">test</RadioButton>
        <RadioButton value="test1">test1</RadioButton>
      </RadioGroup>
    );
  }
}

export default App;
