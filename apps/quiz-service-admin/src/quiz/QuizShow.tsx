import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { QUIZ_TITLE_FIELD } from "./QuizTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const QuizShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Question"
          target="quizId"
          label="Questions"
        >
          <Datagrid rowClick="show">
            <TextField label="correctAnswers" source="correctAnswers" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="options" source="options" />
            <ReferenceField label="quiz" source="quiz.id" reference="Quiz">
              <TextField source={QUIZ_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="QuizAttempt"
          target="quizId"
          label="QuizAttempts"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
