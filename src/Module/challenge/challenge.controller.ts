import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ChallengeService} from "./challenge.service";

@Controller('challenges')
export class ChallengeController {

    constructor(
        private readonly challengeService: ChallengeService,
    ) {
    }

    @Post('/')
    create(@Body() challenge: any) {
        return this.challengeService.create(challenge);
    }

    @Get('/')
    get() {
        return this.challengeService.findAll({});
    }

    @Get('/:challengeId')
    getOne(@Param('challengeId') challengeId: string) {
        return this.challengeService.findById(challengeId);
    }

    @Delete('/:challengeId')
    deleteOne(@Param('challengeId') challengeId: string) {
        return this.challengeService.delete(challengeId);
    }
}
