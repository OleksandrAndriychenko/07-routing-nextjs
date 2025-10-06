'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import Modal from '@/components/Modal/Modal';
import { useRouter } from 'next/navigation';
import type { Note } from '@/types/note';

interface Props {
    noteId: string;
}

export default function NoteModal({ noteId }: Props) {
    const router = useRouter();

    const { data, isLoading, isError } = useQuery<Note>({
        queryKey: ['note', noteId],
        queryFn: () => fetchNoteById(noteId),
    });

    const handleClose = () => router.back();

    return (
        <Modal onClose={handleClose}>
            <h1>Note preview</h1>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Failed to load note.</p>}
            {data && <p>{data.title}</p>}
        </Modal>
    );
}
