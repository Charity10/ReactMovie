import styled from 'styled-components';


export const Spinner = styled.div`
border: 5px solid lightGrey;
border-top: 5px solid medGrey;
border-radius: 50%;
width: 50px;
height: 50px;
animation: Spin 0.8s linear infinite;
margin: 20px auto;

@keyframes spin {
    0% {
        transform: rotate(0deg);

    }
    100% {
        transform: rotate(360deg);
        
    }
}
`;