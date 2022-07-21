import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.CORS_WHITELIST.split(','),
  });
  await app.listen(process.env.APP_PORT, () =>
    console.log(`Server started on port: ${process.env.APP_PORT}`),
  );
}
bootstrap();
