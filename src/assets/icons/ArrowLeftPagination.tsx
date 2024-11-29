import type {SVGProps} from 'react';

export function ArrowLeftPagination(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8.5 1L1.5 8L8.5 15" stroke="#7839EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

ArrowLeftPagination.displayName = 'ArrowLeftPagination';
