import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {AppForm, AppFormField, AppFormPicker, SubmitButton} from '../component/forms';
import AppScreen from "../component/AppScreen";
import CategoryPickerItem from '../component/CategoryPickerItem';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
});

const categories = [
    {label: "Furniture", value: 1, backgroundColor: "red", icon: 'table-furniture'},
    {label: "Clothing", value: 2, backgroundColor: "orange", icon: 'shoe-heel'},
    {label: "Books", value: 3, backgroundColor: "purple", icon: 'bookshelf'},
    {label: "Games", value: 3, backgroundColor: "olive", icon: 'gamepad-variant'},
    {label: "Cameras", value: 3, backgroundColor: "navy", icon: 'camera'},
    {label: "Cars", value: 3, backgroundColor: "coral", icon: 'car'},
];

function ListingEditScreen(props) {
    return (
        <AppScreen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField maxLength={255} name="title" placeholder="Title"/>
                <AppFormField keyboardType="numeric" maxLength={8} name="price" placeholder="Price" width={120}/>
                <AppFormPicker items={categories} name="category" numberOfColumns={3} PickerItemComponent={CategoryPickerItem} placeholder="Category" width="50%" />
                <AppFormField maxLength={255} multiline name="description" numberOfLines={3} placeholder="Description" />
                <SubmitButton title="Post"/>
            </AppForm>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});

export default ListingEditScreen;