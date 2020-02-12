import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Alert,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Modal,TouchableOpacity
} from "react-native";
import { useDispatch } from "react-redux";
import * as authAuctions from "../store/actions/auth";

import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  CheckBox,
  Body,
  ListItem
} from "native-base";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [tncAccept, setTncAccept] = useState(false);
  const [capchaNumber, setCapchaNumber] = useState();
  const [viewGDPR, setViewGDPR] = useState(false);

  const dispatch = useDispatch();

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [capchaNumberORG, setCapchaNumberORG] = useState(
    getRandomInt(1000, 9999)
  );

  const singupHandler = async () => {
    if (!tncAccept) {
      Alert.alert(
        "Termeni si conditi",
        "Nu ati selectat termenii si conditiile",
        [{ text: "Okay" }]
      );
      return;
    }

    if (capchaNumberORG + "" !== capchaNumber) {
      Alert.alert("CAPCHA", "CAPCHA GRESIT", [{ text: "Okay" }]);
      return;
    }

    setIsLoading(true);
    setError();
    try {
      console.log(email.toLocaleLowerCase(), password.toLocaleLowerCase());

      await dispatch(
        authAuctions.singup(
          email.toLocaleLowerCase(),
          password.toLocaleLowerCase(),
          city,
          name
        )
      );
      setIsLoading(false);
      navigation.navigate("AuthScreen");
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      Alert.alert("Error", error, [{ text: "Okay" }]);
    }
  }, [error]);

  if (isLoading) {
    return (
      <Container style={{ justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </Container>
    );
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <Container>
        <Content>
          <ScrollView>
            <Form>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input
                  autoCapitalize="none"
                  onChangeText={email => setEmail(email)}
                  keyboardType="email-address"
                />
              </Item>
              <Item floatingLabel last>
                <Label>Parola</Label>
                <Input
                  autoCapitalize="none"
                  onChangeText={password => setPassword(password)}
                  secureTextEntry
                />
              </Item>
              <Item floatingLabel last>
                <Label>Oras</Label>
                <Input onChangeText={city => setCity(city)} />
              </Item>
              <Item floatingLabel last>
                <Label>Nume / Prenume</Label>
                <Input onChangeText={name => setName(name)} />
              </Item>
            </Form>
            <ListItem>
              <CheckBox
                checked={tncAccept}
                onPress={() => {
                  setTncAccept(!tncAccept);
                }}
              />
              <Body>
                <View style={{ flexDirection: "row" }}>
                  <Text>Sunt de acord cu politica</Text>
                  <TouchableOpacity
                    style={{ marginLeft: -15 }}
                    onPress={() => {
                      setViewGDPR(true);
                    }}
                  >
                    <Text style={{ color: "blue" }}>GDPR</Text>
                  </TouchableOpacity>
                </View>
              </Body>
              <Modal
                animationType="slide"
                transparent={false}
                visible={viewGDPR}
                onRequestClose={() => {
                  setViewGDPR(false);
                }}
              >
                <View style={{ paddingTop: 15, flex: 1 }}>
                  <TouchableOpacity onPress={() => setViewGDPR(false)}>
                    <View style={{ margin: 5 }}>
                      <AntDesign name="closecircleo" size={32}  />
                    </View>
                  </TouchableOpacity>

                  <Text>POLITICA DE PRELUCRARE A DATELOR CU CARACTER PERSONAL

Mișcarea Română pentru Calitate prelucrează datele cu caracter personal în conformitate cu prevederile Regulamentului (UE) 2016/679 al Parlamentului European și al Consiliului din 27 Aprilie 2016 privind protecția persoanelor fizice în ceea ce privește prelucrarea datelor cu caracter personal și libera circulație a acestor date.
Mișcarea Română pentru Calitate prelucrează datele cu caracter personal în scopuri determinate, precum:
- solicitarea primită de către Mișcarea Română pentru Calitate cu privire la informații pe care trebuie să le ofere (de exemplu, de la autoritățile publice sau organisme de control).
- marketing, prin trimiterea de noutati de interes public cu referire la pachetele dezvoltate sau la activitati legate de proiect .
În cadrul Mișcării Române pentru Calitate, orice prelucrare de date cu caracter personal este legală, dar și echitabilă. Datele cu caracter personal sunt prelucrate și in vederea satisfacerii unor interese legitime, precum: prevenirea, detectarea și investigarea infracțiunilor; cooperarea cu autoritățile publice; 
	Datele prelucrate de către Mișcarea Română pentru Calitate sunt divulgate altor terțe părți, în vederea facilitării derulării activităților în legătură directă cu scopurile prelucrării detaliate anterior. Aceste terțe părți includ partenerii Mișcării Române pentru Calitate, printre care:
-	Colaboratori profesioniști, precum Agentiile de turism. 
-	Autorități de control si management în domeniu, organe profesionale, autorități publice, la cererea expresă a acestora.
Vizitatorii/turistii beneficiază de următoarele drepturi, cu excepția cazurilor în care legea prevede altfel:
-  dreptul de acces la datele personale prelucrate de către Mișcarea Română pentru Calitate, precum și informații despre modalitate de prelucrare și stocare a acestora.
-  dreptul la rectificarea datelor cu caracter personal care nu sunt exacte, precum și la completarea datelor incomplete.
-    dreptul la ștergerea datelor cu caracter personal/ dreptul de a fi uitat, în cazul în care datele cu caracter personal nu mai sunt necesare și nu mai justifică scopurile pentru care au fost colectate inițial.
-    dreptul la restricționarea prelucrării datelor cu caracter personal, în cazul în care:
⎫	Vizitatorul/turistul contestă exactitatea datelor.
⎫	Prelucrarea este ilegală, iar vizitatorul/turistul se opune ștergerii datelor, solicitând în schimb restricționarea utilizării acestora.
⎫	MRC nu mai are nevoie de prelucrarea datelor cu caracter personal ale vizitatorului/turistului, însă le solicită pentru contestarea, exercitarea sau apărarea unui drept în instanță.
⎫	Vizitatorul/turistul se opune prelucrării datelor cu caracter personal pentru perioada de timp în care se verifică dacă interesele legitime ale MRC asupra prelucrării datelor prevalează asupra drepturilor clientului.
-     dreptul de a se opune prelucrării datelor cu caracter personal de către Mișcarea Română pentru Calitate.
-    dreptul la notificare din partea Mișcării Române pentru Calitate cu privire la prelucrarea datelor cu caracter personal.
-     dreptul la portabilitatea datelor cu caracter personal, respectiv dreptul vizitatorului/turistului MRC de a primit datele cu caracter personal într-un format structural, utilizat în mod curent și care poate fi citit în mod automat, precum și dreptul de a trimite aceste date unui alt operator.
- dreptul de a depune o plângere față de modalitatea de prelucrare a datelor personale la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal.
- dreptul de retragere a consimțământului acordat Mișcării Române pentru Calitate de prelucrare a datelor cu caracter personal. Retragerea ulterioară a consimțământului nu afecteaza legalitatea folosirii datelor cu caracter personal efectuate în baza consimțământului acordat anterior Mișcării Române pentru Calitate înainte de retragerea acestuia. Retragerea consimțământului trebuie făcută în scris.
-    dreptul de a nu face obiectul unei decizii bazate exlusiv pe prelucrare automatizată, inclusiv profilarea, care produce efecte asupra clientului sau îl afecteaza în mod similar, cu excepția cazului în care o astfel de prelucrare este necesară  pentru executarea contractului individual de muncă sau este permisă de către lege.
Vizitatorii/turistii MRC își pot exercita drepturile mai sus menționate prin transmiterea unei cereri scrise la office@mrco.ro sau la adresa Mișcării Române pentru Calitate din Craiova, str. Părului, nr. 8, jud. Dolj.
Mișcare Română pentru Calitate își rezervă dreptul de a pune la dispoziția autorităților sau a otganismelor de control cu care lucrează, la solicitarea acestora, datele cu caracter personal ce reies din solicitari, de exemplu. În cazul în care legea o cere, Mișcarea Română pentru Calitate va furniza toate informațiile solicitate. 
Mișcarea Română pentru Calitate garanteaza siguranța prelucrării datelor cu caracter personal ale clienților săi, precum și confidențialitatea acestora. Atât angajații, cât și colaboratorii MRC (agentiile de turism inscrise) semnează angajamente de confidențialitate încă de la începutul colaborării cu Mișcarea Română pentru Calitate.
Mișcarea Română pentru Calitate va păstra datele cu caracter personal ale vizitatorilor/turistilor săi chiar și după expirarea contractului, conform obligațiilor legale specifice domeniului de activitate sau conform termenelor de prescripție aplicabile.
Managementul de la cel mai înalt nivel isi mentine angajamentul permanent pentru îmbunatățirea continuă a măsurilor de securitate în ceea ce privește activitățile de prelucrare a datelor cu caracter personal in vederea creșterii performanței în ceea ce privește confidențialitatea, disponibilitatea și integritatea datelor cu caracter personal.
Prezenta politică de prelucrare a datelor cu caracter personal va fi menținută permanent ca și informație documentată, adecvată scopului, parte integrantă a procedurilor interne ale Mișcării Române pentru Calitate. De asemenea, aceasta va fi adaptată în mod constant cerințelor de Securitate ale activităților de prelucrare a datelor cu caracter personal, comunicată și disponibilă atât în cadrul Mișcării Române pentru Calitate, cât și părților interesate.
</Text>
                </View>
              </Modal>
            </ListItem>
            <ListItem>
              <View>
                <Text>Introduceti numerele: {capchaNumberORG}</Text>
                <Input
                  keyboardType="numeric"
                  placeholder="CAPCHA"
                  onChangeText={capcha => setCapchaNumber(capcha)}
                />
              </View>
            </ListItem>
            <Button
              full
              onPress={() => {
                singupHandler();
              }}
              style={styles.loginButton}
            >
              <Text>Creare Cont</Text>
            </Button>
            <View style={{ marginTop: 10 }}>
              <Button
                full
                onPress={() => {
                  navigation.navigate("AuthScreen");
                }}
                style={styles.loginButton}
              >
                <Text>Login</Text>
              </Button>
            </View>
          </ScrollView>
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {},
  loginButton: {
    marginTop: 10
  }
});

export default RegisterScreen;
