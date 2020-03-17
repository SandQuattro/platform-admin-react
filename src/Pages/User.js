import React, {useState, useEffect} from 'react';

import {
    Create,
    Edit,
    SimpleForm,
    TextInput,
    List,
    DateInput,
    ReferenceManyField,
    Datagrid,
    TextField,
    DateField,
    EditButton
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import {required} from 'react-admin';
import {useDataProvider, Loading, Error} from 'react-admin';

export const UserList = (props) => {
    const dataProvider = useDataProvider();
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        dataProvider.getList('users/all')
            .then(({data}) => {
                setUser(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
    }, []);

    if (loading) return <Loading/>;
    if (error) return <Error/>;
    if (!user) return null;

    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="title"/>
                <TextField source="body"/>
                <EditButton/>
            </Datagrid>
        </List>
    )
};

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