import styled from '@emotion/styled';
import Tokens from '../css/tokens.ts';
import tokens from '../css/tokens.ts';

interface TextProps {
  size?: string;
  italic?: boolean;
  prettyColor?: boolean;
  cursive?: boolean;
  bold?: boolean;
}

const Text = styled.span<TextProps>((props) => ({
  'font-size': props.size || Tokens.fontSize.sm,
  'font-style': props.italic ? 'italic' : 'normal',
  'font-family': props.cursive && 'Blockletter',
  'font-weight': props.bold ? 'bold' : 'normal',
  color: props.prettyColor
    ? tokens.colors['font-color-pretty']
    : tokens.colors['font-color-base'],
}));

export default Text;
