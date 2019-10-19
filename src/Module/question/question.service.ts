import {Injectable} from '@nestjs/common';
import {InjectModel} from 'nestjs-typegoose';
import {ModelType} from 'typegoose';
import {BaseService} from '../../Common/base/base.service';
import { Question } from './models/question';

@Injectable()
export class QuestionService extends BaseService<Question> {
    constructor(
        @InjectModel(Question) private readonly questionModel: ModelType<Question>,
    ) {
        super();
        this._model = questionModel;
    }

}
