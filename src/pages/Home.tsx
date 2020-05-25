import React, {useState} from 'react';
import HouseImage from '../assets/logo.png';
import {TextInputMask} from 'react-native-masked-text';
import styled, {css} from 'styled-components/native';
import {StackNavigationProp, RootStackParamList} from '@react-navigation/stack';
import {Alert} from 'react-native';

const inputBaseStyles = css`
  border-radius: 24.5px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.16);
  elevation: 3;
  background-color: #fff;
  margin-top: 10px;
  height: 50px;
  padding: 0 20px;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fbfbfb;
  justify-content: center;
  padding: 40px;
  padding-top: 60px;
`;

const InputLabel = styled.Text`
  color: #4eaed2;
  padding-left: 22px;
  font-size: 18px;
  font-weight: 600;
`;

const Input = styled.TextInput`
  ${inputBaseStyles}
`;

const InputMask = styled(TextInputMask)`
  ${inputBaseStyles}
`;

const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 12px;
`;

const Button = styled.TouchableOpacity`
  background-color: #4eaed2;
  margin: 15px 0 0 auto;
  border-radius: 26.5px;
  border: 1px solid #fff;
  elevation: 5;
  height: 53px;
  padding: 0 26px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.16);
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

const Card = styled.View`
  border: 1px solid #4eaed2;
  background-color: #fff;
  width: 100%;
  padding: 17px 0;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;
  border-radius: 15px;
  elevation: 6;
`;

const CardImage = styled.Image`
  width: 111px;
  margin-bottom: 5px;
  height: 111px;
`;

const CardText = styled.Text`
  color: #4eaed2;
  font-size: 20px;
  font-weight: 600;
`;

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home = ({navigation}: Props) => {
  const [cpfValue, setCPFValue] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [creci, setCreci] = useState<string>('');

  const handleSubmit = () => {
    if (cpfValue === '' || fullName === '' || creci === '') {
      Alert.alert(
        `Algo deu errado :(`,
        'Preencha os campos corretamente',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    } else {
      Alert.alert(
        `Olá, ${fullName}`,
        'Seja Bem-Vindo!',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }
  };

  return (
    <Container>
      <Card>
        <CardImage source={HouseImage} />
        <CardText>Olá, crie uma conta</CardText>
      </Card>
      <InputContainer>
        <InputLabel>CRECI</InputLabel>
        <InputMask
          type="custom"
          value={creci}
          onChangeText={(text) => setCreci(text)}
          keyboardType="number-pad"
          options={{
            mask: '99 999.999',
          }}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Nome Completo</InputLabel>
        <Input value={fullName} onChangeText={(text) => setFullName(text)} />
      </InputContainer>
      <InputContainer>
        <InputLabel>CPF</InputLabel>
        <InputMask
          type="cpf"
          value={cpfValue}
          keyboardType="number-pad"
          onChangeText={(text) => setCPFValue(text)}
        />
      </InputContainer>
      <Button onPress={handleSubmit}>
        <ButtonText>Avançar</ButtonText>
      </Button>
    </Container>
  );
};

export default Home;
