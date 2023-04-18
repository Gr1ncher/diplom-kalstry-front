import styled from '@emotion/styled';
import { Box, Flex } from '../box';
import { Container } from '../grid';
import { Typography } from '../typography';

const Root = styled.div(({ theme }) => {
  return {
    backgroundColor: theme.color.black,
    height: '10rem',
    display: 'flex',
    alignItems: 'center',
  };
});

export const Footer = () => {
  return (
    <Root>
      <Container display="flex" justifyContent="space-between" width="100%">
        <Box>
          <Typography color="white">email</Typography>
          <Typography color="white">phone</Typography>
        </Box>
        <Box>
          <Typography color="white">Вакансии для работы</Typography>
        </Box>
      </Container>
    </Root>
  );
};
