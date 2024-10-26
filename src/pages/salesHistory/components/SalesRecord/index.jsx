import styled from "styled-components";
import React from "react";

import { useUser } from "../../../../hooks/useUser";
import { useCompanyData } from "../../../../hooks/useCompanyData";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 10px; // 열 사이의 간격
`;

const Header = styled.div`
  font-size: ${(props) => props.theme.font.size.large};
  font-weight: ${(props) => props.theme.font.weight.bold};
  color: ${(props) => props.theme.colors.grey.primary};
  text-align: center;
`;

const ItemsInfo = styled.div`
  font-size: ${(props) => props.theme.font.size.large};
  font-weight: ${(props) => props.theme.font.weight.bold};
  
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 90px; // 최대 너비 설정
`;

function SalesRecord() {
  const levelMap = { 상: 'HIGH', 중: 'MEDIUM', 하: 'LOW' };

  const { userData } = useUser();
  const { companyList } = useCompanyData();

  const DeletedComapnies = [
    {
      "userId": 1,
      "id": 1,
      "name": "My Company... with default logo",
      "description": "test for creating initial chart",
      "level": "HIGH",
      "leastOperatePeriod": "ONE_WEEK",
      "listedDate": null,
      "investmentAmount": 1000000,
      "initialStockPrice": 5000,
      "initialStockQuantity": null,
      "logo": {
        "id": null,
        "originalName": "default_logo.png",
        "mimeType": "image/png",
        "size": 2065,
        "meta": null,
        "url": "http://127.0.0.1:8080/files/company/default_logo"
      },
      "currentStockPrice": 100
    },
    {
      "userId": 1,
      "id": 2,
      "name": "My Company... with default logo",
      "description": "test for creating initial chart",
      "level": "HIGH",
      "leastOperatePeriod": "ONE_WEEK",
      "listedDate": null,
      "investmentAmount": 500000,
      "initialStockPrice": 5000,
      "initialStockQuantity": null,
      "logo": {
        "id": null,
        "originalName": "default_logo.png",
        "mimeType": "image/png",
        "size": 2065,
        "meta": null,
        "url": "http://127.0.0.1:8080/files/company/default_logo"
      },
      "currentStockPrice": 100
    },
    {
      "userId": 1,
      "id": 7,
      "name": "열심히 숨쉬기",
      "description": "1시간 동안 숨참기",
      "level": "HIGH",
      "leastOperatePeriod": "TWO_WEEK",
      "listedDate": null,
      "investmentAmount": 1000000,
      "initialStockPrice": 5000,
      "initialStockQuantity": null,
      "logo": {
        "id": null,
        "originalName": "default_logo.png",
        "mimeType": "image/png",
        "size": 2065,
        "meta": null,
        "url": "http://127.0.0.1:8080/files/company/default_logo"
      },
      "currentStockPrice": 100
    },
    {
      "userId": 1,
      "id": 8,
      "name": "열심히 밥먹기",
      "description": "감자튀김",
      "level": "HIGH",
      "leastOperatePeriod": "ONE_MONTH",
      "listedDate": null,
      "investmentAmount": 1000000,
      "initialStockPrice": 5000,
      "initialStockQuantity": null,
      "logo": {
        "id": null,
        "originalName": "default_logo.png",
        "mimeType": "image/png",
        "size": 2065,
        "meta": null,
        "url": "http://127.0.0.1:8080/files/company/default_logo"
      },
      "currentStockPrice": 100
    },
    {
      "userId": 1,
      "id": 9,
      "name": "열심히 술마시기",
      "description": "소주 한짝!!",
      "level": "HIGH",
      "leastOperatePeriod": "TWO_WEEK",
      "listedDate": null,
      "investmentAmount": 1000000,
      "initialStockPrice": 5000,
      "initialStockQuantity": null,
      "logo": {
        "id": null,
        "originalName": "default_logo.png",
        "mimeType": "image/png",
        "size": 2065,
        "meta": null,
        "url": "http://127.0.0.1:8080/files/company/default_logo"
      },
      "currentStockPrice": 100
    },
    {
      "userId": 1,
      "id": 12,
      "name": "열심히 자기",
      "description": "24시간 수면",
      "level": "LOW",
      "leastOperatePeriod": "ONE_MONTH",
      "listedDate": null,
      "investmentAmount": 1000000,
      "initialStockPrice": 5000,
      "initialStockQuantity": null,
      "logo": {
        "id": null,
        "originalName": "default_logo.png",
        "mimeType": "image/png",
        "size": 2065,
        "meta": null,
        "url": "http://127.0.0.1:8080/files/company/default_logo"
      },
      "currentStockPrice": 100
    }
  ]

  return (
    <>
      <div style={{padding: "0px 50px"}}>
        <Container style={{ borderBottom: "solid 3px", marginBottom: "30px"}}>
          <Header>회사명</Header>
          <Header>회사 설명</Header>
          <Header>상장일</Header>
          <Header>매각일</Header>
          <Header>상장가</Header>
          <Header>발행주식 수</Header>
          <Header>난이도</Header>
          <Header>상장비용</Header>
          <Header>회사매각가격</Header>
          <Header>회사매각손익</Header>
        </Container>
        <Container>
          {DeletedComapnies.map((data) => (
            <React.Fragment key={data.id} tyle={{ borderBottom: "solid 1px", marginTop: "30px", marginBottom: "30px" }}>
              <ItemsInfo>{data.name}</ItemsInfo>
              <ItemsInfo>{data.description}</ItemsInfo>
              <ItemsInfo>{data.listedDate || '정보 없음'}</ItemsInfo>
              <ItemsInfo>{data.saleDate || '정보 없음'}</ItemsInfo>
              <ItemsInfo>{data.initialStockPrice}</ItemsInfo>
              <ItemsInfo>{data.initialStockQuantity || 0}</ItemsInfo>
              <ItemsInfo>{levelMap[data.level]}</ItemsInfo>
              <ItemsInfo>{data.listingCost || '정보 없음'}</ItemsInfo>
              <ItemsInfo>{data.salePrice || '정보 없음'}</ItemsInfo>
              <ItemsInfo>{data.profitLoss || '정보 없음'}</ItemsInfo>
            </React.Fragment>
          ))}
        </Container>
      </div>
    </>
  )
}

export default SalesRecord;
