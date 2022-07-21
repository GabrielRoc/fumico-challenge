import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenInterface } from '../interfaces/token.interface';

export function AuthUser() {
  const jwtService: JwtService = new JwtService();

  return createParamDecorator(
    async (_data: unknown, context: ExecutionContext) => {
      const request = context.switchToHttp().getRequest();

      const decodedToken = jwtService.decode(
        request.headers.authorization.split(' ')[1],
      ) as TokenInterface;

      return { id: decodedToken.id };
    },
  )();
}
