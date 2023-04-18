import { FC } from 'react';

import { Button, Col, Flex, Link, Row } from '@/components';

export const AuthIndexPage: FC<unknown> = () => {
  return (
    <Flex flexDirection="column">
      <Row mb="1.6rem">
        <Col>
          <Link to="/auth/login">
            <Button type="submit" fullSize>
              Войти
            </Button>
          </Link>
        </Col>
      </Row>
      <Row mb="1.6rem">
        <Col>
          <Link to="/auth/sign-up">
            <Button variant="secondary" fullSize>
              Зарегистрироваться
            </Button>
          </Link>
        </Col>
      </Row>
    </Flex>
  );
};
