export const YoutubeIframe = ({
  videoId,
  className = "",
}: {
  videoId: string;
  className: string;
}) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&showinfo=0&rel=0`;
  return (
    <div className={`${className}`}>
      <iframe
        className="w-full h-full"
        src={embedUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video Trailer"
      ></iframe>
    </div>
  );
};
