import styled from 'styled-components';

const SocialButton = ({src, alt, text}) => (
    <Social>
        <SocialLink href="#">
            <img src={src} alt={alt} />
            <SocialText>Rejestracja przez {text}</SocialText>
        </SocialLink>
    </Social>
)

export default SocialButton;

const Social = styled.div`
    width: 85%;
    padding: 10px;
    border: 1px solid #413fb5;
    border-radius: 5px;
    font-size: 1.05rem;
    font-weight: 500;
    padding: 10px;
    margin-bottom: 10px;
`

const SocialLink = styled.a`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-decoration: none;
    color: black;
`

 const SocialText = styled.span`
    margin-left: 15px;
`