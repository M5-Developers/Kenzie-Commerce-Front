import { useContext } from 'react';
import { AccountContext } from '../../contexts/accounts';
import NormalUserDashboard from '../../components/NormalUserDashboard';
import HeaderSignedIn from '../../components/HeaderSignedIn';
import SuperUserDashboard from '../../components/SuperUserDashboard';
import StaffDashboard from '../../components/StaffDashboard';

const Dashboard = () => {

  // get account context
  const accountContext = useContext(AccountContext);

  // destructure context variables
  const { isLoggedIn, isStaff, isSuperUser, isNormalUser } = accountContext;

  return (
    <>
      <HeaderSignedIn />

      {/* isSuperUser? */}
      {!isSuperUser && <SuperUserDashboard />}

      {/* isStaff? */}
      {!isStaff && <StaffDashboard />}
      <StaffDashboard />

      {/* isNormalUser? */}
      {!isNormalUser && <NormalUserDashboard />}


    </>
  )
}

export default Dashboard