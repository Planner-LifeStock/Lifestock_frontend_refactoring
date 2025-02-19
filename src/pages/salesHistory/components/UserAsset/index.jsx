import React from 'react';
import styled from 'styled-components';

import { useUser } from '../../../../hooks/useUser';
import { useCompanyData } from '../../../../hooks/useCompanyData';
import { useNavigate } from 'react-router-dom';

const Contianer = styled.div`
  display: flex;
`

const FontBox = styled.div`
  font-weight: ${(props) => props.theme.font.weight.bold};
`

const BackButton = styled.button`
  height: 40px;
  width: 200px;
  border-radius: ${(props) => props.theme.border.radius.small};

  margin-top: 20px;

  background-color: ${(props) => props.theme.colors.blue.primary};
  color: #ffffff;
  
  font-size: ${(props) => props.theme.font.size.primary};
  font-weight: ${(props) => props.theme.font.weight.bold};

  transition: all 0.3s ease;

  &:focus {
    border: none;
    outline: none;
  }

  &:hover {
    opacity: ${props => (props.disabled ? 1 : 0.5)};
  }
`

const UserAsset = () => {

    const { userData, setUserData } = useUser();
    const { companyList, setComapnyList, activeCompany, setActiveCompany } = useCompanyData();
    const navigate = useNavigate();

    if(!userData)
        return <div>로딩 중...</div>

    return (
      <>
        <Contianer style={{flexDirection: "column", padding: "50px"}}>
          <Contianer style={{justifyContent: "space-between"}}>
            <FontBox style={{fontSize: "60px"}}>{userData.realName} 스톡옵션 매매 기록</FontBox>
            <BackButton onClick={() => navigate('/myasset')}>뒤로가기</BackButton>
          </Contianer>
          <div style={{alignSelf: "flex-start"}}>
            <FontBox style={{fontSize: "40px", marginTop: "20px"}}>
              총 손익 : <span style={{color: "blue", fontWeight: "bold", fontSize: "40px"}}>-275,000(-13.5%)</span>
            </FontBox>
          </div>
        </Contianer>
      </>
    )
}


export default UserAsset