export function formatHttpUrl(url: string): string {
    if (url.startsWith("https://") || url.startsWith("http://")) {
        return url
    }
    return "http://" + url
}

export function formatMailtoUrl(email: string): string {
    return "mailto:" + email
}

export function formatTelUrl(email: string): string {
    return "tel:" + email
}