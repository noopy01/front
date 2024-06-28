import * as B from "./Login.style";
import kakao from "../Img/kakao.png";
import Logo2 from "../Img/Logo2.png";

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=0b051c5eeb61f11be3965f822ff6ab51&redirect_uri=http://localhost:5173/auth/kakao/callback&response_type=code`;

const KakaoLoginButton = () => {
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div className="total1">
      <B.Image>
        <B.LogoImage src={Logo2} alt="logo Login" />
        <B.KakaoImage src={kakao} alt="Kakao Login" onClick={handleLogin}/>
      </B.Image>
    </div>
  );
};





export default KakaoLoginButton;