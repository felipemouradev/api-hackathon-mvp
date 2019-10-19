import { Controller, Get, Delete, Param, Body, Post } from '@nestjs/common';
import { StudentService } from './student.service';

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

    @Get('/:sutdentId')
    getOne(@Param('sutdentId') sutdentId: string) {
        return this.studentService.findById(sutdentId);
    }

    @Delete('/:sutdentId')
    deleteOne(@Param('sutdentId') sutdentId: string) {
        return this.studentService.delete(sutdentId);
    }
}
