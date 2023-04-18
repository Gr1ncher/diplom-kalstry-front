import { isLogedinSelector } from '@/features/auth/auth.selectors';
import { getSingleLoadingSelector } from '@ro-loading';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Box, Flex } from '../box';
import { Footer } from '../footer';
import { Header } from '../header';

export const Layout: FC<unknown> = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [firstSegment] = pathname.split('/').filter((item) => !!item);
  const isRegisterLoading = useSelector((state) => getSingleLoadingSelector(state, 'register'));
  const isLoginLoading = useSelector((state) => getSingleLoadingSelector(state, 'login'));
  const isProfileLoading = useSelector((state) => getSingleLoadingSelector(state, 'profile'));
  const isLogedin = useSelector(isLogedinSelector);
  useEffect(() => {
    if (firstSegment !== 'auth' && !isRegisterLoading && !isLoginLoading && !isLogedin && !isProfileLoading) {
      navigate('/auth');
    }
  }, [firstSegment, isRegisterLoading, isLoginLoading, isProfileLoading, isLogedin]);

  return (
    <Flex flexDirection="column" bg="bg" css={{ position: 'relative' }}>
      <Header />
      <Box css={{ minHeight: 'calc(100vh - 17rem)' }}>
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  );
};
