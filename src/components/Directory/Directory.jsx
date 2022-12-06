import CategoryItem from '../CategoryItem/CategoryItem';
import './directory.scss';

const Directory = ({ categories }) => {
	return (
		<div className='App'>
			<div className='directory-container'>
				{categories.map(category => {
					return <CategoryItem key={category.id} category={category} />;
				})}
			</div>
		</div>
	);
};

export default Directory;
