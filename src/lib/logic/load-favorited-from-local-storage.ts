import { FAVORITED_ITEMS_NAME } from './favorited-items-name';

const loadFavoritedToLocalStorage = (): string[] => {
	//@ts-ignore
	return JSON.parse(window.localStorage.getItem(FAVORITED_ITEMS_NAME)) as string[];
};

export default loadFavoritedToLocalStorage;
