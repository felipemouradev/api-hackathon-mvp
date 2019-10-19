// Collection Question begin
enum QuestionType {
    text, image, video,
}

enum QuestionResponseType {
    'yes-not' = 'yes-not',
    'multiple-choice' = 'multiple-choice',
}

class Question {
    type: QuestionType;
    text?: string;
    attachment?: string;
    teacher: string;
    weight: number;
    gamificationXp: number;
}

// tslint:disable-next-line: max-classes-per-file
class QuestionResponse {
    questionId: string;
    type: QuestionResponseType;
    possibleAnswers?: Array<string>;
}

// Collection Question end

// Collection Student begin
enum ItinerarioType {
    'ciencia-humana',
    // Outros itinerarios
}

class GamificationLevel {
    itinerarioType: ItinerarioType;
    level: number;
    gamificationXp: number;
}

class Student {
    name: string;
    age: number;
    level: Array<GamificationLevel>;
}

// Collection Student end

// Collection StudentAnswers begin

class StudentAnswer {
    studentId: string;
    questionResponseId: string;
}

// Collection StudentAnswers end