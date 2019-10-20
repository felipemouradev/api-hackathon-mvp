import { Controller, Get, Delete, Param, Body, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentRequest } from './interfaces/interfaces';

@Controller('students')
export class StudentController {
    constructor(
        private readonly studentService: StudentService,
    ) {}

    @Post('/')
    create(@Body() student: any) {
        return this.studentService.createStudent(student);
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

    @Post('/:studentId/answers-single')
    createAnswer(
        @Body() body: CreateStudentRequest,
        @Param('studentId') studentId: string,
    ) {
        return this.studentService.createAnswer(studentId, body);
    }

    @Post('/:studentId/answers')
    async createBulkAnswer(
        @Body() createStudentRequests: CreateStudentRequest[],
        @Param('studentId') studentId: string,
    ) {
        return await this.studentService.createBulkAnswer(studentId, createStudentRequests);
    }
}
