import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(`Starting NestJS server... profile ${process.env.NODE_ENV}`);

  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
