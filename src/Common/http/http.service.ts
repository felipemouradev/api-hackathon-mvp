import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class HttpService {
  axiosInstance;

  constructor() {
    this.axiosInstance = axios;
  }
}
