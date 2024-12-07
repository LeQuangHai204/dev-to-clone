import { SearchIcon } from '~/components/icons/interactive';
import Article from '~/components/templates/article';
import SearchBar from '~/components/templates/searchbar';

const Content = ({}: {}) => {
    return (
        <div className='grow'>
            <div>
                <SearchBar />
            </div>
            <Article className='bg-yellow-500'>News</Article>
        </div>
    );
};

export default Content;
