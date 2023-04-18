import { FC, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Section } from '@/components';
import { AuthIndexPage } from './auth-index.page';
import { AuthRegisterPage } from './auth-register.page';
import { isLogedinSelector } from './auth.selectors';
import { AuthLoginPage } from './auth-login.page';

export const AuthPage: FC<unknown> = () => {
  const navigate = useNavigate();
  const isLogedin = useSelector(isLogedinSelector);
  console.log('isLogedin: %o', isLogedin);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isLogedin) {
      navigate('/');
    }
  }, [isLogedin]);

  return (
    <Container>
      <Section>
        <Routes>
          <Route index element={<AuthIndexPage />} />
          <Route path="/login" element={<AuthLoginPage />} />
          <Route path="/sign-up" element={<AuthRegisterPage />} />
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
      </Section>
    </Container>
  );
};
