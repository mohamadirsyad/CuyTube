import VideoList from "@/components/videos/VideoList";
import { apiKey } from "@/constant";

async function fetchVideos(query: string) {
  const url = new URL(
    `https://www.googleapis.com/youtube/v3/search?q=${query}&key=${apiKey}`
  );

  url.searchParams.set("maxResults", "20");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("type", "video");

  try {
    const videos = await fetch(url);
    return videos.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function Videos({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const videos = await fetchVideos(searchParams.query);
  console.log(videos);
  return (
    <div>
      <div className="lg:mt-4 md:mt-3 sm:mt-2 mt-1">
        {/* video list */}
        <VideoList videos={videos} />
      </div>
    </div>
  );
}
