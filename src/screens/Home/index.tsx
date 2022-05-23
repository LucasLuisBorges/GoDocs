import React from "react";
import { ScrollView } from "react-native";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { HeaderSchedule } from "../../components/HeaderSchedule";
import { InputSearch } from "../../InputSearch";

import * as S from "./styles";

export function Home() {
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lectus est, hendrerit eu blandit molestie, gravida ullamcorper urna. Morbi imperdiet aliquet eros elementum ullamcorper. Sed mattis venenatis justo, eget hendrerit felis dapibus cursus. Etiam felis justo, aliquet eget maximus sed, mollis eu lorem.";
  const desc2 = "Meu nome é lucas tenho 21 anos e sou front end";

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <S.Container>
        <HeaderSchedule title="Schedule a Visit" />
        <S.Title>{`Choose the specialty\n you need`}</S.Title>
        <S.WrapperInput>
          <InputSearch placeholder="More than 64 specializations" />
        </S.WrapperInput>

        <Card
          title="Therapist"
          count="12 Doctors"
          description={desc}
          primary={true}
        />

        <Card
          title="General Practice"
          count="12 Doctors"
          description={desc2}
          primary={false}
        />

        <Card
          title="Pediatrician"
          count="12 Doctors"
          description={desc}
          primary={false}
        />

        <S.WrapperFooterLabel>You've seen them all.</S.WrapperFooterLabel>

        <Button title="Continue" primary={true} />
        <Button title="Cancel" primary={false} />
        <S.Back>Go back</S.Back>
      </S.Container>
    </ScrollView>
  );
}
