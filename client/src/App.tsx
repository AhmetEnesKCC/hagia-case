import "./App.css";
import NewsCard from "./components/news/news-card";
import { trpc } from "./utils/trpc";
import { DotLoader } from "react-spinners";
import FilterSelect from "./components/common/filter-select";
import { useMemo, useState } from "react";
import LanguageToggle from "./components/layout/language-toggle";
import { useTranslation } from "react-i18next";

function NewsFilter({
  value,
  onValueChange,
}: {
  value: string;
  onValueChange: (value: string) => void;
}) {
  const { data } = trpc.getNews.useQuery();
  const { t } = useTranslation();
  return (
    <FilterSelect
      value={value}
      onValueChange={(v) => onValueChange(v === "Tümü" ? "" : v)}
      label={t("analyze")}
      placeholder={t("select_analyze")}
      items={[
        ...Array.from(
          new Set(data?.map((n) => n.analyze?.split(" ")[0] ?? ""))
        ),
        "Tümü",
      ]}
    />
  );
}

function App() {
  const news = trpc.getNews.useQuery();

  const [filter, setFilter] = useState<string>("");

  const filteredNews = useMemo(() => {
    return news.data?.filter((n) => n.analyze?.includes(filter));
  }, [news, filter]);

  const { t } = useTranslation();

  if (news.isLoading) {
    return (
      <div className="flex w-[100dvw] h-[100dvh] items-center justify-center">
        <DotLoader />
      </div>
    );
  }
  return (
    <div className="py-4">
      <div className="flex items-center justify-center gap-x-2">
        <NewsFilter value={filter} onValueChange={setFilter} />
        <LanguageToggle />
      </div>
      <div>
        <h3 className="text-center p-2 font-bold">
          {t("news_count")}: {filteredNews?.length}
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 items-center  gap-3 w-max mx-auto">
        {filteredNews?.map((onenews) => (
          <NewsCard onenews={onenews} key={onenews.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
