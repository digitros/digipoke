import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import React from "react";
import useAuth from "../../hooks/useAuth";

export default function UserData() {
  const { auth, logout } = useAuth();
  const { userName, firstName, lastName, email } = auth;
  const name = `${firstName} ${lastName}`;
  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Name" text={name} />
        <ItemMenu title="Username" text={auth.userName} />
        <ItemMenu title="Email" text={email} />
        <ItemMenu title="Favourites" text={0} />
      </View>
      <Pressable style={styles.btnLogout} onPress={logout}>
        <Text style={styles.btnText}>Logout</Text>
      </Pressable>
    </View>
  );
}

function ItemMenu(props) {
  const { title, text } = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  btnLogout: {
    backgroundColor: "#b82e2e",
    width: "100%",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    paddingVertical: 10,
  },
});
