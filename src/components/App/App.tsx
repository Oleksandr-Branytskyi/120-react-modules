import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebouncedCallback } from "use-debounce";
import TaskList from "../TaskList/TaskList";
import Modal from "../Modal/Modal";
import SearchBox from "../SearchBox/SearchBox";
import SortFilter from "../SortFilter/SortFilter";
import TaskForm from "../TaskForm/TaskForm";
import { getTasks } from "../../services/taskService";
import { SortOrder } from "../../types/task";
import useModalControl from "../hooks/useModalControl";
import css from "./App.module.css";

export default function App() {
  const { isModalOpen, openModal, closeModal } = useModalControl();

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const { data, isLoading } = useQuery({
    queryKey: ["tasks", search, sortOrder],
    queryFn: () => getTasks(search, sortOrder),
  });

  const debounceSearch = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    300
  );

  const handleSortOrderChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSortOrder(event.target.value as SortOrder);
  };

  return (
    <div className={css.container}>
      <header className={css.header}>
        <SearchBox search={search} onChange={debounceSearch} />
        <strong>{sortOrder}</strong>
        <SortFilter sortOrder={sortOrder} onChange={handleSortOrderChange} />
        <button className={css.createButton} onClick={openModal}>
          Create task
        </button>
      </header>
      {isLoading && <strong className={css.loading}>Loading tasks...</strong>}
      {data && !isLoading && <TaskList tasks={data} />}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <TaskForm onSuccess={closeModal} />
        </Modal>
      )}
    </div>
  );
}
