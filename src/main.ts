import { NestFactory } from '@nestjs/core';
import { Callback, Context, Handler } from 'aws-lambda';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { configure as serverlessExpress } from '@vendia/serverless-express';
const port = process.env.PORT || 3128;
let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: (req, callback) => callback(null, true),
  });
  app.use(helmet());
  await app.init();

  const expressServer = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressServer });
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};

bootstrap().then(() => {
  console.log('App is running on %s port', port);
});
