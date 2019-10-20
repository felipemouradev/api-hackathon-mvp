import {Injectable} from '@nestjs/common';
import {InjectModel} from 'nestjs-typegoose';
import {ModelType, InstanceType, prop} from 'typegoose';
import {ItinerarioType, Student} from './models/student';
import {BaseService} from 'src/Common/base/base.service';
import {QuestionService} from '../question/question.service';
import {Question, Answer} from '../question/models/question';
import {CreateStudentRequest} from './interfaces/interfaces';
import {mapSeries} from "p-iteration";

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

    async createAnswer(studentId: string, studentRequest: CreateStudentRequest) {
        const student: InstanceType<Student> = await this.findById(studentId);
        const question: InstanceType<Question> = await this.questionService.findById(studentRequest.questionId);
        student.level = student.level.map(lvl => {
            if (lvl.itinerarioType === question.category) {
                lvl.gamificationXp = lvl.gamificationXp + question.gamificationXp;
                if (this.mustUpdateGamificationLevel(lvl.level, lvl.gamificationXp)) {
                    lvl.level = lvl.level + 1;
                }
            }
            return lvl;
        });
        const questionAnswer = question.questionResponse.possibleAnswers.find(answer => String(answer.id) === String(studentRequest.questionAnswerId));
        student.answeredQuestions = student.answeredQuestions ? student.answeredQuestions : [];
        student.answeredQuestions = [
            ...student.answeredQuestions,
            {
                questionId: question._id,
                questionAnswerId: studentRequest.questionAnswerId,
                weight: questionAnswer.weight | 1,
                category: question.category,
            }
        ];
        return await this.update(studentId, student);
    }

    async createBulkAnswer(studentId: string, arrayResponses: CreateStudentRequest[]) {
        return await mapSeries(arrayResponses, async (response) => {
            return await this.createAnswer(studentId, response);
        })
    }

    async createStudent(student: any) {
        const cienciasNatureza = {
            itinerarioType: 'ciencias-natureza',
            level: 0,
            gamificationXp: 0,
        };

        const cienciasHumanas = {
            itinerarioType: 'ciencias-humanas',
            level: 0,
            gamificationXp: 0,
        };

        const cienciasLinguagens = {
            itinerarioType: 'ciencias-linguagens',
            level: 0,
            gamificationXp: 0,
        };

        const cienciasMatematicas = {
            itinerarioType: 'ciencias-matematicas',
            level: 0,
            gamificationXp: 0,
        };
        student.level = [cienciasHumanas, cienciasLinguagens, cienciasMatematicas, cienciasNatureza];
        return await this.create(student);
    }
}
