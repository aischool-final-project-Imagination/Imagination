import jwt from 'jsonwebtoken';
// import crypto from 'crypto';

export const createAccessToken = (_id, name) => {
  const jwtkey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign({ _id, name }, jwtkey, {
    expiresIn: '1m',
    issuer: 'leechi',
  });

  //   const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

  return token;
};

export const createRefreshToken = (_id, name) => {
  const jwtkey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign({ _id, name }, jwtkey, {
    expiresIn: '24h',
    issuer: 'leechi',
  });

  //   const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

  return token;
};
