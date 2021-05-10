import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { AppError } from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { id } = request.user;

  const usersRepository = new UsersRepository();
  const user = await usersRepository.findById(id);

  if (!user.is_admin) {
    throw new AppError('User is not admin');
  }

  return next();
}
