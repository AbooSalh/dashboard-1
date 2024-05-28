import { Row1 } from "./Row1";
import { Row2 } from "./Row2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export const Dashboard = () => {
  return (
    <div className="w-full p-5 flex flex-col  h-[calc(100vh-72px)]  overflow-y-scroll">
      <div className="w-full flex justify-end">
        <button className="btn rounded dark:bg-slate-600 p-2">
          {<FontAwesomeIcon icon={faDownload} />}
          Download Reports
        </button>
      </div>
      <Row1 />
      <Row2 />
    </div>
  );
};
