import {ApiModelProperty} from '@nestjs/swagger';
import {IsNumber, IsString} from 'class-validator';

export class AuthDto {
    @ApiModelProperty({required: true})
    @IsString()
    user: string;
    @ApiModelProperty({required: true})
    @IsString()
    password: string;
}
