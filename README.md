# Alimentômetro Wrapper

Um wrapper para trabalhar com a [Relação de Fatores de Correção e Índice de Conversão (Cocção de Alimentos)](https://docs.ufpr.br/~monica.anjos/Fatores.pdf).

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
// to import a specific method
import SpotifyWrapper from 'spotify-wrapper';

const spotify = new SpotifyWrapper({
  token: 'YOUR_TOKEN_HERE'
});

// using  method
spotify.search.artists('Incubus');
```

### CommonJS

```js
const SpotifyWrapper = require('spotify-wrapper').default;

const spotify = new SpotifyWrapper({
  token: 'YOUR_TOKEN_HERE'
});
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="spotify-wrapper.umd.js"></script>

<!-- to import minified version -->
<script src="spotify-wrapper.umd.min.js"></script>
```

After that the library will be available to the Global as `SpotifyWrapper`. Follow an example:

```js

const spotify = new SpotifyWrapper({
  token: 'YOUR_TOKEN_HERE'
});

const albums = spotify.search.albums('Choosen Artist');
```

## Métodos

> Follow the methods that the library provides.

### search.albums(query)

> Search for informations about Albums with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *album*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
spotify.search.albums('Incubus')
  .then(data => {
    // do what you want with the data
  })
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
