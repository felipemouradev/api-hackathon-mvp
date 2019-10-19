import * as fs from 'fs';
import * as csv from 'csv-parser';
import {includes, isEmpty} from 'lodash';

export class CsvService {
    static async processCsvFileToJSON(filePath, headers: string[], isValidated: boolean = true): Promise<any[]> {
        return new Promise((resolve, reject) => {
            const results = [];
            fs.createReadStream(filePath)
                .pipe(csv(
                    headers,
                ))
                .on('data', (data) => results.push(data))
                .on('end', () => {
                    try {
                        if (isValidated) {
                            headers.forEach((value, index) => {
                                if (!includes(results[0], value)) {
                                    reject('Invalid headers!');
                                }
                            });
                            results.shift();
                        }

                        const errors = [];
                        if (isValidated) {
                            results.map((result, line) => {
                                headers.forEach((value, index) => {
                                    if (result[value] === '' || isEmpty(result[value])) {
                                        errors.push({error: value + ' empty on line ' + line});
                                    } else {
                                        result[value] = result[value].trim();
                                    }
                                });
                                return result;
                            });
                        }
                        if (errors.length > 0) {
                            reject(errors);
                        }
                        resolve(results);
                    } catch (e) {
                        reject(e.message);
                    }
                });
        });

    }
}
