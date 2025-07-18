import { useEffect } from 'react';
import { login } from '../services/api_service.ts';

//useEffect для зареєстрованих користувачів
export const LoginPage = () => {
  useEffect(() => {
    login({
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 1,
    });
  }, []);
  return (
    <h1 className="flex justify-center text-[#404214] text-5xl mt-10">
      Login Page
    </h1>
  );
};
