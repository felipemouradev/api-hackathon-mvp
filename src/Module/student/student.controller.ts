import { Controller, Get, Delete, Param, Body, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentRequest } from './interfaces/interfaces';

@Controller('students')
export class StudentController {
    constructor(
        private readonly studentService: StudentService,
    ) {}

    @Post('/')
    create(@Body() body: any) {
        return this.studentService.create(body);
    }

    @Get('/')
    get() {
        return this.studentService.findAll({});
    }

    @Get('/:studentId')
    getOne(@Param('studentId') studentId: string) {
        return this.studentService.findById(studentId);
    }

    @Delete('/:studentId')
    deleteOne(@Param('studentId') studentId: string) {
        return this.studentService.delete(studentId);
    }

    @Post('/:studentId/answers')
    createAnswer(
        @Body() body: CreateStudentRequest,
        @Param('studentId') studentId: string,
    ) {
        return this.studentService.createAnswer(studentId, body);
    }

    @Post('/:studentId/answersBulk')
    async createBulkAnswer(
        @Body() body: CreateStudentRequest[],
        @Param('studentId') studentId: string,
    ) {
        return await this.studentService.createBulkAnswer(studentId, body);
    }
}
