import LineChart from "./components/Chart";
import Dropdown from './components/Dropdown';
import RadioBox from "./components/Radio";
import Controll from "./components/Controll";
import Quality from "./components/Quality";
import Dust from "./components/Dust";
import RealTimeClock from "./components/Information";

export default function Home() {
  return (
    <main className="h-full mt-16 flex flex-col items-center justify-center content-center">
      <h1 className="mb-5 text-4xl font-medium text-gray-700">Atmospheric Particulate Matter Forecasting</h1>
      <div class="info flex justify-evenly w-[1280px]">
          <Quality />
          <Dust />
        <div class="info-block2 w-[700px] h-48 m-2.5 border border-gray-300 rounded-lg bg-white">
          <RealTimeClock />
          <div className="flex flex-col pl-4 pt-2">
            <div>Group member</div>
            <div>Person 1</div>
            <div>Person 2</div>
            <div>Person 3</div>
            <div>Person 4</div>
          </div>
        </div>
        </div>
      <div class="graph-block w-[1260px] h-[420px] m-2.5 p-4 flex items-center justify-evenly border border-gray-300 rounded-lg bg-white">
        <div className="graph-data w-[900px] h-[400px]">
          <LineChart />
        </div>
        <div className="flex flex-col items-center justify-center w-[450px] gap-4">
          <Dropdown />
          <RadioBox />
          <Controll />
        </div>
      </div>
    </main>
  );
}
