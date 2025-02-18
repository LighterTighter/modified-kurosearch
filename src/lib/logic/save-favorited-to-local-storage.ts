import { FAVORITED_ITEMS_NAME } from './favorited-items-name';
import loadFavoritedToLocalStorage from './load-favorited-from-local-storage';

const saveFavoritedToLocalStorage = (favorited: string) => {
	let favorites = loadFavoritedToLocalStorage();

	favorites = [...favorites, favorited];

	window.localStorage.setItem(FAVORITED_ITEMS_NAME, JSON.stringify(favorites));
};

export default saveFavoritedToLocalStorage;
