import {prop, Typegoose, Ref, arrayProp} from 'typegoose';
import { ItinerarioType } from './../../student/models/student';

enum QuestionType {
    'text' = 'text',
    'image' = 'image',
    'video' = 'video',
}

enum QuestionResponseType {
    'yes-not' = 'yes-not',
    'multiple-choice' = 'multiple-choice',
}

export class Answer {
    @prop()
    answerName: string;

    @prop()
    id: string;

    @prop()
    weight: number;
}

export class QuestionResponse {
    @prop({enum: [QuestionResponseType['multiple-choice'], QuestionResponseType['yes-not']]})
    type: QuestionResponseType;

    @prop()
    possibleAnswers: Answer[];

    @prop()
    correctAnswer: string;
}

export class Question extends Typegoose {
    @prop({required: true})
    challengeId: string;

    @prop({required: true, enum: [QuestionType.image, QuestionType.text, QuestionType.video]})
    type: string;

    @prop({required: true})
    text?: string;

    @prop({required: false})
    attachment?: string;

    @prop({enum: [
        ItinerarioType['ciencias-humanas'],
        ItinerarioType['ciencias-linguagens'],
        ItinerarioType['ciencias-matematicas'],
        ItinerarioType['ciencias-natureza'],
    ], required: true})
    category: ItinerarioType;

    @prop()
    teacher: string;

    @prop({required: true})
    gamificationXp: number;

    @prop()
    questionResponse: QuestionResponse;
}