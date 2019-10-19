import {prop, Typegoose} from 'typegoose';

export enum ItinerarioType {
    'ciencias-matematicas' = 'ciencias-matematicas',
    'ciencias-natureza' = 'ciencias-natureza',
    'ciencias-humanas-sociais' = 'ciencias-humanas-sociais',
    'ciencias-linguagens' = 'ciencias-linguagens',
}

class GamificationLevel {
    @prop({
        enum: [
            ItinerarioType['ciencias-humanas'],
            ItinerarioType['ciencias-linguagens'],
            ItinerarioType['ciencias-matematicas'],
            ItinerarioType['ciencias-natureza'],
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
    questionAnswerId: string;

    @prop()
    weight: number;

    @prop({enum: [
        ItinerarioType['ciencias-humanas'],
        ItinerarioType['ciencias-linguagens'],
        ItinerarioType['ciencias-matematicas'],
        ItinerarioType['ciencias-natureza'],
    ]})
    category: ItinerarioType;
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
