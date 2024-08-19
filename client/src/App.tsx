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
    <div>
      <div>
        <h3 className="text-center p-2 font-bold">
          Haber sayısı: {news.data?.length}
        </h3>
      </div>
      <div className="grid grid-cols-3 items-center  gap-3 w-max mx-auto">
        {news.data?.map((onenews) => (
          <NewsCard onenews={onenews} key={onenews.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
