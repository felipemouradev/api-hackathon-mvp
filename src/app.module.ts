import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from './Common/config/config.module';
import {QuestionModule} from './Module/question/question.module';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
    imports: [
        TypegooseModule.forRoot('mongodb://localhost:27017/api-mvp?authSource=admin', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }),
        ConfigModule,
        QuestionModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
