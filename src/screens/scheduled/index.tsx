import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { ScrollView } from "react-native";
import { Button } from "../../components/Button";

import { Card } from "../../components/Card";
import { DocsCard } from "../../components/DocsCard";
import { HeaderSchedule } from "../../components/HeaderSchedule";
import { InputSearch } from "../../components/InputSearch";
import theme from "../../global/styles/theme";

import * as S from "./styles";

export function Scheduled() {
  const [doctorOne, setDoctorOne] = useState(false);
  const [doctorTwo, setDoctorTwo] = useState(false);
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lectus est, hendrerit eu blandit molestie, gravida ullamcorper urna. Morbi imperdiet aliquet eros elementum ullamcorper. Sed mattis venenatis justo, eget hendrerit felis dapibus cursus. Etiam felis justo, aliquet eget maximus sed, mollis eu lorem.";
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  enum EButtonActive {
    one = "one",
    two = "two",
  }
  const [buttonActive, setButtonActive] = useState("one");

  let handleChangeButtonActive = useCallback((button: EButtonActive) => {
    setButtonActive(button);
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <S.Container>
        <S.WrapperHeader>
          <HeaderSchedule
            title="Schedule a Visit"
            actualPage="6"
            previousPage="5"
          />
        </S.WrapperHeader>
        <S.Title>{`Now, chose your physician`}</S.Title>
        <S.WrapperInput>
          <InputSearch placeholder="More than 64 specializations" />
        </S.WrapperInput>

        <Card
          title="Therapist"
          count="2 Doctors"
          description={desc}
          primary={false}
        />

        <S.WrapperDoctors>
          <DocsCard
            name="Manuela Silva"
            stars="8.9"
            type="Therapist"
            execute={() => handleChangeButtonActive(EButtonActive.one)}
            validateBack={
              buttonActive === "one"
                ? theme.colors.blue_text_light
                : theme.colors.shape
            }
            validateName={
              buttonActive === "one"
                ? theme.colors.shape
                : theme.colors.blue_text
            }
            validateLabel={
              buttonActive === "one"
                ? theme.colors.shape
                : theme.colors.text
            }
          />

          <DocsCard
            name="Manuela Archeman"
            stars="8.9"
            type="Therapist"
            execute={() => handleChangeButtonActive(EButtonActive.two)}
            validateBack={
              buttonActive === "two"
                ? theme.colors.blue_text_light
                : theme.colors.shape
            }
            validateName={
              buttonActive === "two"
                ? theme.colors.shape
                : theme.colors.blue_text
            }
            validateLabel={
              buttonActive === "two" ? theme.colors.shape : theme.colors.text
            }
          />
        </S.WrapperDoctors>

        <S.WrapperFooterLabel>You've seen them all.</S.WrapperFooterLabel>

        <Button title="Continue" primary={true} OnPress={() => {}} />
        <Button title="Cancel" primary={false} OnPress={handleBack} />
        <S.Back>
          <S.BackText onPress={handleBack}>Go back</S.BackText>
        </S.Back>
      </S.Container>
    </ScrollView>
  );
}
