import type { SVGProps } from 'react';

export function TextHelperIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width='16' height='16' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'
         {...props}>
      <path
        d='M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z'
        fill='#808080'
      />
      <path
        d='M6.14355 7.25847C5.99437 7.25847 5.8513 7.1992 5.74581 7.09371C5.64032 6.98822 5.58105 6.84515 5.58105 6.69597V3.00146C5.58105 2.85228 5.64032 2.70921 5.74581 2.60372C5.8513 2.49823 5.99437 2.43896 6.14355 2.43896C6.29274 2.43896 6.43582 2.49823 6.54131 2.60372C6.64679 2.70921 6.70605 2.85228 6.70605 3.00146V6.69597C6.70605 6.84515 6.64679 6.98822 6.54131 7.09371C6.43582 7.1992 6.29274 7.25847 6.14355 7.25847Z'
        fill='white'
      />
      <path
        d='M6.14356 9.81611C5.99437 9.81611 5.8513 9.75685 5.74581 9.65137C5.64032 9.54588 5.58106 9.4028 5.58106 9.25361C5.58085 9.10367 5.63981 8.9597 5.74513 8.85298C5.85045 8.74625 5.99362 8.6854 6.14356 8.68362C6.21705 8.68293 6.28996 8.69678 6.35807 8.72438C6.42619 8.75198 6.48818 8.79278 6.54046 8.84444C6.59274 8.89609 6.63429 8.95758 6.66271 9.02536C6.69113 9.09314 6.70586 9.16587 6.70606 9.23937V9.25512C6.70566 9.40404 6.64622 9.54673 6.54077 9.6519C6.43533 9.75706 6.29248 9.81611 6.14356 9.81611Z'
        fill='white'
      />
    </svg>
  );
}

TextHelperIcon.displayName = 'TextHelperIcon';