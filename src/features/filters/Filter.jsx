import { useDispatch } from "react-redux";
import { statusFilterChanged, StatusFilters } from "./filtersSlice";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
export const StatusFilter = ({ status, onChange }) => {
  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key];
    const handleClick = () => onChange(value);
    const className = value === status ? "text-blue-500 font-bold" : "";

    return (
      <li key={value}>
        <button className={className} onClick={handleClick}>
          {key}
        </button>
      </li>
    );
  });

  return <ul className="flex gap-4">{renderedFilters}</ul>;
};

const Filter = () => {
  const dispatch = useDispatch();

  const { status } = useSelector((state) => state.filters);
  const onStatusChange = (status) => dispatch(statusFilterChanged(status));

  return <StatusFilter value={status} onChange={onStatusChange} />;
};

export default Filter;
