import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { HeaderSchedule } from "../../components/HeaderSchedule";
import { InputSearch } from "../../components/InputSearch";

import * as S from "./styles";

export function Home() {
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lectus est, hendrerit eu blandit molestie, gravida ullamcorper urna. Morbi imperdiet aliquet eros elementum ullamcorper. Sed mattis venenatis justo, eget hendrerit felis dapibus cursus. Etiam felis justo, aliquet eget maximus sed, mollis eu lorem.";

  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <S.Container>
        <S.WrapperHeader>
          <HeaderSchedule
            title="Schedule a Visit"
            actualPage="5"
            previousPage="6"
            />
        </S.WrapperHeader>

        <S.Title>{`Choose the specialty\n you need`}</S.Title>
        <S.WrapperInput>
          <InputSearch placeholder="More than 64 specializations" />
        </S.WrapperInput>

        <Card
          title="Therapist"
          count="2 Doctors"
          description={desc}
          primary={true}
        />
        <Card
          title="General Practice"
          count="12 Doctors"
          description={desc}
          primary={false}
        />
        <Card
          title="Pediatrician"
          count="12 Doctors"
          description={desc}
          primary={false}
        />

        <S.WrapperFooterLabel>You've seen them all.</S.WrapperFooterLabel>

        <Button
          title="Continue"
          primary={true}
          OnPress={() => navigation.navigate("Scheduled")}
        />
        <Button title="Cancel" primary={false} OnPress={() => {}} />
        <S.Back>Go back</S.Back>
      </S.Container>
    </ScrollView>
  );
}
