import React from 'react';
import type { SVGProps } from 'react';

export function Edit(props: SVGProps<SVGSVGElement>) {
	return (<button className='hover:bg-blue-400 rounded-md'><svg className='w-10 fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"></path></svg></button>);
}