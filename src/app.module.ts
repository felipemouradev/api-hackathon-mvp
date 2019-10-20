import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from './Common/config/config.module';
import {QuestionModule} from './Module/question/question.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { StudentModule } from './Module/student/student.module';
import { ChallengeModule } from './Module/challenge/challenge.module';
import { ChallengeService } from './Module/challenge/challenge.service';
import { ChallengeController } from './Module/challenge/challenge.controller';

@Module({
    imports: [
        TypegooseModule.forRoot('mongodb://localhost:27017/api-mvp?authSource=admin', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }),
        ConfigModule,
        QuestionModule,
        StudentModule,
        ChallengeModule,
    ],
    controllers: [AppController, ChallengeController],
    providers: [AppService, ChallengeService],
})
export class AppModule {
}
