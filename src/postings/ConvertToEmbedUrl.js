function convertToEmbedUrl(url) {
    // Match the YouTube video ID from the URL
    const match = url.match(/(?:\?v=|\/embed\/|\/watch\?v=|\/watch\?feature=player_embedded&v=|\/youtu.be\/|\/ytscreeningroom\?v=|\/v\/|\/e\/|https:\/\/www.youtube.com\/embed\/|https:\/\/www.youtube.com\/v\/|https:\/\/www.youtube.com\/watch\?v=|https:\/\/www.youtube.com\/watch\?feature=player_embedded&v=|https:\/\/www.youtube.com\/youtu.be\/|https:\/\/www.youtube.com\/ytscreeningroom\?v=|https:\/\/www.youtube.com\/v\/)([^#\&\?]*).*/);

    if (match && match[1].length === 11) {
        // Construct embed URL
        return `https://www.youtube.com/embed/${match[1]}`;
    } else {
        // Invalid YouTube URL
        return null;
    }
}
