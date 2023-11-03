import axios from './api/join';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Join = () => {
  const navigate = useNavigate();
  const nameRef = useRef();
  const pwRef = useRef();
  const pw2Ref = useRef();
  const idRef = useRef();
  const [pw, setPw] = useState('');
  const [alert, setAlert] = useState('');
  const [pass, setPass] = useState('');
  const [check, setCheck] = useState(false);

  const checkId = () => {
    console.log('check id function', idRef.current.value);
    const sendId = {
      id: idRef.current.value,
    };
    axios
      .post('/user/checkId', sendId)
      .then((res) => {
        console.log(res.data.msg);
        if (res.data.msg == '있는 아이디 ㅠㅠ') {
          setAlert('존재하는 아이디입니다.');
          setPass('');
          setCheck(false);
        } else if (res.data.msg == '없는 아이디 ㅎㅎ') {
          setAlert('');
          setPass('사용가능한 아이디입니다.');
          setCheck(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleJoin = (e) => {
    const ID = idRef.current.value;
    const PW = pwRef.current.value;
    const PW2 = pw2Ref.current.value;
    const NAME = nameRef.current.value;
    console.log(NAME);
    e.preventDefault();
    const joinInfo = {
      name: NAME,
      pw: PW,
      id: ID,
    };

    // 통과조건 : 중복체크 == true , 비밀번호 규칙 준수 , 빈값이 아니었을때 그리고 비밀번호 체크 됐을때
    if (
      PW === PW2 &&
      ID !== '' &&
      PW !== '' &&
      PW2 !== '' &&
      NAME !== '' &&
      PW.match(/[0-9]/) &&
      PW.match(/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/) &&
      check
    ) {
      axios.post('user/join', joinInfo).then((res) => {
        if (res.data.msg === '데이터') {
          navigate('/login');
        }
      });
    }
    if (!check) {
      setAlert('아이디 중복체크를 해주세요');
    } else {
      setAlert('');
    }

    if (
      !PW.match(/[0-9]/) ||
      !PW.match(/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/) ||
      PW.length < 8
    ) {
      setAlert('비밀번호 기준을 맞춰주세요');
      setPass('');
      pwRef.current.style.setProperty('border-color', '#D32F2F');
    }

    if (PW !== PW2) {
      pw2Ref.current.style.setProperty('border-color', '#D32F2F');
      setPass('');
      setAlert('비밀번호를 확인해주세요');
    } else {
      pw2Ref.current.style.setProperty('border-color', '#E0E0E0');
    }

    if (ID === '') {
      idRef.current.style.setProperty('border-color', '#D32F2F');
      setPass('');
      setAlert('아이디를 입력해주세요');
    } else {
      idRef.current.style.setProperty('border-color', '#E0E0E0');
    }

    if (PW === '') {
      pwRef.current.style.setProperty('border-color', '#D32F2F');
      setPass('');

      setAlert('비밀번호를 입력해주세요');
    } else {
      pwRef.current.style.setProperty('border-color', '#E0E0E0');
    }

    if (NAME === '') {
      nameRef.current.style.setProperty('border-color', '#D32F2F');
      setPass('');
      setAlert('이름을 입력해주세요');
    }
  };

  return (
    <div className="center-box">
      <form onSubmit={handleJoin} className="join">
        <h1 className="join__title">leechi</h1>
        <h4 className="join__desc">안녕하세요. 이치연입니다.</h4>
        <Link to={'/'} className="google">
          <img src="google.jpg" alt="" />
          구글로 회원가입
        </Link>
        <div className="or">
          <hr className="or-line" />
          <div className="or-text">OR</div>
        </div>
        <div className="join__main">
          <span id="join__check" onClick={checkId}>
            중복체크
          </span>
          <input type="id" placeholder="아이디" ref={idRef} />
          <input
            type="password"
            onChange={(e) => {
              setPw(e.target.value);
            }}
            placeholder="비밀번호"
            ref={pwRef}
          />
          <div className="password__check">
            <span
              style={
                pw.length >= 8 ? { color: '#00C853' } : { color: '#e0e0e0' }
              }
            >
              <img src="check.png" alt="" />
              8자 이상
            </span>
            <span
              style={
                pw.match(/[0-9]/) ? { color: '#00C853' } : { color: '#e0e0e0' }
              }
            >
              <img src="check.png" alt="" />
              숫자
            </span>
            <span
              style={
                pw.match(/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/)
                  ? { color: '#00C853' }
                  : { color: '#e0e0e0' }
              }
            >
              <img src="check.png" alt="" />
              특수문자 사용
            </span>
          </div>
          <input type="password" placeholder="비밀번호 확인" ref={pw2Ref} />
          <input type="text" placeholder="이름  ex) leechi" ref={nameRef} />
          <span className="join__alert">{alert}</span>
          <span className="join__pass">{pass}</span>
          <button className="join__btn">회원가입</button>
        </div>
      </form>
      <section className="question-box">
        <p>이미 계정을 가지고 계신가요?</p>
        <Link to="/login">로그인</Link>
      </section>
    </div>
  );
};

export default Join;
