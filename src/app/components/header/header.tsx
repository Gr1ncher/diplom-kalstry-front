/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Flex } from '../box';
import { Container } from '../grid';
import { Typography } from '../typography';
import { Link } from '../link';
import { logoutAuthAction } from '@/features/auth/auth.actions';
import { isLogedinSelector } from '@/features/auth/auth.selectors';
import styled from '@emotion/styled';

const Root = styled.div(({ theme }) => {
  console.log('theme: %o', theme);
  return {
    backgroundColor: theme.color.mainOrange,
    height: '7rem',
    display: 'flex',
    alignItems: 'center',
  };
});

export const Header: FC = () => {
  const dispatch = useDispatch();
  const isLogedin = useSelector(isLogedinSelector);
  const handleLogout = () => {
    dispatch(logoutAuthAction.started());
  };

  return (
    <Root>
      <Container display="flex" justifyContent="space-between" alignItems="center">
        <Link
          to="/"
        >
          <Typography variant="h1">Logo</Typography>
        </Link>
        <Flex>
          {isLogedin ? (
            <Flex>
              <Typography css={{ cursor: 'pointer' }} variant="body1" onClick={handleLogout}>
                Выйти
              </Typography>
            </Flex>
          ) : null}
        </Flex>
      </Container>
    </Root>
  );
};
