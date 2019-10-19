import {NestFactory} from '@nestjs/core';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import {AppModule} from './app.module';
import {ValidationPipe} from '@nestjs/common';
import * as express from 'express';

async function bootstrap() {
    const bodyParser = require('body-parser');
    const server = express();
    server.use(bodyParser({limit: '100mb'}));
    const app = await NestFactory.create(AppModule, server);
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors({
        origin: '*',
    });
    const options = new DocumentBuilder()
        .setTitle('API Hackathon MVP')
        .setDescription('API Hackathon API')
        .setSchemes('https', 'http')
        .setVersion('0.0.1')
        .addTag('api-hackathon-mvp')
        .addBearerAuth('Authorization', 'header')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
    await app.init();
    await app.listen(3000);
}

bootstrap();
