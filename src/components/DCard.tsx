import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DCard = ({ content }) => {
  const boxClasses =
    "w-[333px] dark:bg-slate-700 flex row justify-between p-2 rounded-lg grow";

  return (
    <div className={boxClasses}>
      <div className="flex flex-col items-start gap-2">
        <FontAwesomeIcon
          icon={content.icon}
          className="text-pink-400"
          size="xl"
        />
        <p>{content.value}</p>
        <p>{content.valueLabel}</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="chart">{content.chart}</div>
        <p>{content.increase}</p>
      </div>
    </div>
  );
};

export default DCard;
