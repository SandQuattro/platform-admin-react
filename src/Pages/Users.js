import React from 'react';

import {
    ArrayField,
    BooleanField,
    Create,
    Datagrid,
    DateField,
    DateInput,
    Edit,
    EditButton,
    Filter,
    List,
    ReferenceManyField,
    required,
    SimpleForm,
    TextField,
    TextInput
} from 'react-admin';

import RichTextInput from 'ra-input-rich-text';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput source="title" defaultValue="Hello, World!" />
    </Filter>
);

export const UserList = (props) => (

    <List {...props} filters={<UserFilter />}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="login" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <ArrayField source="roles">
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <BooleanField source="admin" />
            </Datagrid>
        </ArrayField>
        </Datagrid>
    </List>
)

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title"/>
            <TextInput source="teaser" options={{multiLine: true}}/>
            <RichTextInput source="body"/>
            <DateInput label="Publication date" source="published_at" defaultValue={new Date()}/>
        </SimpleForm>
    </Create>
);

export const UserEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id"/>
            <TextInput source="title" validate={required()}/>
            <TextInput multiline source="teaser" validate={required()}/>
            <RichTextInput source="body" validate={required()}/>
            <DateInput label="Publication date" source="published_at"/>
            <ReferenceManyField label="Comments" reference="comments" target="post_id">
                <Datagrid>
                    <TextField source="body"/>
                    <DateField source="created_at"/>
                    <EditButton/>
                </Datagrid>
            </ReferenceManyField>
        </SimpleForm>
    </Edit>
);