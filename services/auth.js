import jwt from 'jsonwebtoken';
import { secret } from '../config';

export const createToken = user => jwt.sign(
  { user },
  secret,
  { expiresIn: 86400 }, // 1 day
);

export const verifyToken = async (req, res, next) => {
  try {
    const token = await jwt.verify(req.headers['x-token'], secret);
    req.user = token.user;
    next();
  } catch (error) {
    throw new Error('Invalid token');
  }
};
