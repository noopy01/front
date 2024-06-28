import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const KakaoRedirectHandler = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const code = new URL(window.location.href).searchParams.get('code');
        console.log(code);
        if (code) {
          const response = await axios.post(
            'https://kauth.kakao.com/oauth/token',
            null,
            {
              params: {
                grant_type: 'authorization_code',
                client_id: '0b051c5eeb61f11be3965f822ff6ab51',
                redirect_uri: 'http://localhost:5173/auth/kakao/callback',
                code,
              },
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            }
          );
          const { access_token } = response.data;
          console.log("나는 토큰:", access_token);
          await axios.post('http://13.124.118.56/login/kakao', {
            access_token,
          });

          navigate('/'); 
          
        }
      } catch (error) {
        console.error('카카오 로그인 처리 중 오류 발생:', error);
      }
    };

    fetchToken();
  }, [navigate]); 
  
  return <div>로그인 중...</div>;
};

export default KakaoRedirectHandler;