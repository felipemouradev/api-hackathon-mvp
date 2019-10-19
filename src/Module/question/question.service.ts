import {Injectable} from '@nestjs/common';
import {InjectModel} from 'nestjs-typegoose';
import {ModelType} from 'typegoose';
import {BaseService} from '../../Common/base/base.service';
import {Answer, Question, QuestionResponse} from './models/question';
import {mapSeries} from 'p-iteration';

@Injectable()
export class QuestionService extends BaseService<Question> {
    constructor(
        @InjectModel(Question) private readonly questionModel: ModelType<Question>,
    ) {
        super();
        this._model = questionModel;
    }
}
