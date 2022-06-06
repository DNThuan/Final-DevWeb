import styled from '@emotion/styled'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    width: 14vmax;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: rgb(48, 48, 48);
    margin: 2vmax;
    transition: all 0.5s;
    padding-bottom: 0.5vmax;
    &:hover {
        box-shadow: 0 0 5px rgba(15, 15, 15, 0.26);
        transform: translateY(-1vmax);
    }
`

const Image = styled.img`
    width: 14vmax;
`;


const Info = styled.div`
    font-family: "Roboto";
    font-size: 2vmax;
    margin: 1vmax 0.5vmax;
    margin-bottom: 0;
    
`

const InfoItem = styled.p`
    text-transform: capitalize;
`

const Price = styled.span`
    margin: 0.5vmax;
    color: tomato;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 1.5vmax;
`

const ProductCard = ({ product }) => {
  return (
    <Fragment>
        <div key={product._id}>
            <StyledLink to={`/product/${product._id}`}>
                <Image src = {product.image} alt={product.name}/>
                <Info>
                    <InfoItem>{product.name}</InfoItem>
                    <InfoItem>{product.brand}</InfoItem>
                    <InfoItem>{product.color}</InfoItem>
                    <InfoItem>{product.strap}</InfoItem>
                </Info>
                <Price>Giá: {product.price}</Price>
            </StyledLink>
        </div>
    </Fragment>
  );
};

export default ProductCard;