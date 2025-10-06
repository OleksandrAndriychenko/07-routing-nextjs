import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import Notes from './Notes.client';

export default async function FilteredNotesPage({params}: {params: Promise<{ slug: string[] }>}) {
    const { slug } = await params;
    const tag = slug?.[0] || '';
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['notes', '', 1, tag],
        queryFn: () => fetchNotes('', tag, 1),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Notes initialTag={tag} />
        </HydrationBoundary>
    );
}


