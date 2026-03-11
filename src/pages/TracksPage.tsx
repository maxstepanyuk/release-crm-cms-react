import { useQuery } from "@tanstack/react-query"
import type { Track } from "../models/track"

async function getTracks(): Promise<Track[]> {
    const res = await fetch("http://localhost:3000/tracks")
    return res.json()
}

function TracksPage() {
    const { isPending, error, data } = useQuery<Track[]>({
        queryKey: ['tracks'],
        queryFn: () => getTracks(),
    })

    if (isPending) return <div>Tracks page: loading...</div>
    if (error instanceof Error) return <div>Tracks page: an error has occurred: {error.message}</div>
    if (!data || data.length === 0) return <div>Tracks page: no tracks found.</div>

    const tracks = data.map((track) => (
        <li key={track.id}>
            <h2>Title: {track.title}</h2>
            <h3>Artist: {track.artistString}</h3>
            <h4>Year: {track.year}</h4>
        </li>
    ))

    return (
        <div>
            <h1>Tracks page</h1>
            <ul>{tracks}</ul>
        </div>
    )
}

export default TracksPage