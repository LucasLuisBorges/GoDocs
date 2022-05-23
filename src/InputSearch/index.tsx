import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

import * as S from './styles';

interface IProps {
  placeholder: string;
}

export function InputSearch({ placeholder } : IProps){
  return (
    <S.Container>
      <S.WrapperSearch>
        <S.InputArea
          placeholder={placeholder}
        />
        <S.SearchButton>
          <AntDesign name="search1" size={24} color="black" />
        </S.SearchButton>
      </S.WrapperSearch>
      <S.VoiceArea>
        <MaterialIcons name="keyboard-voice" size={24} color="#fff" />
      </S.VoiceArea>
    </S.Container>
  );
}