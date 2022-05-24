import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;

  padding: 25px;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: ${getStatusBarHeight() + 15}px;
`;

export const WrapperHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 25px;
  font-size: ${RFValue(19)}px;
  font-weight: bold;

  margin-bottom: 20px;
`;

export const WrapperInput = styled.View`
  margin-bottom: 25px;
`;

export const WrapperFooterLabel = styled.Text`
  align-self: center;

  margin: 30px 0;

  font-size: ${RFValue(14)}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.background_button};
`;

export const Back = styled.TouchableOpacity`
  
`;

export const BackText = styled.Text`
  text-align: center;
  text-decoration: underline;

  font-size: ${RFValue(14)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.title};
`;

export const WrapperDoctors = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;