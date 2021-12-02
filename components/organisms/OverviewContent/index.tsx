import CategoryCard from './categorycard';
import TableTransaction from './tableoverview';

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <CategoryCard icon="desktop" nominal={18500000}>
                Game
                <br />
                Desktop
              </CategoryCard>
              <CategoryCard icon="mobile" nominal={15504000}>
                Game
                <br />
                Mobile
              </CategoryCard>
              <CategoryCard icon="desktop" nominal={5000000}>
                Other
                <br />
                Categories
              </CategoryCard>
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
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableTransaction
                  title="Mobile Legend"
                  platform="mobile"
                  item={200}
                  price={290000}
                  status="pending"
                  image="overview-1"
                />
                <TableTransaction
                  title="Call of Duty"
                  platform="desktop"
                  item={300}
                  price={300000}
                  status="success"
                  image="overview-2"
                />
                <TableTransaction
                  title="Clash of Clans"
                  platform="mobile"
                  item={499}
                  price={100000}
                  status="failed"
                  image="overview-3"
                />
                <TableTransaction
                  title="Valorant"
                  platform="desktop"
                  item={1000}
                  price={1000000}
                  status="pending"
                  image="overview-4"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
