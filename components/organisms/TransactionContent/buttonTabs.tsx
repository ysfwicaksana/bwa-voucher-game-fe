import React from 'react';
import cx from 'classnames';
interface ButtonTabsProps {
  title: string;
  active?: boolean;
  filter: '*' | 'success' | 'pending' | 'failed';
}
export default function ButtonTabs(props: Partial<ButtonTabsProps>) {
  const { title, active, filter } = props;
  const classButton = cx({
    'btn btn-status rounded-pill text-sm  me-3': true,
    'btn-active': active,
  });
  return (
    <a data-filter={filter} href="#" className={classButton}>
      {title}
    </a>
  );
}
