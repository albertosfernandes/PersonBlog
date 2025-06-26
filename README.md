# 📝 Projeto Angular - Blog Técnico

Este projeto é uma aplicação Angular para publicação de posts técnicos, com estrutura modular e consumo de API para exibição de artigos.

---

## 📦 Estrutura do Projeto

- **AppModule**: Módulo principal que declara todos os componentes da aplicação.
- **Componentes**:
  - `AppComponent`: Componente raiz.
  - `NavHeaderComponent`: Cabeçalho de navegação com barra de busca.
  - `SidebarComponent`: Lista de tópicos e artigos.
  - `BodyComponent`: Corpo principal com lógica de carregamento de artigos.
  - `BlogpostComponent`: Exibição de conteúdo de um artigo.
  - `FooterComponent`: Rodapé da aplicação.
  - `HelloComponent`: Exemplo simples de uso de input.

---

## 🧩 Serviços

- **BaseService**
  - Responsável por armazenar a base da URL e injetar o `HttpClient`.
  - Variáveis:
    - `urlapi`: `"https://myapigateway.execute-api.us-east-1.amazonaws.com"`
    - `httpBase`: Cliente HTTP usado por outros serviços.

- **ArticleService**
  - Usa o `BaseService` para acessar endpoints de artigos.
  - Métodos:
    - `getAllArticles()`: Retorna todos os artigos disponíveis.
    - `getArticle(articleId)`: Retorna um artigo específico com base no `articleId`.

---

## 📚 Modelo de Dados

### `ModelArticles`
Representa um artigo técnico.

| Propriedade       | Tipo     | Descrição                      |
|-------------------|----------|--------------------------------|
| `articleId`       | number   | ID do artigo                   |
| `title`           | string   | Título do artigo               |
| `date_of_included`| string   | Data de inclusão               |
| `introduction`    | string   | Introdução/resumo do conteúdo  |
| `content`         | string   | Conteúdo completo em HTML      |

---

## 🚀 Como executar o projeto
```bash
npm install
ng serve
```
Comandos que podem ser úteis

```bash
npm install --save-dev @angular/cli@12.2.14

tsconfig: "enableIvy": false,
```
