import {Injectable} from '@nestjs/common';
import {BaseService} from "../../Common/base/base.service";
import {InjectModel} from "nestjs-typegoose";
import {ModelType} from "typegoose";
import {Challenge} from "./models/challenge";

@Injectable()
export class ChallengeService extends BaseService<Challenge> {
    constructor(
        @InjectModel(Challenge) private readonly challengeModel: ModelType<Challenge>,
    ) {
        super();
        this._model = challengeModel;
    }
}
