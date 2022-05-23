import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperSearch = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 10px;
  padding-right: 5px;
  padding: 5px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const InputArea = styled.TextInput`
  height: 40px;

  
  border-radius: 10px;

  padding: 10px;
  margin-right: 10px;
`;

export const SearchButton = styled.TouchableOpacity``;

export const VoiceArea = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.text};

  align-items: center;
  justify-content: center;

  border-radius: 10px;
`;