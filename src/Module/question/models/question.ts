import {prop, Typegoose, Ref, arrayProp} from 'typegoose';

enum QuestionType {
    'text' = 'text',
    'image' = 'image',
    'video' = 'video',
}

enum QuestionResponseType {
    'yes-not' = 'yes-not',
    'multiple-choice' = 'multiple-choice',
}

class Answer {
    @prop()
    answerName: string;

    @prop()
    id: string;
}

class QuestionResponse {
    @prop({enum: [QuestionResponseType['multiple-choice'], QuestionResponseType['yes-not']]})
    type: QuestionResponseType;

    @prop()
    possibleAnswers?: Answer[];

    @prop()
    correctAnswer: string;
}

export class Question extends Typegoose {

    @prop({required: true, enum: [QuestionType.image, QuestionType.text, QuestionType.video]})
    type: string;

    @prop({required: true})
    text?: string;

    @prop({required: true})
    attachment?: string;

    @prop()
    teacher: string;

    @prop({required: true})
    weight: number;

    @prop({required: true})
    gamificationXp: number;

    @prop()
    questionResponses?: QuestionResponse[];
}