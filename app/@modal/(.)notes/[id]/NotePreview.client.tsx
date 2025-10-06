'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import Modal from '@/components/Modal/Modal';
import { useRouter } from 'next/navigation';
import type { Note } from '@/types/note';

interface Props {
    id: string;
}

export default function NoteModal({ id }: Props) {
    const router = useRouter();

    const { data, isLoading, isError } = useQuery<Note>({
        queryKey: ['note', id],
        queryFn: () => fetchNoteById(id),
    });

    const handleClose = () => router.back();

    return (
        <Modal onClose={handleClose}>
            <h1>Note preview</h1>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Failed to load note.</p>}
            {data && (
                <div>
                    <p><strong>Title:</strong> {data.title}</p>
                    <p><strong>Tag:</strong> {data.tag}</p>
                    <p><strong>Content:</strong> {data.content}</p>
                    <p><strong>Created:</strong> {new Date(data.createdAt).toLocaleString()}</p>
                </div>
            )}
        </Modal>
    );
}
