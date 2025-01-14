<h1 align="center">ByteBank - Parcel Styleguide</h1>

### ✨ Sobre

<h4>Parte Styleguide do microfrontend do Tech Challenge da Pós Tech FIAP - Fase 2</h4>

<b>Versão:</b> 1.0.0

### 📌 Stack de Desenvolvimento

- [phosphor-icons/react](https://phosphoricons.com/) para biblioteca padrão de ícones;
- [date-fns](https://date-fns.org/) para lidar com datas;
- [tailwind](https://tailwindcss.com/) para estilização de componentes;

### 🛠 Ferramentas
- IDE: [VSCode](https://code.visualstudio.com/)

### 🎲 Workspace
- [bytebank-workspace](https://github.com/beatrizsantiago/bytebank-workspace)

### 🎯 Getting Started

Com o docker instalado, contrua a imagem:

  ```
    docker build -t bytebank:styleguide .
  ```

E depois execute o container:

  ```
    docker run -p 8081:8081 bytebank:styleguide
  ```

Para utilizar o projeto sem o docker, siga os seguintes comandos:

Instalar as dependências

```bash
npm install
```

Iniciar projeto no modo dev:

```bash
npm start
```

Abra [http://localhost:8081](http://localhost:8081) com seu navegador.
