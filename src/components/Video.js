import './Video.scss';

export default function Video() {
    return (
        <div className='Video'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/4vpJ2QHB-iY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}