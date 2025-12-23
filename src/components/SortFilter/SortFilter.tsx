import type { SortOrder } from "../../types/task";

interface SortFilterProps {
  sortOrder: SortOrder;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function SortFilter({ sortOrder, onChange }: SortFilterProps) {
  return (
    <select value={sortOrder} onChange={onChange}>
      <option value="asc">Completed last</option>
      <option value="desc">Completed first</option>
    </select>
  );
}

export default SortFilter;
