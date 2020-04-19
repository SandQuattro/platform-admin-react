import React from 'react';
import {
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

const EventFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn/>
        <TextInput source="title" defaultValue="Hello, World!"/>
    </Filter>
);

export const EventList = props => (
    <div className="ui raised very padded text container segment">
        <h2 className="ui header">Dogs Roles with Humans</h2>
        <List {...props} filters={<EventFilter />}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="descriptionShort" />
                <TextField source="descriptionLong" />
                <DateField source="dateFrom" />
                <DateField source="dateTo" />
                <TextField source="logoUrl" />
                <TextField source="eventMaterials" />
            </Datagrid>
        </List>
    </div>
);

export const EventEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id"/>
            <TextInput source="title" validate={required()}/>
            <TextInput multiline source="teaser" validate={required()}/>
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