import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
var cors = require('cors');

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, { logger: console });
    const config = app.get(ConfigService);

    app.useGlobalPipes(new ValidationPipe());
    app.use(cors()); // Use this after the variable declaration

    const PORT = config.get<number>('API_PORT');

    const swag = new DocumentBuilder()
      .setTitle('E-HOTEL')
      .setDescription('REST API')
      .setVersion('1.0.0')
      .addTag('NestJS, Postgres, TypeORM')
      .build();

    const document = SwaggerModule.createDocument(app, swag);
    SwaggerModule.setup('/api/docs', app, document);

    await app.listen(PORT || 3030, () => {
      console.log(`Server ${PORT} - portda ishga tushdi`);
    });
  } catch (e) {
    console.log(e.message);
  }
}
bootstrap();
