import React from 'react';
import RoleSelect from '../../../../shared/roleSelect';

const roleList = [
  '관리자',
  '담임목사',
  '초원장',
  '목자'
];

const RoleSelectContainer = ({onChange, value = ''}) => {

  return (
        <RoleSelect 
          onChange={onChange} 
          roleList={roleList} 
          value={value}
        /> 

  )
}

export default RoleSelectContainer;