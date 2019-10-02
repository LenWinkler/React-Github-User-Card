import styled from "styled-components";

export const CardDiv = styled.div`
    width: 40%;
    padding: 1rem;
    border: 2px solid lime;
    margin: 1rem;
`

export const CardImg = styled.img`
    width: 90%;
    border-radius: 8px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    filter: grayscale(90%);
`

export const CardP = styled.p`
    width: 90%;
    padding-left: 1.4rem;
    text-align: left;
    font-family: 'Press Start 2P', cursive;
    font-size: .7rem;
    line-height: 2;
`

// export const Cursor = styled.div`
//     height: 20px;
//     width: 10px;
//     background-color: lime;
// `

export default CardImg;