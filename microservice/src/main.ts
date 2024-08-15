import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      protoPath: join(__dirname, '../../order.proto'),
      package: 'order',
    },
  });
  app.listen();
}
bootstrap();
