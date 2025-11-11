import api from './api';

export const characterService = {
    getAll: async () => {
        try {
            const response = await api.get('/character');
            return response.data.results;
        } catch (error) {
            console.error('Erro ao carregar personagens:', error);
            throw error;
        }
    },

    getById: async (id) => {
        try {
            const response = await api.get(`/character/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Erro ao carregar personagem com ID ${id}:`, error);
            throw error;
        }
    }
};