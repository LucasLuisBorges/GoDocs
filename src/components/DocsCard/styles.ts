import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface IProps {
  selected?: string;
  colorText?: string;
}

export const Container = styled.TouchableOpacity<IProps>`
  width: 140px;
  height: 140px;

  background-color: ${({ selected }) => selected};

  border-radius: 25px;

  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  height: 70px;
  width: 70px;

  border-radius: 15px;
`;

export const Name = styled.Text<IProps>`
  font-size: ${RFValue(14)}px;
  color: ${({ colorText }) => colorText};
  font-weight: 700;
`;

export const WrapperStars = styled.View`
  display: flex;
  flex-direction: row;

  align-items: center;
`;

export const WrapperCount = styled.View`
  display: flex;
  flex-direction: row;

  align-items: center;  

  background-color: ${({ theme }) => theme.colors.text};
  padding: 2px 5px;

  border-radius: 7px;

  margin-right: 5px;
`;

export const StarsCount = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-weight: 400;
`;

export const Label = styled.Text<IProps>`
  font-size: ${RFValue(14)}px;
  color: ${({ colorText }) => colorText};
  font-weight: 400;
`;