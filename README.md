# API Hackathon MVP


enum QuestionType{
    text, image, video
}

enum ItinerarioType{
    'ciencia-humana',
    // Outros itinerarios
}

class Question {
    type: QuestionType;
    text?: string;
    attachment?: string;
    teacher: string;
    weight: number;
    gamificationXp: number;
}

class GamificationLevel{
    itinerarioType: ItinerarioType;
    level: number;
    
}

class Student{
    name: string;
    level: 
}
//Collection Question begin
enum QuestionType{
    text, image, video
}

class Question {
    type: QuestionType;
    text?: string;
    attachment?: string;
    teacher: string;
    weight: number;
    gamificationXp: number;
    questionResponseCorrect: string
}

class QuestionResponse {
    questionId: ObjectId;
    text: string;
}

//Collection Question end

//Collection Student begin
enum ItinerarioType{
    'ciencia-humana',
    // Outros itinerarios
}

class GamificationLevel{
    itinerarioType: ItinerarioType;
    level: number;
    gamificationXp: number;
}

class Student{
    name: string;
    age: number;
    level: Array<GamificationLevel>;
}

//Collection Student end

//Collection StudentAnswers begin

class StudentAnswer {
    studentId: ObjectId;
    questionResponseId: ObjectId;
}

//Collection StudentAnswers end