import {Module} from '@nestjs/common';
import {QuestionService} from './question.service';
import {TypegooseModule} from 'nestjs-typegoose';
import {QuestionController} from './question.controller';
import { Question } from './models/question';

@Module({
    providers: [
        QuestionService,
    ],
    imports: [
        TypegooseModule.forFeature([Question]),
    ],
    controllers: [QuestionController],
})
export class QuestionModule {}
