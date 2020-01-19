import React from 'react';
import styled from 'styled-components/native';
import Label from '../primitives/Label';

interface ITotalViewProps {}

const TotalView: React.FC<ITotalViewProps> = () => {
  return (
    <Container>
      <Label>Total</Label>
    </Container>
  );
};

export default TotalView;

const Container = styled.View`
  background-color: ${props => props.theme.colors.white};
`;
