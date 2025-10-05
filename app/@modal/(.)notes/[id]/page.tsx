import BackButton from '@/components/BackButton'
import { fetchNoteById } from '@/lib/api'

interface Props {
    params: Promise<{ noteId: string }>
}
const ModalPage = async ({ params }: Props) => {
    const { noteId } = await params
    const note = await fetchNoteById(noteId)

    return (
        <div>
            <h1>Modal preview</h1>
            {note && <p>{note.title}</p>}
            {/* <a href={`/notes/${note.id}`}>Full data</a> */}
            <BackButton />
        </div>
    )
}

export default ModalPage