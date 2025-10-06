import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import NoteModalPreview from './NotePreview.client';


export default async function ModalPage(paramsPromise: Promise<{ id: string }>) {
    const { id } = await paramsPromise;

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['note', id],
        queryFn: () => fetchNoteById(id),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NoteModalPreview noteId={id} />
        </HydrationBoundary>
    );
}
