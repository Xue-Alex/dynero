import React, {useState} from 'react';
import styled from 'styled-components/native';
import SubHeader from '../primitives/Subheader';
import Label from '../primitives/Label';
import Button from '../primitives/Button';
import {Navigation} from 'react-native-navigation';

interface ICustomBillInputProps {
  onSave?: (value: string) => void;
  onCancel?: () => Promise<any>;
  parentComponentId?: string;
}

const CustomBillInput: React.FC<ICustomBillInputProps> = ({
  onSave,
  onCancel,
  parentComponentId,
}) => {
  const [value, setValue] = useState('');

  function end() {
    onCancel &&
      onCancel().then(() => {
        Navigation.dismissOverlay(parentComponentId || '');
      });
  }

  return (
    <Container>
      <HeaderView>
        <Button
          title="Save"
          onPress={() => {
            onSave && onSave(value);
            end();
          }}
        />
        <CancelButton title="Cancel" variant="secondary" onPress={end} />
      </HeaderView>
      <SubHeader light={false}>Enter Dollar Amount</SubHeader>
      <FlexView>
        <CustomLabel>$</CustomLabel>
        <CustomInput
          placeholder="Amount"
          autoFocus={true}
          keyboardType="decimal-pad"
          value={value}
          onChangeText={txt => setValue(txt)}
        />
      </FlexView>
    </Container>
  );
};

export default CustomBillInput;

const Container = styled.View`
  padding: 20px;
`;

const HeaderView = styled.View`
  flex-direction: row-reverse;
  align-items: center;
  margin: 0 0 20px;
`;

const CancelButton = styled(Button)`
  margin: 0 10px 0 0;
`;

const CustomLabel = styled(Label)`
  font-size: 24px;
`;

const CustomInput = styled.TextInput`
  background-color: ${props => props.theme.colors.light};
  font-family: ${props => props.theme.fonts.main};
  font-size: 16px;
  padding: 10px 10px;
  margin: 0 0 0 5px;
  width: 100%;
`;

const FlexView = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 0 300px;
`;
