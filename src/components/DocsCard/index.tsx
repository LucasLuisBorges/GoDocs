import React, { useState } from 'react';

import * as S from './styles';
import { AntDesign } from '@expo/vector-icons';
import theme from '../../global/styles/theme';

interface IProps {
  name: string;
  type: string;
  stars: string
}

export function DocsCard({ name, type, stars } : IProps){
  const image = {uri: 'https://medicina.ucpel.edu.br/wp-content/uploads/2020/07/apacucpel_ucpel_image_319-1024x960.jpeg'}
  const [selected, isSelected] = useState(false)

  function handleSelected() {
    isSelected(!selected)
  }
  return (
    <S.Container
      onPress={handleSelected}
      selected={
        selected ? theme.colors.blue_text_light : theme.colors.shape
      }
    >
      <S.Image source={image}/>
      <S.Name
        colorText={
          selected ? theme.colors.shape : theme.colors.blue_text
        }
      >{name}</S.Name>
      <S.WrapperStars>
        <S.WrapperCount>
          <AntDesign name="star" size={12} color="#FFF" />
          <S.StarsCount>{stars}</S.StarsCount>
        </S.WrapperCount>
        <S.Label
          colorText={
            selected ? theme.colors.shape : theme.colors.text
          }
        >{type}</S.Label>
      </S.WrapperStars>
    </S.Container>
  );
}