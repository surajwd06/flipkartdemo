import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material';

// component
import Search from './Search';
import CustomButton from './CustomButton';

const StyledHeader = styled(AppBar)`
background:#ffffff;
height:55px;
`;

const Component = styled(Box)`
line-height:5px;
margin-left:8%;
`;
const SubHeading = styled(Typography)`
padding-left: 83px;
color:#9e9e9e;
font-size:12px;
font-style:italic;
font-weight:600;
`;
const PlusImage = styled('img')({
    padding: 4,
    width: 10,
    height: 10
})

const CustomButtonWrapper=styled(Box)`
margin:0 5% 0 auto;
`;

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg'
    const subURL = 'https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/plus-brand-bc165b.svg'
    
    return (
        <>
            <StyledHeader>
                <Toolbar style={{ minHeight: '55px' }}>
                    <Component>
                        <img src={logoURL} alt='' />
                        <Box style={{ display: 'flex' }}>
                            <SubHeading>Join&nbsp;
                                <Box component='span' style={{ color: "#ffc200" }}>Plus</Box>
                            </SubHeading>
                            <PlusImage src={subURL} alt='subLogo' />
                        </Box>
                    </Component>
                    <Search />
                    <CustomButtonWrapper>
                        <CustomButton/>
                    </CustomButtonWrapper>
                </Toolbar>
            </StyledHeader>
        </>
    )
}
export default Header;