import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: '*',
    origin: ['http://localhost:4000'],
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Authentication Documentation')
    .addBearerAuth()
    .setDescription(
      'Security api test framework for authentication app with jwt and passport',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);

  await app.listen(4000);
}
bootstrap();
