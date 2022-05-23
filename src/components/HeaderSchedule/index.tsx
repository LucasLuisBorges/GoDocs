import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import * as S from './styles';

interface IProps {
  title: string;
}

export function HeaderSchedule({ title } : IProps){
  return (
    <S.Container>
      <S.WrapperIcon>
        <AntDesign name="left" size={16} color="black" />
      </S.WrapperIcon>
      <S.HeaderTitle>
        {title}
      </S.HeaderTitle>
      <S.WrapperPage>
        
      </S.WrapperPage>
    </S.Container>
  );
}