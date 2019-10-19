import {prop, Typegoose, Ref, arrayProp} from 'typegoose';

enum QuestionType {
    text, image, video,
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

    @arrayProp({itemsRef: Answer})
    possibleAnswers?: Ref<Answer>[];

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

    @arrayProp({ itemsRef: QuestionResponse })
    questionResponses?: Ref<QuestionResponse>[];
}