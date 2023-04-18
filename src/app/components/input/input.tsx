import { Box } from '@/components/box';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef, ReactNode, useState } from 'react';
import { layout, space } from 'styled-system';
import { Typography } from '../typography';

type InputDefaultProps = JSX.IntrinsicElements['input'];

interface InputProps extends InputDefaultProps {
  label?: ReactNode;
  error?: string;
  width?: string | number;
  minWidth?: string | number;
  mt?: string;
  wth?: string;
  icon?: ReactNode;
}

const iconContainerCss = css({
  position: 'absolute',
  pointerEvents: 'none',
  bottom: 0,
  left: '2rem',
  height: '100%',
  width: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledInput = styled.input<InputProps>(
  ({ theme, error, icon }) => {
    const isError = (error?.length || 0) > 0;
    return {
      position: 'relative',
      width: '100%',
      padding: '1rem 2rem',
      paddingLeft: icon ? '5rem' : '2rem',
      borderRadius: 10,
      backgroundColor: theme.colors.lightWhite0,
      border: 0,
      ...theme.typography.body1,
      color: isError ? theme.colors.mainRed : theme.typography.body1,
      [`& + ${iconContainerCss.name}`]: {
        color: theme.color.lightGray,
      },
      [`&:focus + ${iconContainerCss.name}`]: {
        color: theme.palette.secondary.default,
      },
    };
  },
  layout,
  space,
);

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value, className, error, label = '', placeholder = 'Не указано', onChange, wth, mt, icon, ...rest }, ref) => {
    const isError = (error?.length || 0) > 0;
    return (
      <Box display="flex" css={{ position: 'relative', width: wth }} flexDirection="column" mt={mt}>
        {label && (
          <Typography
            as="label"
            variant="body1"
            mb={2}
            color={isError ? 'mainRed' : undefined}
            htmlFor={(rest as any).name}
            position="relative"
          >
            {label}
          </Typography>
        )}
        <StyledInput
          ref={ref}
          className={className}
          id={(rest as any).name}
          value={value}
          error={error}
          placeholder={placeholder}
          onChange={onChange}
          icon={!!icon}
          {...rest}
        />
        {icon ? <div css={iconContainerCss}>{icon}</div> : null}
        {isError && (
          <Typography variant="caption1" mt={2} ml={10} color="mainRed">
            {error}
          </Typography>
        )}
      </Box>
    );
  },
);
