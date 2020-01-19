import React from 'react';
import styled from 'styled-components/native';
import Label from '../primitives/Label';
import Button from '../primitives/Button';
import BigText from '../primitives/BigText';
import Bill, {BillType} from './Bill';
import Coin, {CoinType} from './Coin';

interface ITotalViewProps {
  change: number[];
  remove?: (index: number) => void;
  onNext?: () => void;
}

const TotalView: React.FC<ITotalViewProps> = ({change, remove, onNext}) => {
  return (
    <Container>
      <HeaderView>
        <Label>Total</Label>
        <Button title="Next" onPress={onNext} />
      </HeaderView>
      <TotalValue>
        ${change.reduce((acc, next) => acc + next, 0).toFixed(2)}
      </TotalValue>

      <ChangeView>
        {change.map((value, i) =>
          value > 2 ? (
            <Bill
              key={i}
              type={value as BillType}
              minus
              onPress={() => remove && remove(i)}
            />
          ) : (
            <Coin
              key={i}
              type={(value < 1 ? value * 100 : value) as CoinType}
              minus
              onPress={() => remove && remove(i)}
            />
          ),
        )}
      </ChangeView>
    </Container>
  );
};

export default TotalView;

const Container = styled.View`
  padding: 20px 15px;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.white};
  shadow-color: black;
  shadow-offset: 0 2px;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
`;

const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TotalValue = styled(BigText)`
    color: ${props => props.theme.colors.primary}
    font-weight: ${props => props.theme.fontWeights.regular}
`;

const ChangeView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 20px 0 0;
`;
