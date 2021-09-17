import React from 'react';
// import AddressCheck from './views/Check/AddressCheck';
// import Employee from './views/employee/Employee';

// const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const ClientDashboard = React.lazy(() => import('./views/dashboard/ClientDahboard'));


const Employee = React.lazy(() => import('./views/employee/Employee'));

const ClientRegistration= React.lazy(()=>import('./views/legal/ClientRegistration'));
const VendorRegistration= React.lazy(()=>import('./views/legal/VendorRegistration'));

const AddressCheck= React.lazy(()=>import('./views/Check/AddressCheck'));
const AdvanceGapCheck= React.lazy(()=>import('./views/Check/AdvanceGapCheck'));
const CibilVerification= React.lazy(()=>import('./views/Check/CibilVerification'));
const CompanyVerification= React.lazy(()=>import('./views/Check/CompanyVerification'));

//client Data
const SingleCheck= React.lazy(()=>import('./views/caseIntiation/SingleCheck'));
const BulkCheck= React.lazy(()=>import('./views/caseIntiation/BulkCheck'));
const ClientList= React.lazy(()=>import('./views/opratiion/ClientList'));
const Registration= React.lazy(()=>import('./views/clientRegistration/Registration'));
//end client Data


const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/ClientDashboard', name: 'ClientDashboard', component: ClientDashboard },


  { path: '/Employee', name: 'Employee', component: Employee },

  {path: '/ClientRegistration', name: 'ClientRegistration', component:ClientRegistration},
  {path: '/VendorRegistration', name: 'VendorRegistration', component: VendorRegistration},

  {path: '/AddressCheck',name:'AddressCheck', component:AddressCheck},
  {path: '/AdvanceGapCheck',name:'AdvanceGapCheck', component: AdvanceGapCheck},
  {path: '/CibilVerification',name:'CibilVerification', component: CibilVerification},
  {path: '/CompanyVerification',name:'CompanyVerification', component: CompanyVerification},

  //client data
  {path: '/SingleCheck',name:'SingleCheck', component: SingleCheck},
  {path: '/BulkCheck',name:'BulkCheck', component: BulkCheck},
  {path: '/ClientList',name:'ClientList', component: ClientList},
  {path: '/Registration',name:'Registration', component: Registration},
  //end client data


  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
