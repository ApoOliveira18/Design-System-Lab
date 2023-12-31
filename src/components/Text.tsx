import { Slot } from '@radix-ui/react-slot';
import clsx from "clsx";
import { ReactNode } from 'react';

/*export default () => (
  <Slot>
    <div>Hello</div>
  </Slot>
);*/


export interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode; //string
  asChild?: boolean;
}

export function Text({ size = 'md', children, asChild}: TextProps) {
  const Comp = asChild ? Slot : 'span'; 

  return (
    <Comp 
    className={clsx(
      'text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg'

        }      
      )}      
      >
        {children}
    </Comp>
  )
}