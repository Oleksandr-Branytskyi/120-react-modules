import { useState } from "react";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import ReactPaginateImport from "react-paginate";

const ReactPaginate =
  (ReactPaginateImport as any).default ?? ReactPaginateImport;

import SearchForm from "../components/SearchForm/SearchForm";
import ArticleList from "../components/ArticleList/ArticleList";

import { fetchArticles } from "../cervices/articleService";

import css from "./App.module.css";

export default function App() {
  const [topic, setTopic] = useState("");
  // Algolia page is 0-based
  const [page, setPage] = useState(0);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["articles", topic, page],
    queryFn: () => fetchArticles(topic, page),
    enabled: topic.trim() !== "",
    placeholderData: keepPreviousData,
  });

  const handleSearch = (newTopic: string) => {
    setTopic(newTopic);
    setPage(0);
  };

  const handlePageClick = ({ selected }: { selected: number }) => {
    setPage(selected);
  };

  return (
    <>
      <SearchForm onSearch={handleSearch} />

      {isLoading && <p>Loading...</p>}
      {isError && <p>Oops! Something went wrong</p>}

      {isSuccess && data && (
        <>
          <ArticleList items={data.hits} />

          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            containerClassName={css.pagination}
            activeClassName={css.active}
            pageRangeDisplayed={5}
            pageCount={data.nbPages}
            forcePage={page}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </>
  );
}
