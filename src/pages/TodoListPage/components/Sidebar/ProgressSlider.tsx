import { useDispatch } from "react-redux";
import { filterSelectedProgressChange } from "../../features/Filter/actions";

export type SelectedProgress = "all" | "finished" | "not-finished";

type InputValues = "0" | "1" | "2";

const mapValueToSelectedProgress: Record<InputValues, SelectedProgress> = {
  "0": "not-finished",
  "1": "all",
  "2": "finished",
};

export default function ProgressSlider() {
  const dispatch = useDispatch();

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const selectedProgress = mapValueToSelectedProgress[value as InputValues];
    dispatch(filterSelectedProgressChange(selectedProgress));
  };

  return (
    <div>
      <input
        className="appearance-none h-6 w-full cursor-pointer bg-transparent rounded-2xl overflow-hidden accent-accent bg-base-100"
        type="range"
        min="0"
        max="2"
        defaultValue="1"
        step="1"
        onChange={handleChange}
      />
      <div className="w-full flex text-xs px-2">
        <span className="flex-1">Not finished</span>
        <span className="flex-1 text-center">All</span>
        <span className="flex-1 text-right">Finished</span>
      </div>
    </div>
  );
}
