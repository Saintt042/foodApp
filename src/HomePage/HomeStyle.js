import styled from 'styled-components';

export const Container = styled.div`
	border: 1px solid red;
	margin: 200px 0 20px 0;
    display: flex;
		align-items: center;
        justify-content: center;
        
    

	ul {
		display: flex;
        gap: 60px;
        text-align: center;
		align-items: center;
		justify-content: center;
		li {
            border: 1px solid black;
            text-align: center;
width: 250px;
height: 80px;
left: 460px;
top: 548px;

background: #FFFFFF;
border-radius: 2px;
			font-size: clamp(1rem, 1.5vw, 2.25rem);
			cursor: pointer;
			:hover {
				color: rgba(160, 34, 121, 1);
				transform: scale(1.02);
			}
		}
        .btn {
            text-align: center;
        }
h1 {
    
		align-items: center;
		
}
		

	}
	// @media screen and (max-width: 815px) {
	// 	padding: 20px 3%;
	// }
	@media screen and (max-width: 660px) {
		ul {
			display: none;
		}
		
	}
`;