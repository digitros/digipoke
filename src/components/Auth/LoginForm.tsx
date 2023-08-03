import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { user, userDetails } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";

type Inputs = {
  userName: string;
  password: string;
};

export default function LoginForm() {
  const [error, setError] = useState("");
  const { auth, login } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { userName, password } = data;

    if (userName === user.userName && password === user.password) {
      login({ userName, ...userDetails });
      setError("");
    } else {
      setError("Invalid username or password");
      // ToastAndroid.show("Invalid username or password", ToastAndroid.SHORT);
      // ActionSheetIOS.showActionSheetWithOptions(
      //   {
      //     title: "Invalid username or password",
      //     options: ["OK"],
      //     cancelButtonIndex: 0,
      //   },
      //   (buttonIndex) => {
      //     console.log("OK");
      //   }
      // );
    }
  };

  return (
    <View>
      <Text style={styles.title}>Login</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              placeholder="Name"
              style={styles.input}
              onBlur={onBlur}
              autoCapitalize="none"
              onChangeText={onChange}
              value={value}
            />
            {errors.userName && <Text>This is required.</Text>}
          </>
        )}
        name="userName"
        rules={{ required: true }}
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              placeholder="Password"
              style={styles.input}
              autoCapitalize="none"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.password && <Text>This is required.</Text>}
          </>
        )}
        name="password"
        rules={{
          required: true,
          minLength: 8,
          maxLength: 20,
        }}
      />
      <Button title="Enter" onPress={handleSubmit(onSubmit)} />
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: "center",
    color: "red",
    marginTop: 10,
  },
});
