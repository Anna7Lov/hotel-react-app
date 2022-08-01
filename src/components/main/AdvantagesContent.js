import Title from '../shared/Title';
import Text from '../shared/Text';
import Advantages from './Advantages';

import './AdvantagesContent.scss';

export default function AdvantagesContent() {

    const advantages = [
        { id: 10, title: 'Easy booking', text: 'The booking process should include minimal steps.', additionalClass: 'booking' },
        { id: 11, title: 'Friendly interface', text: 'A hotel booking engine with a good user-friendly.', additionalClass: 'interface' },
        { id: 12, title: 'Responsibility', text: 'You should be able to add rooms to your system.', additionalClass: 'responsibility' },
        { id: 13, title: 'Quick order supply', text: 'The booking process should include minimal steps.', additionalClass: 'quick-order' }
    ];

    return (
        <div className='advantages-content'>
            <div className='advantages-content__topic'>
            <Title title='Why you choose us!' />
            <Text additionalClass='advantages-content__text' text='Naturally, it’s becoming even more important for hotel and hospitality brands to stand out from the crowd. Content marketing remains a key way for hotels to do this.' />
            </div>
            <Advantages advantages={advantages} />
        </div>
    )
}