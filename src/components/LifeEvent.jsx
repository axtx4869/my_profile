import React from 'react';
import classNames from 'classnames';

export const LifeEvent = (props) => (
  <div className={classNames('relative', 'flex', ' sm:items-center', ' md:w-2/3', ' mx-auto', ' pt-10 ', 'pb-20')}>
    <div className={classNames('absolute', ' h-full', ' w-6', ' inset-0', ' flex', ' items-center', ' justify-center')}>
      <div className={classNames('h-full', 'w-1', 'bg-gray-200', 'pointer-events-none')}></div>
    </div>
    <div className={classNames('relative', ' inline-flex', ' items-center', ' justify-center', ' flex-shrink-0 ', 'z-10', ' w-6', ' h-6', '  mt-10', ' sm:mt-0', ' rounded-full', ' bg-indigo-500', ' text-white', ' font-medium', ' text-sm')}>{props.age}</div>
    <div className={classNames('flex', ' flex-col', ' sm:flex-row', ' items-start', ' sm:items-center', ' flex-grow', ' md:pl-8 pl-6')}>
      <div className={classNames('flex-grow', ' sm:pl-6', ' mt-6', ' sm:mt-0')}>
        <h2 className={classNames('mb-1', ' font-medium', ' text-gray-900', ' text-xl')}>{props.title}</h2>
        <p className={classNames('leading-relaxed')}>{props.content}</p>
      </div>
    </div>
  </div>
);
