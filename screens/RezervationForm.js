import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Container, Content, Form, Item, Input, Label } from "native-base";

const RezervationForm = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <Container>
        <Content>
          <Form>
            <Item inlineLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    container:{

    }
})

export default RezervationForm;
