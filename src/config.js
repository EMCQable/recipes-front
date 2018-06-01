export default {
  s3: {
    REGION: "YOUR_S3_UPLOADS_BUCKET_REGION",
    BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME"
  },
  apiGateway: {
    REGION: "eu-west-2",
    recipes:
      {
        URL: "https://fqkcs8cdid.execute-api.eu-west-2.amazonaws.com/prod/recipes"
      },
    users:
      {
        URL: "https://fqkcs8cdid.execute-api.eu-west-2.amazonaws.com/prod/users"
      },
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_MxgLua6tH",
    APP_CLIENT_ID: "48eokufmvpfkouaaidqpotruak",
    IDENTITY_POOL_ID: "eu-west-2:91d844fb-ff1e-4039-8b92-863a10e5955c"
  }
};