import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface IProps {
  color: string;
}

export const Container = styled.View`
  margin-bottom: 15px;
`;

export const WrapperCard = styled.View<IProps>`
  width: 100%;
  height: 64px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: ${({ color }) => color };

  padding: 15px;

  z-index: 1000;

  border-radius: 15px;
`;

export const WrapperArea = styled.View`
  display: flex;
  flex-direction: row;
`;

export const WrapperIcon = styled.View<IProps>`
  height: 36px;
  width: 36px;

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 10px;

  border: 1px solid ${({ color }) => color};

  align-items: center;
  
  justify-content: center;
`;

export const WrapperInfo = styled.View`
  margin-left: 10px;
`;

export const Title = styled.Text<IProps>`
  font-size: ${RFValue(14)}px;
  color: ${({ color }) => color};
  font-weight: 600;
`;

export const TitleCount = styled.Text<IProps>`
  font-size: ${RFValue(12)}px;
  color: ${({ color }) => color};
  font-weight: 400;
`;

export const WrapperDescription = styled.TouchableOpacity<IProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: ${({ color }) => color};

  padding: 8px 12px;
  border-radius: 10px;
`;

export const DescriptionTitle = styled.Text<IProps>`
  font-size: ${RFValue(12)}px;
  color: ${({ color }) => color};
  font-weight: 400;

  margin-right: 5px;
`;

export const DescriptionArea = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};

  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  margin-top: -10px;
  padding: 15px 10px 10px 10px;
  margin-bottom: 10px;
`;

export const WrapperDescriptionText = styled.View`
  background-color: ${({ theme }) => theme.colors.background_blue};
  padding: 10px;
  border-radius: 10px;
`;

export const DescriptionText = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.blue_text};
  font-weight: 400;
`;
