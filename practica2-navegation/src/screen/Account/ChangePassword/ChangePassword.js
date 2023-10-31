import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { globalStyles } from "../../../../styles";
import { TextInput, Button } from "react-native-paper";
import Toast from "react-native-root-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { authApi } from "../../../api/auth";
import { useAuth } from "../../../hooks/useAuth";
import { userController } from "../../../api/users";
import { useNavigation } from "@react-navigation/native";

export default function ChangePassword() {

  const { user, upDateUser } = useAuth();
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      password: '',
      repeatPassword: '',
    },
    validationSchema: Yup.object({
      password: Yup.string().required(true),
      repeatPassword: Yup.string().required(true).oneOf([Yup.ref('password')], true)
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        await userController.putMe(user.id, formData);
        upDateUser('password', formData.password);
        navigation.goBack();
        Toast.show('Contraseña actualizada correctamente.', {
          position: Toast.positions.CENTER,
        });
      } catch (error) {
        console.log(error);
        Toast.show('No se pudo actualizar la contraseña.', {
          position: Toast.positions.CENTER,
        });
      }
    },
  });

  return (
    <ImageBackground
      source={require("../../../assets/fondo.png")}
      style={globalStyles.containers.container}
    >
      <View style={styles.imageContainer}>
          <Image source={require("../../../assets/useredit.png")} style={styles.logo} />
        </View>
      <View  style={styles.container}>
      <TextInput
        label="Contraseña"
        style={globalStyles.form.input}
        autoCapitalize="none"
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <TextInput
        label="Repita la contraseña"
        style={globalStyles.form.input}
        autoCapitalize="none"
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        value={formik.values.repeatPassword}
        error={formik.errors.repeatPassword}
      />
        <Button
          mode="contained"
          style={globalStyles.form.buttonSubmit}
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
        >
          Guardar
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
    paddingBottom: 50,
    paddingTop:90,
  },
  logo: {
    width: 200,
    height: 200,
  },
});
