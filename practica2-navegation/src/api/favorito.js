import AsyncStorage from '@react-native-async-storage/async-storage';
import { includes, pull, push } from 'lodash'
import { ENV } from '../utils/constants'

export const getFavoriteApi = async () => {
    try {
        const response = await AsyncStorage.getItem(ENV.STORAGE.FAVORITE);
        if (response === null ) {
            return response;
        } else {
            return JSON.parse(response || []);
        }
    } catch (error) {
        console.log(error);
    }
}

export const addFavoriteApi = async (id) => {
    try {
        const response = await getFavoriteApi();
        console.log(response);
        let favorites;

        if (response === null) {
            favorites = [];
        } else {
            favorites = response;
            favorites.push(id);
        }

        await AsyncStorage.setItem(ENV.STORAGE.FAVORITE, JSON.stringify(favorites));
    } catch (error) {
        console.log(error);
    }
}

export const isFavoriteApi = async (id) => {
    try {
        const favorites = await getFavoriteApi();;
        return includes(favorites, id);
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const removeFavoriteApi = async (id) => {
    try {
        const favorites = await getFavoriteApi();;
        const newFavorites = pull(favorites, id);
        await AsyncStorage.setItem(ENV.STORAGE.FAVORITE, JSON.stringify(newFavorites));
    } catch (error) {
        console.log(error);
    }
}

export const elimarStorageFavorite = async () => {
    try {
        await AsyncStorage.removeItem(ENV.STORAGE.FAVORITE);
    } catch (error) {
        console.log(error)
    }
}

export const agragarTodosFavoritos = async (favorites) => {
    try {
        await AsyncStorage.setItem(ENV.STORAGE.FAVORITE, JSON.stringify(favorites));
    } catch (error) {
        console.log(error);
    }
}