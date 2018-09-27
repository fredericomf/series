# series

## Observações:

### Atenção: No linux instalar assim:

#apt-get install nodejs npm

#npm install -g react-native

#npm install -g create-react-native-app

## Configurando o projeto

1- Criar a estrutura:

create-react-native-app series

2- Criar as pastas:

src/pages

src/components

3- Instalar o react-navigation:

npm install --save react-navigation

## Implementações chaves

#### Implementado o componente FormRow

Esse componente será utilizado em todos os formulário como uma forma de centralizar estilos.

Esse componente comporta-se como um Container para outros componentes React Native.

Exemplo:

> &lt;FormRow&gt;
>   &lt;COMPONENTE_REACT_NATIVE_1&gt;
>   ...
>   &lt;COMPONENTE_REACT_NATIVE_N&gt;
> &lt;/FormRow&gt;