# Alimentômetro Wrapper

[![Build Status](https://travis-ci.org/alanpinhel/alimentometro-wrapper.svg?branch=master)](https://travis-ci.org/alanpinhel/alimentometro-wrapper) [![Coverage Status](https://coveralls.io/repos/github/alanpinhel/alimentometro-wrapper/badge.svg?branch=master)](https://coveralls.io/github/alanpinhel/alimentometro-wrapper?branch=master) ![Badge size](https://badge-size.herokuapp.com/alanpinhel/alimentometro-wrapper/master/dist/alimentometro-wrapper.umd.min.js.svg) ![Badge gzip size](https://badge-size.herokuapp.com/alanpinhel/alimentometro-wrapper/master/dist/alimentometro-wrapper.umd.min.js.svg?compression=gzip)

Wrapper para trabalhar com a [Relação de Fatores de Correção e Índice de Conversão (Cocção de Alimentos)](https://docs.ufpr.br/~monica.anjos/Fatores.pdf).

## Navegadores Suportados

Esta biblioteca faz uso da [API de internacionalização](https://caniuse.com/#feat=internationalization) que é suportada nos seguintes navegadores.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
24+ ✔ | 29+ ✔ | 15+ ✔ | 10+ ✔ | 11+ ✔ |

## Instalação

```sh
$ npm install alimentometro-wrapper --save
```

## Como usar

### ES6

```js
import aw from 'alimentometro-wrapper';

aw.getAlimentos();
```

### CommonJS

```js
const aw = require('alimentometro-wrapper').default;
```

### UMD no Navegador

```html
<!-- importação da versão não minificada -->
<script src="alimentometro-wrapper.umd.js"></script>

<!-- importação da versão minificada -->
<script src="alimentometro-wrapper.umd.min.js"></script>
```

Depois disso, a biblioteca estará disponível globalmente como AlimentometroWrapper. Veja um exemplo:

```js
AlimentometroWrapper.getAlimentos();
```

## Métodos

> Veja os métodos que a biblioteca fornece.

### getAlimentos()

> Busca os principais alimentos com informações de nome, fator de correção, índice de conversão e peso bruto equivalente a um grama de peso processado.

**Exemplo**

```js
aw.getAlimentos()
  .map(alimento => {
    // faça o que quiser com os dados
  })
```

### formata(peso)

> Realiza a formatação de um valor númerico para o padrão humano para facilitar na leitura.

**Parâmetros**

| Parâmetro | Tipo    | Opções                   |
|-----------|---------|--------------------------|
|`peso`     |*number* | 'Peso em gramas'         |

**Exemplo**

```js
aw.formata(1523); // saída: "1,523kg"
```

## Contribuição

Leia [CONTRIBUTING.md](CONTRIBUTING.md) para obter detalhes sobre o processo de envio de pull requests.

## Versionamento

É usado [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, veja as [tags](https://github.com/alanpinhel/alimentometro-wrapper/tags).

## Autor

| ![Alan Pinhel](https://avatars0.githubusercontent.com/u/22641949?s=80&v=3)|
|:---------------------:|
|  [Alan Pinhel](https://github.com/alanpinhel/)   |

Veja a lista dos [contribuintes](https://github.com/alanpinhel/alimentometro-wrapper/contributors) que participaram deste projeto.

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE.md](LICENSE.md) para detalhes.
