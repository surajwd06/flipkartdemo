import { Box,Typography } from '@mui/material';
import { navData } from '../../constent/data'
import styled from '@emotion/styled';

const Component=styled(Box)`
display:flex;
margin:55px 138px 0 138px;
justify-content:space-between;
`;

const Container=styled(Box)`
padding:12px 8px;
text-align:center;
`;
const Text=styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;

`;
const NavBar = () => {
    return (
        <Component>
            {
                navData.map((data,i) => {
                    const {url,text}=data;
                    return (
                        <Container key={i}>
                            <img src={ url} alt='' style={{width:64}} />
                            <Text>{text}</Text>
                        </Container>
                    )
                })

            }
        </Component>
    )
}
export default NavBar;