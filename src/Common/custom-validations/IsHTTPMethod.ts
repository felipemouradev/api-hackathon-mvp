import {registerDecorator, ValidationOptions, ValidationArguments} from 'class-validator';
import {findIndex} from 'lodash';

export function IsHTTPMethod(validationOptions?: ValidationOptions) {
    return (object: object, propertyName: string) => {
        registerDecorator({
            name: 'IsHTTPMethod',
            target: object.constructor,
            propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any) {
                    return typeof value === 'string' &&
                        findIndex(
                            ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', '*'],
                            (v) => v === value) >= 0;
                },
            },
        });
    };
}
