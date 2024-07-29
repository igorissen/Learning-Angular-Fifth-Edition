import {ErrorHandler, Injectable} from "@angular/core";
import {HttpErrorResponse, HttpStatusCode} from "@angular/common/http";

@Injectable()
export class AppErrorHandler implements ErrorHandler {
  handleError(error: any) {
    const err = error.rejection || error;
    let message = '';

    if (err instanceof HttpErrorResponse) {
      switch (err.status) {
        case 0:
          message = 'Client error';
          break;
        case HttpStatusCode.InternalServerError:
          message = 'Server error';
          break;
        case HttpStatusCode.BadRequest:
          message = 'Request error';
          break;
        default:
          message = 'unknown error';
      }
    } else {
      message = 'Application Error';
    }

    console.error(message, err);
  }
}
