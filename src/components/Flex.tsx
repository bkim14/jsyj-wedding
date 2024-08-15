import styled from '@emotion/styled';

interface FlexProps {
  gap?: string | number;
  alignItems?: string;
  justifyContents?: string;
  column?: boolean;
  fullWidth?: boolean;
}

export const Flex = styled.div<FlexProps>((props) => ({
  display: 'flex',
  'flex-direction':
    props.column === undefined || props.column ? 'column' : 'row',
  'align-items': props.alignItems || 'center',
  'justify-contents': props.justifyContents || 'center',
  width: props.fullWidth ? '100%' : '',
  gap: props.gap,
}));
