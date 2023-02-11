import styled from "styled-components";
import {motion} from "framer-motion"

const VideoContainer= styled(motion.div)`
display: flex;
flex-direction: row;
background-color: #ffffff;
border-radius: 20px;
color: #000000;
`;
const VideoImg = styled(motion.img)`
max-width:55%;
max-height: 100%;
object-fit: contain;
border-top-left-radius: ${(props)=>(props.Left? "20px":"0px")} ;
border-bottom-left-radius: ${(props)=>(props.Left? "20px":"0px")};
border-top-right-radius:${(props)=>(props.Right? "20px":"0px")};
border-bottom-right-radius:${(props)=>(props.Right? "20px":"0px")};
`;
const VidDscrContainer = styled.div`
display: flex;
flex-direction: column;
text-align: left;
gap: 30px;
width:100%;
height: 100%;
padding-top: 5%;
padding-left: 20px;
padding-right: 20px;
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
const WatchButton = styled(motion.div)`
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

export const VideoLeft = ()=>{
    return(
        <a to="https://www.youtube.com/watch?v=-nF12qPMaaw" href="https://www.youtube.com/watch?v=-nF12qPMaaw" target="_blank" rel="noreferrer">
        <VideoContainer whileHover={{ scale: 1.05, }}>
            
            <VideoImg src="./w1000-TW7oB8XJnb30ruGG.jpg" alt="Video image" Left={true} whileHover={{ scale: 1.2 }}/>
            
            <VidDscrContainer>
                <Title> OVERNIGHT IN WORLD'S FIRST UNDERWATER HOTEL!</Title>
                <VidDescription>This video is a video I edited for Beast Philanthropy. I really enjoyed working on this video, being able to see all the good they are doing.</VidDescription>
                <WatchButton whileHover={{ scale: 1.05, }}
            whileTap={{ scale: 1.2  }}>Watch Here</WatchButton>
            </VidDscrContainer>
        </VideoContainer>
        </a>
    )
}

export const VideoRight= ()=>{
    return(
        <a to="https://www.youtube.com/watch?v=-nF12qPMaaw" href="https://www.youtube.com/watch?v=-nF12qPMaaw" target="_blank" rel="noreferrer">
        <VideoContainer whileHover={{ scale: 1.05, }}>
            <VidDscrContainer>
                <Title> OVERNIGHT IN WORLD'S FIRST UNDERWATER HOTEL!</Title>
                <VidDescription>This video is a video I edited for Beast Philanthropy. I really enjoyed working on this video, being able to see all the good they are doing.</VidDescription>
                <WatchButton whileHover={{ scale: 1.05, }}
            whileTap={{ scale: 1.2  }}>Watch Here</WatchButton>
            </VidDscrContainer>
            <VideoImg src="./w1000-TW7oB8XJnb30ruGG.jpg" alt="Video image" Right={true} whileHover={{ scale: 1.2 }}/>
        </VideoContainer>
        </a>
    )
}

