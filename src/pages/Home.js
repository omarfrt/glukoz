import Header from "../components/Header";
import styled from "styled-components";
import Video from "../components/Video";

const HomeContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`

const PageDescription = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;

`;
const Title = styled.h1`
margin-bottom: 0.7em;
max-width: 1200px;
font-size: 1.8em;
text-transform: uppercase;
text-align: center;
letter-spacing: 0.1em;
font-weight: 400;
;
`
const TitleDescription = styled.h2`
margin-bottom: 1.1em;
max-width: 1200px;
text-align: center;
line-height: 28px;
font-size: 15px;
font-weight: 400;
`;
const Home = ()=>{
    return(
        <HomeContainer>
        <Header/>
        <PageDescription>
            <Title> Portfolio</Title>
            <TitleDescription>Below you can see just a couple of my favorite videos I have edited.</TitleDescription>
        </PageDescription>
        <Video/>
        <Video/>
        </HomeContainer>
    )
}

export default Home;