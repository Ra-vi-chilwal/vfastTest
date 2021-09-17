import React,{useState ,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'
// import { set } from 'core-js/core/dict'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow);
  const [access_role,setRole]= useState([navigation[0]]);



  useEffect(()=>{
    let role = localStorage.getItem("access_role");
    if(role ==="admin_role"){
      setRole([
        ...[navigation[1]],
        navigation[2],
        navigation[3],
        navigation[4]
        ,navigation[5],
        navigation[6],
        navigation[7],
        navigation[8],navigation[9]
      ]);
    }else if(role==="client_role")
    {
      setRole([navigation[9]])
    }
  },[])

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/Dashboard">
        <h2><i style={{color:"white"}}>VFast.pvt.ltd</i></h2>
        {/* <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        /> */}
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={access_role}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
