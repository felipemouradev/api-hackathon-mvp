import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType, InstanceType } from 'typegoose';
import { Student } from './models/student';
import { BaseService } from 'src/Common/base/base.service';
import { QuestionService } from '../question/question.service';
import { Question, Answer } from '../question/models/question';
import { CreateStudentRequest } from './interfaces/interfaces';

@Injectable()
export class StudentService extends BaseService<Student> {
    // (1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89) * 10
    private gamificationLevels = {
        1: 10,
        2: 20,
        3: 30,
        4: 50,
        5: 80,
        6: 130,
        7: 210,
        8: 340,
        9: 550,
    };

    constructor(
        @InjectModel(Student) private readonly studentModel: ModelType<Student>,
        private readonly questionService: QuestionService,
    ) {
        super();
        this._model = studentModel;
    }

    mustUpdateGamificationLevel(level: number, xpQuantity: number): boolean {
        return xpQuantity >= this.gamificationLevels[level + 1];
    }

    async createAnswer(studentId: string, body: CreateStudentRequest) {
        const student: InstanceType<Student> = await this.findById(studentId);
        const question: InstanceType<Question> = await this.questionService.findById(body.questionId);
        student.level = student.level.map(lvl => {
            if (lvl.itinerarioType === question.category) {
                lvl.gamificationXp = lvl.gamificationXp + question.gamificationXp;
                if (this.mustUpdateGamificationLevel(lvl.level, lvl.gamificationXp)) {
                    lvl.level = lvl.level + 1;
                }
            }
            return lvl;
        });
        const questionAnswer: Answer = question.questionResponse.possibleAnswers.find(answer => answer.id === body.questionAnswerId);
        student.answeredQuestions.push({
            questionId: question._id,
            questionAnswerId: body.questionAnswerId,
            weight: questionAnswer.weight,
            category: question.category,
        });
        return await this.update(studentId, student);
    }
}
