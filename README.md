# Conexão com Banco MySQL

Este é um projeto em Node.js desenvolvido para estabelecer e gerenciar a conexão com um banco de dados MySQL, estruturado de forma simples e eficiente.

## 🚀 Tecnologias Utilizadas

* **Node.js**
* **MySQL**
* **JavaScript (ES6+)**

## 📁 Estrutura do Projeto

O projeto está organizado da seguinte forma:

* `modelos/` - Definição dos modelos de dados.
* `database.js` - Configuração inicial do banco de dados.
* `db.js` - Instância e métodos de conexão.
* `index.js` - Ponto de entrada principal da aplicação.
* `index-server.js` - Configuração do servidor web.

## 🔧 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
* [Node.js](https://nodejs.org)
* [MySQL Server](https://mysql.com)

## 📥 Instalação

1. Clone o repositório:
```bash
git clone https://github.com
```

2. Acesse a pasta do projeto:
```bash
cd Conexao-com-bancoMySQL
```

3. Instale as dependências:
```bash
npm install
```

## ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto (ou configure diretamente nos arquivos de banco) com as suas credenciais do MySQL:

```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
```

## ▶️ Como Executar

Para iniciar o servidor principal, execute:

```bash
npm start
```
*(Ou `node index.js` / `node index-server.js`, dependendo de como configurou seus scripts no package.json).*

---
Desenvolvido por [pablompx](https://github.com) com ajuda do professor.
