import {
    Controller,
    Get,
    Param,
    Post,
    Body,
} from '@nestjs/common';
import {ApiUseTags, ApiImplicitParam, ApiBearerAuth} from '@nestjs/swagger';
import { QuestionService } from './question.service';

@ApiBearerAuth()
@Controller('questions')
export class QuestionController {
    constructor(
        private readonly questionService: QuestionService,
    ) {}

    @Post('/')
    async create(@Body() body: any) {
        return this.questionService.create(body);
    }
}
