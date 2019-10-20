import { Module } from '@nestjs/common';
import {TypegooseModule} from "nestjs-typegoose";
import {ChallengeService} from "./challenge.service";
import {ChallengeController} from "./challenge.controller";
import {Challenge} from "./models/challenge";

@Module({
    providers: [
        ChallengeService,
    ],
    imports: [
        TypegooseModule.forFeature([Challenge]),
    ],
    controllers: [ChallengeController],
    exports: [
        ChallengeService,
    ]
})
export class ChallengeModule {}
