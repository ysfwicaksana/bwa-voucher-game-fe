import ButtonTabs from './buttonTabs';
import TableTransaction from './tabletransaction';

export default function TransactionContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          My Transactions
        </h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">
            Rp 4.518.000.500
          </h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <ButtonTabs title="All Trx" filter="*" active />
              <ButtonTabs title="Success" filter="success" active />
              <ButtonTabs title="Pending" filter="pending" />
              <ButtonTabs title="Failed" filter="failed" />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
                <TableTransaction
                  status="pending"
                  image="overview-1"
                  title="Mobile Legend"
                  platform="mobile"
                  item={559}
                  nominal={150000}
                />
                <TableTransaction
                  status="success"
                  image="overview-2"
                  title="Call of Duty"
                  platform="desktop"
                  item={1000}
                  nominal={1500000}
                />
                <TableTransaction
                  status="failed"
                  image="overview-3"
                  title="Clash of Clans"
                  platform="mobile"
                  item={599}
                  nominal={200000}
                />
                <TableTransaction
                  status="success"
                  image="overview-4"
                  title="Valorant"
                  platform="desktop"
                  item={2000}
                  nominal={2000000}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
