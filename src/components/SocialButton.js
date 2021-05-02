const SocialButton = ({src, alt, text}) => (
    <div className="social">
        <a class="social-link" href="#">
            <img className="social-image" src={src} alt={alt} />
            <span className="social-text">Rejestracja przez {text}</span>
        </a>
    </div>
)

export default SocialButton;