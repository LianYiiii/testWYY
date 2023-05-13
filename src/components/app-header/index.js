import React, { memo } from 'react';
// import {NavLink} from 'react-router-dom'

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';

const HYAppHeader = memo(() => {
  return (
    <HeaderWrapper>
        <div className='content wrap-v1'>
          <HeaderLeft>
            {/* <NavLink to='/'></NavLink> */}
          </HeaderLeft>
          <HeaderRight>

          </HeaderRight>
        </div>
        <div className='divider'></div>
    </HeaderWrapper>
  )
})

export default HYAppHeader