import './Text.scss';

export default function Text({additionalClass, text}) {
    return (        
        <p className={`text ${additionalClass}`}>{text}</p>        
    )
}