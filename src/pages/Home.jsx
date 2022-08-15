import styled from "styled-components";
import Logo from "../assets/logo.svg";
import { Column } from "../components/column";
import Data from "../assets/data.json"
import { useState } from "react";

const Container = styled.div`
  height: 100vh;
  background-color: var(--cream);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HeaderBox = styled.section`
  width: 90%;
  max-width: 450px;
  height: 15%;
  background-color: var(--soft-red);
  margin-bottom: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--cream);
  div {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    height: 100%;
    justify-content: center;
    
    h1 {
      font-weight: 400;
      font-size: 1rem;
      margin-bottom: 10px;
    }
    span {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
  img {
    width: 40%;
    height: 40%;
        
  }
  
`;
const MainBox = styled.section`
  width: 90%;
  max-width: 450px;
  height: 60%;
  background-color: var(--very-pale-orange);
  border-radius: 8px;
  h2 {
    font-size: 18px;
    margin: 10px auto;
    width: 90%;
  }
  hr {
    width: 90%;
    margin: 10px auto;
  }
`;
const GraphArea = styled.div`
  height: 60%;
  width: 90%;
  margin: 10px auto;
  display:flex;
  justify-content: space-between;
`;
const DescriptionBox = styled.aside`
  display: flex;
  width: 90%;
  height: 20%;
  justify-content: space-between;
  margin: 10px auto;
  .total {
    align-self:flex-end;
    h3{
        font-weight:400;
        color:var(--medium-brown);
        margin-bottom:10px;
        font-size:1rem;
    }
    span{
        font-weight:bold;
        font-size:2rem;
    }
  }
  .balance {
    align-self: flex-end;
    text-align: right;
    span{
        font-weight: bold;
        
    }
    p{
        color:var(--medium-brown);
    }
  }
`;
const Home = () => {
  const [date, setDate] = useState(Data)

  const total = Data.reduce((a,b)=> a + b.amount,0)
  const Max = Data.reduce((a, b) => (Math.max(a, b.amount)), -Infinity);

  return (
    <Container>
      <HeaderBox>
        <div>
          <h1>My balance</h1>
          <span>${total}</span>
        </div>
        <img src={Logo} alt="logo" />
      </HeaderBox>
      <MainBox>
        <h2>Spending - Last 7 days</h2>
        <GraphArea>
          {date.map((item, id)=>(
            <Column key={id} value={item.amount} day={item.day} background={item.amount == Max ? true : false } />
          ))}
        </GraphArea>
        <hr />
        <DescriptionBox>
          <div className="total">
            <h3>Total this month</h3>
            <span>${total}</span>
          </div>
          <div className="balance">
            <span>+2.4%</span>
            <p>from last month</p>
          </div>
        </DescriptionBox>
      </MainBox>
    </Container>
  );
};
export default Home;
