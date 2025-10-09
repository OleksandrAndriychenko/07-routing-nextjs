import axios from 'axios';
import type { Note, FormData } from '../types/note';


axios.defaults.baseURL = "https://notehub-public.goit.study/api";
axios.defaults.headers.common.Authorization = `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`;


interface FetchNotesResponse {
    notes: Note[];
    totalPages: number;
}


export const fetchNotes = async (
    searchText: string,
    tag: string,
    page: number
    ): Promise<FetchNotesResponse> => {
        const response = await axios.get<FetchNotesResponse>('/notes', {
            params: {
            ...(searchText && { search: searchText }),
            ...(tag && tag !== 'All' && { tag }),
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


export const fetchNoteById = async (id: string) => {
    const response = await axios.get<Note>(`/notes/${id}`);
    return response.data;
};
