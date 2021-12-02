import cx from 'classnames';

interface TableTransactionProps {
  status: 'pending' | 'success' | 'failed';
  image: string;
  title: string;
  platform: 'desktop' | 'mobile';
  item: number;
  nominal: number;
}

export default function TableTransaction(props: TableTransactionProps) {
  const { status, image, title, platform, item, nominal } = props;

  const classStatus = cx({
    'float-start icon-status': true,
    pending: status === 'pending',
    failed: status === 'failed',
    success: status === 'success',
  });
  return (
    <tr data-category={status} className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${image}.png`}
          width="80"
          height="60"
          alt=""
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
        <p className="fw-medium color-palette-1 m-0">{nominal}</p>
      </td>
      <td>
        <div>
          <span className={classStatus}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
      <td>
        <a
          href="/member/transaction/transactions-detail"
          className="btn btn-status rounded-pill text-sm"
        >
          Details
        </a>
      </td>
    </tr>
  );
}
