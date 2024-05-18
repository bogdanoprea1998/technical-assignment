export const YoutubeIframe = ({
  videoId,
  className = "",
  isHighlight = false,
}: {
  videoId: string;
  className?: string;
  isHighlight?: boolean;
}) => {
  const embedUrlBase = `https://www.youtube.com/embed/${videoId}?`;
  const embedUrlFinal = isHighlight
    ? `${embedUrlBase}autoplay=1&mute=1&controls=0&loop=1&showinfo=0&rel=0`
    : `${embedUrlBase}autoplay=0&mute=1`;
  return (
    <div className={`${className}`}>
      <iframe
        className="w-full h-full"
        src={embedUrlFinal}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video Trailer"
      ></iframe>
    </div>
  );
};
