import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
  display: flex;
  flex-direction: row;

  align-items: center;
`;

export const DotPrimary = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  z-index: 100;

  background-color: ${({ theme }) => theme.colors.shape};

  align-items: center;
  justify-content: center;
`;

export const DotSecondary = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 20px;

  background-color: ${({ theme }) => theme.colors.shape};
  margin-left: -5px;

  align-items: center;
  justify-content: center;
`;

export const DotPrimaryLabel = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blue_text_light};
`;

export const DotSecondaryLabel = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.background_button};
`;