import styled from "styled-components";

const VideoContainer= styled.div`
display: flex;
flex-direction: row;
gap:20px;
background-color: #ffffff;
border-radius: 20px;
color: #000000;
`;
const VideoImg = styled.img`
max-width:55%;
max-height: 100%;
object-fit: contain;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
`;
const VidDscrContainer = styled.div`
display: flex;
flex-direction: column;
text-align: left;
gap: 30px;
width:100%;
height: 100%;
padding-top: 5%;
`;
const Title = styled.div`
font-size:18px;
text-transform: uppercase;
letter-spacing: 0.1em;
font-weight: 400;
&:hover{
    text-decoration-line: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px;
    cursor: pointer;
}
`;
const WatchButton = styled.div`
border-radius: 0.5em;
background: transparent;
border: 1px solid;
font-size: 1.1em;
text-decoration: none;
letter-spacing: 0.2em;
text-transform: uppercase;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;
padding: 0 !important;
width:176px;
height:47px;`;

const VidDescription = styled.div`
line-height: 170%;
`;

const Video = ()=>{
    return(
        <a to="https://www.youtube.com/watch?v=-nF12qPMaaw" href="https://www.youtube.com/watch?v=-nF12qPMaaw" target="_blank" rel="noreferrer">
        <VideoContainer>
            
            <VideoImg src="./w1000-TW7oB8XJnb30ruGG.jpg" alt="Video image" />
            
            <VidDscrContainer>
                <Title> OVERNIGHT IN WORLD'S FIRST UNDERWATER HOTEL!</Title>
                <VidDescription>This video is a video I edited for Beast Philanthropy. I really enjoyed working on this video, being able to see all the good they are doing.</VidDescription>
                <WatchButton>Watch Here</WatchButton>
            </VidDscrContainer>
        </VideoContainer>
        </a>
    )
}

export default Video;