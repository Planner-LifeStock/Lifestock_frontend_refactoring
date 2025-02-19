import styled from "styled-components";

import SellCompany from "../SellModal";
import { useUser } from "../../../../hooks/useUser";
import { useCompanyData } from "../../../../hooks/useCompanyData";

const Container = styled.div`
  margin-top: 5px;

  display: flex;
  flex-direction: column;
`

const FontContainer = styled.div`
  display: flex;
  align-items: center;

  margin-left: 50px;
  font-weight: ${(props) => props.theme.font.weight.bold};
`

const MinContainer = styled.div`
  display: flex;
`

const Font = styled.div`
  font-size: 40px;
  font-weight: ${(props) => props.theme.font.weight.bold};
`

const CompanyBox = styled.div`
  margin-top: 10px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between; /* 왼쪽 요소와 오른쪽 버튼 사이 공간 확보 */
  background-color: ${(props) => props.theme.colors.grey.border};
  border-radius: ${(props) => props.theme.border.radius.small};
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
`;

function MyCompany() {
  const { userData, setUserData } = useUser();
  const { companyList, setCompanyList, activeCompany, setActiveCompany } = useCompanyData();

  if (!companyList) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <>
        <Font style={{ marginRight: "auto", marginTop: "50px" }}>보유 회사</Font>
        <Container
          style={{
            borderRadius: "12px",
            padding: "10px",
            overflowY: "auto",
            backgroundColor: "#D3D3D3",
            height: "510px",
          }}
        >
          {companyList.map((item) => (
            <CompanyBox key={item.id}>
              <img
                src={item.logo.url}
                style={{ height: "12vh", borderRadius: "50%", marginLeft: "20px" }}
              />
              <MinContainer style={{ flexDirection: "column" }}>
                <MinContainer>
                  <FontContainer style={{ fontSize: "30px" }}>
                    {item.name}
                    <FontContainer style={{ fontSize: "18px" }}>
                      (회사 info) - {item.description}
                    </FontContainer>
                  </FontContainer>
                </MinContainer>
                <MinContainer>
                  <MinContainer style={{ flexDirection: 'column', marginTop: '10px' }}>
                    <FontContainer>
                      상장일:&nbsp;<span style={{ color: '#5A5A5A' }}>{item.listedDate}</span>
                    </FontContainer>
                    <FontContainer style={{ marginTop: '10px' }}>
                      발행주식 수:&nbsp;<span style={{ color: '#5A5A5A' }}>{item.initialStockQuantity}</span>
                    </FontContainer>
                  </MinContainer>
                  <MinContainer style={{ flexDirection: 'column', marginTop: '10px' }}>
                    <FontContainer>
                      상장가:&nbsp;<span style={{ color: '#5A5A5A' }}>{parseInt(item.initialStockPrice).toLocaleString()}원</span>
                    </FontContainer>
                    <FontContainer style={{ marginTop: '10px' }}>
                      현재가:&nbsp;<span style={{ color: '#5A5A5A' }}>{parseInt(item.currentStockPrice).toLocaleString()}원</span>
                    </FontContainer>
                  </MinContainer>
                  <MinContainer style={{ flexDirection: 'column', marginTop: '10px' }}>
                    <FontContainer>
                      창업비용:&nbsp;<span style={{ color: '#5A5A5A' }}>2,000,000원</span>
                    </FontContainer>
                    <FontContainer style={{ marginTop: '10px' }}>
                      회사가치:&nbsp;<span style={{ color: '#5A5A5A' }}>1,750,000원</span>
                    </FontContainer>
                  </MinContainer>
                </MinContainer>
              </MinContainer>
              <SellCompany item={ item }/>
            </CompanyBox>
          ))}
        </Container>
      </>
    </>
  );
}


export default MyCompany
