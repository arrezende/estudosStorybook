import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  gap: '$2',
  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$ignite500',

        '&:not(:disabled):hover': {
          background: '$ignite300',
        },

        '&:disabled': {
          color: '$gray100',
          background: '$gray200',
        },
      },

      secondary: {
        color: '$ignite500',
        border: '2px solid $ignite500',

        '&:not(:disabled):hover': {
          background: '$ignite500',
          color: '#fff',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },
      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '#fff',
        },

        '&:disabled': {
          backgroundColor: '$gray600',
        },
      },
    },
    size: {
      sm: {
        height: 28,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}
Button.displayName = 'Button';
