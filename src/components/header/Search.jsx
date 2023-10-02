import { Box, InputBase, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
background:#f0f5ff;
width:38%;
border-radius:2px;
margin-left:10px;
display:flex;
`;

const InputSearchBase = styled(InputBase)`
width: 100%;
padding: 0 16px;
border-radius: 2px 0 0 2px;
border: 0;
outline: 0 none;
font-size: 14px;
height: 36px;

`;

const SearchIconWrapper=styled(Box)`
   color:blue;
   padding: 5px 10px;
   display:flex;

`;
const Search = () => {
    return (
        <SearchContainer>
            <InputSearchBase
            placeholder="Search for products, brands and more"
             />
             <SearchIconWrapper>
                <SearchIcon />
             </SearchIconWrapper>
        </SearchContainer>
    )
}
export default Search;