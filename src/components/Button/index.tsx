import React from "react";
import theme from "../../global/styles/theme";

import * as S from "./styles";

interface IProps {
  primary: boolean;
  title: string;
  OnPress: () => void;
}

export function Button({ primary, title, OnPress }: IProps) {
  return (
    <S.Container
      onPress={OnPress}
      color={primary ? theme.colors.blue_text : theme.colors.shape}
      border={primary ? theme.colors.shape : theme.colors.text}
    >
      <S.TextButton
        color={primary ? theme.colors.shape : theme.colors.text}
        border={primary ? theme.colors.shape : theme.colors.text}
      >
        {title}
      </S.TextButton>
    </S.Container>
  );
}
