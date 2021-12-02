import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

interface MenuProps {
  icon:
    | 'card'
    | 'logout'
    | 'messages'
    | 'overview'
    | 'reward'
    | 'setting'
    | 'transaction';
  title: string;
  active?: boolean;
  href: string;
}
export default function Menu(props: Partial<MenuProps>) {
  const { icon, title, href, active } = props;

  const classTitle = classNames({
    'item ': true,
    'mb-20': true,
    active: active,
  });
  return (
    <div className={classTitle}>
      <div className="me-3">
        <Image src={`/icon/sidebar/${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
