import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface IProps {
  color: string;
  border: string;
}

export const Container = styled.TouchableOpacity<IProps>`
  width: 100%;
  height: 60px;

  border-radius: 15px;

  background-color: ${({ color }) => color};

  margin-bottom: 15px;

  align-items: center;
  justify-content: center;
  border: 1px solid ${({ border }) => border};
`;

export const TextButton = styled.Text<IProps>`
  font-size: ${RFValue(16)}px;
  font-weight: 600;
  color: ${({ color }) => color};
`;