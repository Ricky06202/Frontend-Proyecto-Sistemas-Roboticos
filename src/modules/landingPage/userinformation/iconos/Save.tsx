import React from 'react';
import type { SVGProps } from 'react';

export function Save(props: SVGProps<SVGSVGElement>) {
	return (<button className='hover:bg-gray-400 '><svg className='w-10 fill-blue-700 dark:fill-blue-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path d="M5 21h14a2 2 0 0 0 2-2V8a1 1 0 0 0-.29-.71l-4-4A1 1 0 0 0 16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2m10-2H9v-5h6zM13 7h-2V5h2zM5 5h2v4h8V5h.59L19 8.41V19h-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5H5z"></path></svg></button>);
}