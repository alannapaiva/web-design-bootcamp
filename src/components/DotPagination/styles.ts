import { styled } from "styled-components";

export const Container = styled.div`
    margin: 0;
    display: grid;
    place-items: center;
    background: gray;
    height: 100%;

.pager{
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.pager button{
    flex: 0 0 42px;
    height: 42px;
    border: 0;
    padding: 6px;
    background: transparent;
    cursor: pointer;
    transition: 0.4s;
}

.pager button span{
    display: block;
    height: 30px;
    width: 100%;
    border-radius: 15px;
    background: #383142;
    transition: 0.4s;
}

.pager button:focus{
    flex: 0 0 80px;
}

.pager button:focus span{
    background: pink;
}
`; 