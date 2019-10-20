import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Delete,
} from '@nestjs/common';
import {QuestionService} from './question.service';

@Controller('questions')
export class QuestionController {
    constructor(
        private readonly questionService: QuestionService,
    ) {
    }

    @Post('/')
    create(@Body() body: any) {
        return this.questionService.create(body);
    }

    @Get('/:challengeId')
    get(@Param('challengeId') challengeId: string) {
        return this.questionService.findAll({challengeId});
    }

    @Get('/:questionId')
    getOne(@Param('questionId') questionId: string) {
        return this.questionService.findById(questionId);
    }

    @Delete('/:questionId')
    deleteOne(@Param('questionId') questionId: string) {
        return this.questionService.delete(questionId);
    }
}
