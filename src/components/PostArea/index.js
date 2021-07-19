import styled from 'styled-components';
import Box from '../NewBox';

export const PostArea = styled(Box)`
ul{}

li{
    list-style:none;
    display:flex;
    flex-direction:column;
}
.post__op{
}
.post__op--link{
    text-decoration:none;
    display:flex;
    align-items:center;
}
.post__op--icon{
    width:50px;
    border-radius:50%;
}
.post__op--nick{
    margin-left:10px;
    font-size:20px;
    color: white;
}

.post__content{
    color: #666666;
}
.post__link{
    text-decoration:none;
    color: #fdfdfd;
}
.post__link:hover{
    color: goldenrod;
}
.post__image{
    align-self:center;
}`