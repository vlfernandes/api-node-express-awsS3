module.exports = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "LogRocket Express API with Swagger",
        version: "0.1.0",
        description:
          `API com as principais funções de acesso ao Amazon AWS S3:\n
          - Listar buckets
          - Criar bucket
          - Deletar bucket
          - Listar arquivos de um bucket
          - Inserir arquivo em um bucket
          - Ler arquivo de um bucket
          - Deletar arquivo de um bucket`,
      },
      servers: [
        {
          url: "http://localhost:3000/",
        },
      ],
    },
    apis: ["./src/routes/bucket.js"],
  };