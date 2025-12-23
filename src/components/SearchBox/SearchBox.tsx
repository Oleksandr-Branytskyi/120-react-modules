import css from "../SearchBox/SearchBox.module.css";

interface SearchBoxProps {
  search: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBox({ search, onChange }: SearchBoxProps) {
  return (
    <input
      type="text"
      defaultValue={search}
      className={css.searchInput}
      onChange={onChange}
    />
  );
}
export default SearchBox;
