import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from 'typegoose';
import { Student } from './models/student';
import { BaseService } from 'src/Common/base/base.service';

@Injectable()
export class StudentService extends BaseService<Student> {
    constructor(
        @InjectModel(Student) private readonly studentModel: ModelType<Student>,
    ) {
        super();
        this._model = studentModel;
    }
}
