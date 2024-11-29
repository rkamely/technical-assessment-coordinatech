import type {SVGProps} from 'react';

export function ArrowRightPagination(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1.5 15L8.5 8L1.5 0.999999" stroke="#7839EE" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round"/>
    </svg>

  );
}

ArrowRightPagination.displayName = 'ArrowRightPagination';
