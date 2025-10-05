import axios from 'axios';
import type { Note, FormData, Category } from '../types/note';


axios.defaults.baseURL = "https://next-docs-9f0504b0a741.herokuapp.com/";
axios.defaults.headers.common.Authorization = `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`;


interface FetchNotesResponse {
    notes: Note[];
    total: number;
}


export const fetchNotes = async (searchText: string, categoryId: string, page: number) => {
    const response = await axios.get<FetchNotesResponse>("/notes", {
        params: {
            ...(searchText !== "" && { title: searchText }),
            ...(categoryId !== "" && { categoryId: categoryId }),
        page,
        },
    });
    return response.data;
};




export const createNote = async (newNote: FormData) => {
    const response = await axios.post<Note>("/notes", newNote);
    return response.data;
};



export const deleteNote = async (noteId: string) => {
    const response = await axios.delete<Note>(`/notes/${noteId}`);
    return response.data;
};


export const fetchNoteById = async (noteId: string) => {
    const response = await axios.get<Note>(`/notes/${noteId}`);
    return response.data;
};
export const getCategories = async () => {
    const { data } = await axios.get<Category[]>(`/categories`)
    return data
}