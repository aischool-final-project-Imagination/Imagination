import jwt from 'jsonwebtoken';
import crypto from 'crypto';

export const createToken = (_id) => {
  const jwtkey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign({ _id }, jwtkey, { expiresIn: '3d' });

  const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

  return hashedToken;
};
