import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: any, next: () => void) {
    console.log("reached --->", req?.path);
    next();
  }
}
