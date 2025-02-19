import styled from "styled-components";
import { human } from '../../../../assets'

const Container  = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px;
`

const MentFont = styled.div`
  text-align: right;  

  font-size: 64px;
  font-weight:  ${(props) => props.theme.font.weight.bold};
`

const userData = {
  name : '최정혁',
  // 티어 바꿔줄 가격?
}

const userTier = {
  ...userData,

}

function UserInfo()
{
    return (
      <Container>
        <MentFont>{userData.name}님은 <br />'청년창업가'입니다</MentFont>
        <img src={human} height="500px"></img>
      </Container>
    )
}

export default UserInfo;