import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Student } from './models/student';
import { QuestionModule } from '../question/question.module';

@Module({
    imports: [
        TypegooseModule.forFeature([Student]),
        QuestionModule,
    ],
  providers: [StudentService],
  controllers: [StudentController],
})
export class StudentModule {}
