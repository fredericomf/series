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

4- [OPCIONAL] Instalar o yarn. Seguem instruções:
https://yarnpkg.com/lang/en/docs/install/#debian-stable

5- As vezes pode ocorrer um erro ao rodar o expo (npm/yarn start):

ERRO: EACCES: permission denied, open 'nonono/expo/log'

Rodar o comando abaixo pode resolver...

sudo rm -r ~/.expo

6- Instalar a extenção do Chrome "Redux DevTools":

Depois de instalar a extenção é necessário instalar o pacote no projeto, com o seguinte comando:

yarn add --dev remote-redux-devtools

## Snippets que eu criei para uso com o VSCode

```
"ReactNativeFuncionalComponentBoilerplate":{
		"scope": "javascript,typescript",
		"prefix": "rnfc",
		"body": [
			"import React from 'react';",
			"import { StyleSheet, View, Text } from 'react-native';",
			"",
			"const ${1:${TM_FILENAME_BASE}} = ({  }) => (",
			"\t<View>",
			"",
			"\t</View>",
			");",
			"",
			"const styles = StyleSheet.create({",
			"",
			"});",
			"",
			"export default ${1:${TM_FILENAME_BASE}}"
		]
	},
	"ReactNativeClassComponentBoilerplate":{
		"scope": "javascript,typescript",
		"prefix": "rncc",
		"body": [
			"import React from 'react';",
			"import { StyleSheet, View, Text } from 'react-native';",
			"",
			"export default class ${1:${TM_FILENAME_BASE}} extends React.Component {",
			"\trender() {",
			"\t\treturn (",
			"\t\t\t<View>",
			"\t\t\t\t<Text>Esta é a ${1:${TM_FILENAME_BASE}}</Text>",
			"\t\t\t</View>",
			"\t\t);",
			"\t}",
			"}"
		]
	}
```

## Implementações chaves

#### Implementado o componente FormRow

Esse componente será utilizado em todos os formulários como uma forma de centralizar estilos.

Esse componente comporta-se como um Container para outros componentes React Native.

Exemplo:

> &lt;FormRow&gt;
>
>   &lt;COMPONENTE_REACT_NATIVE_1&gt;
>
>   ...
>
>   &lt;COMPONENTE_REACT_NATIVE_N&gt;
>
> &lt;/FormRow&gt;
