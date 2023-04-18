import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthPage, HomePage } from '@/features';
import { Layout } from '../layout';

export const Root: FC<unknown> = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="auth/*" element={<AuthPage />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Route>
      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>
  );
};
