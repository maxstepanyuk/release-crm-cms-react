import { useQuery } from "@tanstack/react-query"
import type { Artist } from "../models/artist"
import { formatMailtoUrl, formatTelUrl, formatHttpUrl } from "../util/formatUrl"
import NavBar from "../components/NavBar"

async function getArtists(): Promise<Artist[]> {
    const res = await fetch("http://localhost:3000/artists")
    return res.json()
}

function ArtistsPage() {
    const { isPending, error, data } = useQuery<Artist[]>({
        queryKey: ['artists'],
        queryFn: () => getArtists(),
    })

    if (isPending) return <div>Artists page: loading...</div>
    if (error instanceof Error) return <div>Artists page: an error has occurred: {error.message}</div>
    if (!data || data.length === 0) return <div>Artists page: no artists found.</div>

    const artists = data.map((artist) => (
        <li key={artist.id}>
            <h2>Name: {artist.name}</h2>
            <h3>Legal Name: {artist.legalName}</h3>

            <div>
                {!artist.image ? (
                    <p>image: - </p>
                ) : (<>
                    <p>image: </p>
                    <img src={formatHttpUrl(artist.image)} alt={artist.name + " image"} />
                </>)}
            </div>

            <p>website: {artist.website ? (<a href={formatHttpUrl(artist.website)} target="_blank">{artist.website}</a>) : "-"}</p>
            <p>email: {artist.email ? (<a href={formatMailtoUrl(artist.email)}>{artist.email}</a>) : "-"}</p>
            <p>phone: {artist.phone ? (<a href={formatTelUrl(artist.phone)}>{artist.phone}</a>) : "-"}</p>

            <p>bio: {artist.bio || '-'}</p>
        </li>
    ))

    return (
        <>
            <NavBar />
            <main>
                <h1>Artists page</h1>
                <ul>{artists}</ul>
            </main>
        </>
    )
}

export default ArtistsPage