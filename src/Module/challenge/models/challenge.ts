import {prop, Typegoose, Ref, arrayProp} from 'typegoose';

export class Challenge extends Typegoose {

    @prop({required: true})
    name: string;

    @prop({required: true})
    description: string;
}