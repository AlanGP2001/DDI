import { View } from 'react-native'
import React from 'react'
import { TextInput, Button } from 'react-native-paper';
import { globalStyles } from '../../../../styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authApi } from '../../../api/auth';

export default function Register() {
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            repeatPassword: '',
        },
        validationSchema: ({
            email: Yup.string().email(true).required(true),
            username: Yup.string().required(true),
            password: Yup.string().required(true),
            repeatPassword: Yup.string().required(true).oneOf([Yup.ref('password')], true),
        }),
        validateOnChange: false,
        onSubmit: async (formData) => {
            console.log('====================================');
            console.log('Formulario enviado: ',formData);
            console.log('====================================');

            const {email, username, password } = formData;
            try {
                await authApi.register(email, username, password)
                showLogin();
            } catch (error) {
                console.log(error);
            }
        }
    })

    return (
        <View>
            <TextInput
                label="Correo Electrónico"
                style={globalStyles.form.input}
                autoCapitalize='none'
                onChangeText={(text) => formik.setFieldValue('email', text)}
                value={formik.values.email}
                error={formik.errors.email}
            />
            <TextInput
                label="Nombre de usuario"
                style={globalStyles.form.input}
                autoCapitalize='none'
                onChangeText={(text) => formik.setFieldValue('username', text)}
                value={formik.values.username}
                error={formik.errors.username}
            />
            <TextInput
                label="Contraseña"
                style={globalStyles.form.input}
                autoCapitalize='none'
                secureTextEntry
                onChangeText={(text) => formik.setFieldValue('password', text)}
                value={formik.values.password}
                error={formik.errors.password}
            />
            <TextInput
                label="Repita la contraseña"
                style={globalStyles.form.input}
                autoCapitalize='none'
                secureTextEntry
                onChangeText={(text) => formik.setFieldValue('repeatPassword', text)}
                value={formik.values.repeatPassword}
                error={formik.errors.repeatPassword}
            />

            <Button 
                mode="contained" 
                style={globalStyles.form.buttonSubmit}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
            >
                Registrarse
            </Button>
            <Button mode="text" style={globalStyles.form.buttonText}> Iniciar sesión </Button>
        </View>
    )
}