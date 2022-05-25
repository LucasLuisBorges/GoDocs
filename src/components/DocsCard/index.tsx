import React, { useState } from "react";

import * as S from "./styles";
import { AntDesign } from "@expo/vector-icons";

interface IProps {
  name: string;
  type: string;
  stars: string;
  validateBack: string;
  validateName: string;
  validateLabel: string;
  execute: () => void;
}

export function DocsCard({
  name,
  type,
  stars,
  validateBack,
  validateName,
  validateLabel,
  execute,
}: IProps) {
  const image = {
    uri: "https://medicina.ucpel.edu.br/wp-content/uploads/2020/07/apacucpel_ucpel_image_319-1024x960.jpeg",
  };
  const [selected, isSelected] = useState(false);

  return (
    <S.Container onPress={execute} selected={validateBack}>
      <S.Image source={image} />
      <S.Name colorText={validateName}>{name}</S.Name>
      <S.WrapperStars>
        <S.WrapperCount>
          <AntDesign name="star" size={12} color="#FFF" />
          <S.StarsCount>{stars}</S.StarsCount>
        </S.WrapperCount>
        <S.Label colorText={validateLabel}>{type}</S.Label>
      </S.WrapperStars>
    </S.Container>
  );
}
