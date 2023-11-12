import userModel from '../../shared/userModel';
import bcrypt from 'bcrypt';
import { createAccessToken, createRefreshToken } from '../helper/createToken';

const checkId = async (req, res, next) => {
  const user = await userModel.findOne({ id: req.body.id });
  if (user) {
    res.json({ msg: 'User already exists' });
  } else {
    res.json({ msg: 'User does not exist' });
    next();
  }
};

const joinId = async (req, res) => {
  const { name, id, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const user = new userModel({ id, password: hash, name });
  const token = createAccessToken(user._id, name);
  res.status(200).json({ name: user.name, id, token });
  await user.save();
};

const handleLogin = async (req, res) => {
  const { id, password } = req.body;
  const user = await userModel.findOne({ id });
  if (!user) return res.status(400).json('user not found');

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) return res.status(400).json('wrong password');

  const accessToken = createAccessToken(user._id, user.name);
  const refreshToken = createRefreshToken(user._id, user.name);

  res.cookie('accessToken', accessToken, {
    secure: false, // 현재 http를 사용중이라서 false
    httpOnly: true,
  });
  res.cookie('refreshToken', refreshToken, {
    secure: false,
    httpOnly: true,
  });

  res.status(200).json('login success');
};

export { checkId, joinId, handleLogin };
