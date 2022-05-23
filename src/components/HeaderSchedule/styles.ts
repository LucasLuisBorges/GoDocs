import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperIcon = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  background-color: ${({ theme }) => theme.colors.background_button};
  
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  `;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`;

export const WrapperPage = styled.View`
  width: 30px;
  height: 10px;
  background-color: red;
`;