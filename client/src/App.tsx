import "./App.css";
import NewsCard from "./components/news/news-card";
import { trpc } from "./utils/trpc";
import { DotLoader } from "react-spinners";

function App() {
  const news = trpc.getNews.useQuery();
  if (news.isLoading) {
    return (
      <div className="flex w-[100dvw] h-[100dvh] items-center justify-center">
        <DotLoader />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-3">
      {news.data?.map((onenews) => (
        <NewsCard key={onenews.id} />
      ))}
    </div>
  );
}

export default App;
