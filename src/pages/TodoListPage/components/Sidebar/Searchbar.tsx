import { useDispatch } from "react-redux";

import { filterChagngeSearchedValue } from "../../features/Filter/actions";

export default function Searchbar() {
  const dispatch = useDispatch();

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterChagngeSearchedValue(value));
  };
  return (
    <input
      type="text"
      placeholder="Search"
      className="input w-full max-w-xs"
      onChange={handleChange}
    />
  );
}
