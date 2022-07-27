import './Text.scss';

export default function Text({additionalClass, text}) {
    return (        
        <p className={`Text ${additionalClass}`}>{text}</p>        
    )
}