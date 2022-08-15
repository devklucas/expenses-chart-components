import styled from 'styled-components'
 
const Container = styled.div`
    height: 100%;
    width:10%;
    display:flex;
    flex-direction: column;
    justify-content: end;
    align-items:center;
    .info{
        display:none;
    }
   :hover{
    .info{
        display:flex;
        align-items:center;
        justify-content: center;
        height: 30px;
        width: 180%;
        padding:5px;

        margin-bottom: 10px;
        background-color: var(--dark-brown);
        color:var(--very-pale-orange);
    }
   }
    div{
        height: calc(${(props) => props.value ? props.value : null }% - 2px);
        background-color: ${(props) => props.background ? "var(--cyan)" : "var(--soft-red)"};
        width:90%;
        border-radius:4px;
    }
    span{
        color:var(--medium-brown);
        margin-top:10px;
    }
`
export const Column = ({value, day, background}) => {
    return (
        <Container background={background} value={value}>
            <div className='info'>${value}</div>
            <div ></div>
            <span>{day}</span>
        </Container>
    )
}
