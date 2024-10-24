import VideoItem from "./videoItem";

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    channelTitle: string;
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

interface VideoResponse {
  items: Video[];
}

export default function VideoList({ videos }: { videos: VideoResponse }) {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {videos.items.map((video: Video) => {
        return (
          <div key={video.id.videoId}>
            <VideoItem video={video} />
          </div>
        );
      })}
    </div>
  );
}
