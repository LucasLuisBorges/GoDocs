import React from "react";
import { AntDesign } from "@expo/vector-icons";

import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

interface IProps {
  title: string;
  actualPage: string;
  previousPage: string
}

export function HeaderSchedule({ title, actualPage, previousPage }: IProps) {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <S.Container>
      <S.WrapperIcon onPress={handleBack}>
        <AntDesign name="left" size={16} color="black" />
      </S.WrapperIcon>
      <S.HeaderTitle>{title}</S.HeaderTitle>
      <S.WrapperPage>
        <S.DotPrimary>
          <S.DotPrimaryLabel>{actualPage}</S.DotPrimaryLabel>
        </S.DotPrimary>
        <S.DotSecondary>
          <S.DotSecondaryLabel>{previousPage}</S.DotSecondaryLabel>
        </S.DotSecondary>
      </S.WrapperPage>
    </S.Container>
  );
}
