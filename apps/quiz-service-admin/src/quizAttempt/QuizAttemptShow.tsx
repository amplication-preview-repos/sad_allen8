import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { QUIZ_TITLE_FIELD } from "../quiz/QuizTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const QuizAttemptShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="answers" source="answers" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="quiz" source="quiz.id" reference="Quiz">
          <TextField source={QUIZ_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="score" source="score" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
