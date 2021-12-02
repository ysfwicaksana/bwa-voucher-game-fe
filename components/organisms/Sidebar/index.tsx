import Profile from './profile';
import SidebarFooter from './sidebarfooter';
import Menu from './menu';

interface SidebarProps {
  activeMenu:
    | 'overview'
    | 'transaction'
    | 'messages'
    | 'card'
    | 'reward'
    | 'setting';
}
export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <Menu
            icon="overview"
            title="Overview"
            href="/member"
            active={activeMenu === 'overview'}
          />
          <Menu
            icon="transaction"
            title="Transaction"
            href="/member/transaction"
            active={activeMenu === 'transaction'}
          />
          <Menu
            icon="messages"
            title="Messages"
            href="/member"
            active={activeMenu === 'messages'}
          />
          <Menu
            icon="card"
            title="Card"
            href="/member"
            active={activeMenu === 'card'}
          />
          <Menu
            icon="reward"
            title="Reward"
            href="/reward"
            active={activeMenu === 'reward'}
          />
          <Menu
            icon="setting"
            title="Setting"
            href="/member/edit-profile"
            active={activeMenu === 'setting'}
          />
          <Menu icon="logout" title="Logout" href="/logout" />
        </div>
        <SidebarFooter />
      </div>
    </section>
  );
}
