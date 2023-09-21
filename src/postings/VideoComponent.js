import React from 'react';
import convertToEmbedUrl from './ConvertToEmbedUrl';
function VideoComponent({ videoUrl }) {
    const embedUrl = convertToEmbedUrl(videoUrl);

    return (
        <div>
            {embedUrl ? (
                <iframe
                    width="560"
                    height="315"
                    src={embedUrl}
                    title="YouTube Video"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            ) : (
                <p>Invalid YouTube URL</p>
            )}
        </div>
    );
}

export default VideoComponent;