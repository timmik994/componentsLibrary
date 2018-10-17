packet with react components.
Now included RadioButton.
To install run: npm i react-components-library-typescript

Example:
        <RadioGroup value="test" onChanged={(value: string) => alert(value)} >
          <RadioButton value="test" >test</RadioButton>
          <RadioButton value="test1">Test 1</RadioButton>
          <RadioButton value="other">Other value</RadioButton>
        </RadioGroup>
