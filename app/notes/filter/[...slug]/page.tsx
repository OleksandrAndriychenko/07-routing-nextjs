import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import Notes from './Notes.client';

export default async function FilteredNotesPage({ params }: { params: { tag?: string[] } }) {
    const queryClient = new QueryClient();
    const tag = params.tag?.[0] || '';

    await queryClient.prefetchQuery({
        queryKey: ['notes', '', 1, tag],
        queryFn: () => fetchNotes('', tag, 1),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Notes />
        </HydrationBoundary>
    );
}
// export default async function FilteredNotesPage({ params }: { params: { tag?: string[] } }) {
//   const queryClient = new QueryClient();
//   const tag = params.tag?.[0]; // catch-all → беремо перший елемент

//   const requestParams = tag && tag !== 'All notes' ? { tag } : undefined;

//   await queryClient.prefetchQuery({
//     queryKey: ['notes', '', 1, tag],
//     queryFn: () => fetchNotes(1, requestParams),
//   });

//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <Notes initialTag={tag} />
//     </HydrationBoundary>
//   );
// }


