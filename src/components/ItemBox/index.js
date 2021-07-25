import styled from 'styled-components';
import Box from '../NewBox';

export const ItemBox = styled(Box)`
display:flex;
flex-direction:row;
align-items: center;

div{
    display:flex;
    flex-direction: column;
    margin-left:10px;
    width:100%;
}

h2{
    align-self: center;
    font-size: 20px;
    margin-bottom: 1rem;
}


img{
    width: 30%;
    border-radius: 8px;
}
p{
    text-align: justify;
    color: #777777;

}
a{
    text-decoration:none;
    color: #fdfdfd;
    align-self: center;
}
a:hover{
    color: gold;

}
.hipsters__logo{
    width: 100%;
}
.alura__banner{
    width: 100%;
    padding:0px;
}
.alura__formation{
    border-radius:50%;
    align-self: center;
}
.alura__youtube_box{
    width: 100%;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
}
.alura__youtube_content{
width: 30%;
margin: 5px;
}
.alura__youtube_image{
    width:100%
}

iframe{
    width: 100%;
    margin-top: 1rem;
}
`