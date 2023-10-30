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

export default function ChangeName(props) {
  const { user, upDateUser } = useAuth();
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required(true),
      lastname: Yup.string().required(true)
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        await userController.putMe(user.id, formData);
        upDateUser('firstname', formData.firstname);
        upDateUser('lastname', formData.lastname);
        navigation.goBack();
        Toast.show('Datos actualizados con exito.', {
          position: Toast.positions.CENTER,
        });
      } catch (error) {
        console.log(error);
        Toast.show('No se pudieron actualizar los datos.', {
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
          label="Nombre"
          style={globalStyles.form.input}
          autoCapitalize="none"
          onChangeText={(text) => formik.setFieldValue("firstname", text)}
          value={formik.values.firstname}
          error={formik.errors.firstname}
        />
        <TextInput
          label="Apellidos"
          style={globalStyles.form.input}
          autoCapitalize="none"
          onChangeText={(text) => formik.setFieldValue("lastname", text)}
          value={formik.values.lastname}
          error={formik.errors.lastname}
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
