import './MainTitle.scss';

export default function MainTitle({ additionalClass, title, word }) {
    return (
        <h1 className={`main-title ${additionalClass}`}>{title}{' '}<span className='main-title__word'>{word}</span></h1>        
    )
}