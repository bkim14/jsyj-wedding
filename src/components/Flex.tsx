import styled from '@emotion/styled';

interface FlexProps {
  gap?: string;
  alignItems?: string;
  justifyContents?: string;
  column?: boolean;
}

export const Flex = styled.div<FlexProps>((props) => ({
  display: 'flex',
  'flex-direction':
    props.column === undefined || props.column ? 'column' : 'row',
  'align-items': props.alignItems || 'center',
  'justify-contents': props.justifyContents || 'center',
  gap: props.gap,
}));
