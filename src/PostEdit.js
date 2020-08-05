import * as React from "react";
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput
} from 'react-admin';


const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ' '}</span>
};

export const PostEdit = props => (
  // <Edit {...props}>
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        {/* <SelectInput optionText="id" /> */}
        <SelectInput optionText="name" />
      </ReferenceInput>
      {/* <TextInput source="id" /> */}
      <TextInput source="title" />
      {/* <TextInput source="body" /> */}
      <TextInput multiline source="body" />
    </SimpleForm>
</Edit>
);
