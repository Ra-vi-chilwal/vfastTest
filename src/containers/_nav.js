import React from "react";
import CIcon from "@coreui/icons-react";


const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "VFAST",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavItem",
    name: "Employee",
    icon: "cil-calculator",
    to: "/Employee",

  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Legal",
    route: "/legal",
    // to: "/payout/FutuTransaction",
    icon: "cil-star",
     _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Client Registration",
        to: "/ClientRegistration",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Vendor Registration",
        to: "/VendorRegistration",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Opration",
    route: "/payout",
    // to: "/payout/ExecTransaction",
    icon: "cil-bell",
    _children:[
      {
        _tag: "CSidebarNavItem",
        name: "Team",
        to: "/ClientList",
      }
    ]
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Audit",
    route: "/payout",
    icon: "cil-puzzle",
    _children:[
      {
        _tag: "CSidebarNavItem",
        name: "Team",
        to: "/ClientRegistration",
      }
    ]

  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Client Relationship",
    route: "/Payout",
    icon: "cil-puzzle",
    _children:[
      {
        _tag: "CSidebarNavItem",
        name: "Team",
        to: "/ClientRegistration",
      }
    ]

  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Master Check',
    route: '/payout',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Address Check",
        to: "/AddressCheck"
      },
      {
        _tag: "CSidebarNavItem",
        name: "Advance Gap Check",
        to: "/AdvanceGapCheck"
      },
      {
        _tag: "CSidebarNavItem",
        name: "CIBIL Verification",
        to: "/CibilVerification"
      },
      {
        _tag: "CSidebarNavItem",
        name: "Company Verification",
        to: "/CompanyVerification"
      },
      {
        _tag: "CSidebarNavItem",
        name: "Drug Test",
        to: ""
      },
      {
        _tag: "CSidebarNavItem",
        name: "CIBIC Score",
        to: ""
      },
      {
        _tag: "CSidebarNavItem",
        name: "Employment Check",
        to: ""
      },
      {
        _tag: "CSidebarNavItem",
        name: "Company Check",
        to: ""
      },
      {
        _tag: "CSidebarNavItem",
        name: "OFAC",
        to: ""
      },
      {
        _tag: "CSidebarNavItem",
        name: "SSN",
        to: ""
      },
      {
        _tag: "CSidebarNavItem",
        name: "Gap Check",
        to: ""
      },
   ]
 },

 {
  _tag: "CSidebarNavDropdown",
  name: "Case Intiation",
  route: "/Payout",
  icon: "cil-puzzle",
  _children:[
    {
      _tag: "CSidebarNavItem",
      name: "Single Check",
      to: "/SingleCheck",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Bulk Check",
      to: "/BulkCheck",
    }
  ]

},
{
  _tag: "CSidebarNavDropdown",
  name: "Candidate",
  route: "/Payout",
  icon: "cil-puzzle",
  _children:[
    {
      _tag: "CSidebarNavItem",
      name: "List",
      to: "/ClientRegistration",
    },

  ]

},
{
  _tag: "CSidebarNavDropdown",
  name: "Client Registration",
  route: "/Payout",
  icon: "cil-puzzle",
  _children:[
    {
      _tag: "CSidebarNavItem",
      name: "Registration",
      to: "/Registration",
    },
  ]
},
];

export default _nav;
