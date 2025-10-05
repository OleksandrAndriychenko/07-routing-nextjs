export type NoteTag = "75a21301-7cd7-4efc-b5ac-56764c181fc4" | "f7f89477-6e41-4dc5-bbd9-b723d9b1e9fe";



export interface Note {
    "id": string,
    "title": string,
    "content": string,
    "categoryId": string,
    "userId": string,
    "createdAt": string,
    "updatedAt": string,
    "category": {
        "name": "Work" | "Home"
    }
}
export interface FormData {
    title: string;
    content: string;
    categoryId: NoteTag;
}
    
export interface Category {
    "id": string,
    "name": string,
    "description": string,
    "createdAt": string,
    "updatedAt": string
}
