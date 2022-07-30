import './MainTitle.scss';

export default function MainTitle({ title, word }) {
    return (
        <h1 className='main-title'>{title}{' '}<span className='main-title__word'>{word}</span></h1>        
    )
}