import 'automapper-ts/dist/automapper';
import {Types} from 'mongoose';
import {InstanceType, ModelType, plugin, Typegoose} from 'typegoose';
import {omit} from 'lodash';

export abstract class BaseService<T extends Typegoose> {
    protected _model: ModelType<T>;

    private get modelName(): string {
        return this._model.modelName;
    }

    private get viewModelName(): string {
        return `${this._model.modelName}Vm`;
    }

    async findAll(filter = {}): Promise<Array<InstanceType<T>>> {
        return this._model.find(filter).exec();
    }

    async findAllWithLimit(filter = {}, limit = 20): Promise<Array<InstanceType<T>>> {
        return this._model.find(filter).limit(limit).exec();
    }

    async findOne(filter = {}): Promise<InstanceType<T>> {
        return this._model.findOne(filter).exec();
    }

    async findById(id: string): Promise<InstanceType<T>> {
        return this._model.findById(this.toObjectId(id)).exec();
    }

    async create(item: any): Promise<InstanceType<T>> {
        return this._model.create(omit(item, '_id'));
    }

    async delete(id: string): Promise<InstanceType<T>> {
        return this._model.findByIdAndRemove(this.toObjectId(id)).exec();
    }

    async update(id: string, item: any): Promise<InstanceType<T>> {
        return this._model.findByIdAndUpdate(this.toObjectId(id), omit(item, '_id'), {new: true}).exec();
    }

    async clearCollection(filter = {}): Promise<any> {
        return this._model.deleteMany(filter).exec();
    }

    private toObjectId(id: string): Types.ObjectId {
        return Types.ObjectId(id);
    }
}
