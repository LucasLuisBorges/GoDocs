import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import * as S from "./styles";
import theme from "../../global/styles/theme";

interface IProps {
  title: string;
  count: string;
  description: string;
  primary: boolean;
}

export function Card({ title, count, description, primary }: IProps) {
  const [openDescription, setOpenDescription] = useState(false);

  function handleOpenOrCloseDescription() {
    setOpenDescription(!openDescription);
  }
  return (
    <S.Container>
      <S.WrapperCard
        color={primary ? theme.colors.blue_text : theme.colors.shape}
      >
        <S.WrapperArea>
          <S.WrapperIcon
            color={
              primary ? theme.colors.background_blue : theme.colors.text
            }
          >
            <Ionicons name="chatbubbles-outline" size={24} color="black" />
          </S.WrapperIcon>
          <S.WrapperInfo>
            <S.Title color={primary ? theme.colors.shape : theme.colors.text}>
              {title}
            </S.Title>
            <S.TitleCount
              color={primary ? theme.colors.shape : theme.colors.blue_text}
            >
              {count}
            </S.TitleCount>
          </S.WrapperInfo>
        </S.WrapperArea>

        <S.WrapperDescription
          color={
            primary
              ? theme.colors.blue_text_light
              : theme.colors.background_blue
          }
          onPress={handleOpenOrCloseDescription}
        >
          <S.DescriptionTitle
            color={primary ? theme.colors.shape : theme.colors.blue_text}
          >
            Description
          </S.DescriptionTitle>
          {openDescription ? (
            <AntDesign
              name="up"
              size={12}
              color={primary ? "#fff" : "#009aef"}
            />
          ) : (
            <AntDesign
              name="down"
              size={12}
              color={primary ? "#fff" : "#009aef"}
            />
          )}
        </S.WrapperDescription>
      </S.WrapperCard>
      {openDescription && (
        <S.DescriptionArea>
          <S.WrapperDescriptionText>
            <S.DescriptionText>{description}</S.DescriptionText>
          </S.WrapperDescriptionText>
        </S.DescriptionArea>
      )}
    </S.Container>
  );
}
