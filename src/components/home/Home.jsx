import { Box } from "@mui/material";
import styled from "@emotion/styled";
import Banner from "./Banner";
import NavBar from "./Navbar";

const Component=styled(Box)`
padding:10px 10px;
background-color:#f2f2f2;
`;
const Home=()=>{
    return(
        <>
       <NavBar />
       <Component>
       <Banner />
       </Component>
      
       </>
    )
}
export default Home;