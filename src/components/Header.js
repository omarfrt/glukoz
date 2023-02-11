import styled from "styled-components";

const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
padding-bottom: 0.75em;
padding-top: 0em;
width: 100%;
`;

const Logo = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
z-index: 2;
background-color: inherit;
`;

const TabsContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
z-index: 2;
background-color: inherit;
`;

const Tab =styled.a`
font-size: 1em;
letter-spacing: 0.1em;
display: block;
margin-right: .7em;
margin-left: .7em;
white-space: nowrap;
&:hover{
    text-decoration-line: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px;
    cursor: pointer;}
`


export const  Header = ()=>{
    return(
        <HeaderContainer>
            <Logo> <img src="./Logo.png" alt="Logo" style={{maxHeight: "138px"}}/> </Logo>
            <TabsContainer>
                <Tab>
                    Portfolio
                </Tab>
                <Tab>
                    About
                </Tab>
                <Tab>
                    Store
                </Tab>
                <Tab>
                    Email
                </Tab>
               
                </TabsContainer>
        </HeaderContainer>
    )
}

export default Header;