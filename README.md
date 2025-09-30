# JKitchen 3.0
> Versão 3.0 do site JKitchen que criei a primeira versão em 2022.
> </br>Acesse via **GitHub Pages**: [https://juliocesar249.github.io/JKitchen3/](https://juliocesar249.github.io/JKitchen3/)

De tempos em tempos eu recrio esse site para aplicar novos conhecimentos que adquiro fazendo cursos e estudando e gosto de sempre publicar todas as versões aqui para guardar a evolução. Essa é a versão 3, mas também tem a [versão 2](https://juliocesar249.github.io/JKitchen2.0/) e [versão 3](https://jkitchen.vercel.app).

## Stack Utilizada

- React
- TypeScript
- Vite
- Bun

## Bibliotecas React

- Lucide React
- React Router
- React Toastify

## Rodar locamente

1. Instalar o **Bun**
   - Instale o Bun em [https://bun.com](https://bun.com);
   - Adicione o caminho do executável nas variáveis de ambiente;

2. Faça o build:

```sh
  bun run build
  bun run preview
```

Após isso acesse pelo link provido pelo terminal, algo como `http://localhost:http://localhost:4173/JKitchen3/`.
> OBS: A `/` no final é essencial para o acesso ao site após o build e mesmo em modo desenvolvimento.
> Ela foi adicionada para o funcionamento correto da biblioteca **React Router**.

## OU rode com NPM

1. Instale o NPM caso ainda não tenha aqui [https://nodejs.org/pt/download](https://nodejs.org/pt/download)
2. Faça o build:

```sh
npm run build
npm run preview
```

Após isso acesse pelo link provido pelo terminal, algo como `http://localhost:http://localhost:4173/JKitchen3/`.
