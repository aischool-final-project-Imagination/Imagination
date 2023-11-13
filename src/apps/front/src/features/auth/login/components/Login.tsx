import Feed from '../../../feed/Feed';
import { useEffect, useState } from 'react';
import axios from '../../api/auth';
import { LoginForm } from './LoginForm';
import { LoginQuestionBox } from './LoginQuestionBox';
import { atom, useAtom } from 'jotai';

const userAtom = atom({});

const Login = () => {
  const [user, setUser] = useAtom(userAtom);
  console.log(user);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    axios.get('/login/success').then((res) => {
      if (res.data) {
        setIsLogin(true);
        setUser(res.data);
      }
    });
  }, []);

  return (
    <div>
      {isLogin ? (
        <>
          <Feed />
        </>
      ) : (
        <div className="center-box">
          <LoginForm />
          <LoginQuestionBox />
        </div>
      )}
    </div>
  );
};

export default Login;
