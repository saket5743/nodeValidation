import { CODE_400 } from "./constants";

class ApiResponse<T> {
  statusCode: number;
  data?: T;
  message: string;
  type?: boolean;

  constructor(statusCode: number, data: T, message: string, type: boolean) {
    this.statusCode = statusCode
    this.data = data
    this.message = message
    this.type = type

    statusCode < CODE_400;
  }
}

export default ApiResponse;