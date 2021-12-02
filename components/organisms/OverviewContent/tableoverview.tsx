import classNames from 'classnames';

interface TableOverviewProps {
  title: string;
  platform: string;
  item: number;
  price: number;
  status: 'pending' | 'success' | 'failed';
  image: string;
}
export default function TableOverview(props: TableOverviewProps) {
  const { title, platform, item, price, status, image } = props;
  const classStatus = classNames({
    'float-start': true,
    'icon-status': true,
    pending: status === 'pending',
    success: status === 'success',
    failed: status === 'failed',
  });
  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${image}.png`}
          width={80}
          height={60}
          alt="game thumbnail"
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {platform}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={classStatus}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
}
