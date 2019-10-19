import {prop, Typegoose} from 'typegoose';

enum ItinerarioType {
    'ciencias-humanas' = 'ciencias-humanas',
}

class GamificationLevel {
    @prop({
        enum: [
            ItinerarioType['ciencias-humanas'],
        ],
    })
    itinerarioType: ItinerarioType;

    @prop()
    level: number;

    @prop()
    gamificationXp: number;
}

class StudentAnswer {
    @prop()
    questionId: string;

    @prop()
    questionResponseId: string;
}

export class Student extends Typegoose {
    @prop()
    name: string;

    @prop({unique: true})
    nick: string;

    @prop()
    age: number;

    @prop()
    level: Array<GamificationLevel>;

    @prop()
    answeredQuestions: Array<StudentAnswer>;
}
