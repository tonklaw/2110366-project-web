import LineChart from "./components/Chart";
import Dropdown from './components/Dropdown';
import RadioBox from "./components/Radio";
import Controll from "./components/Controll";

export default function Home() {
  return (
    <main className="h-full m-6 flex flex-col items-center justify-center">
      <h1 className="mb-5 text-4xl font-medium text-gray-700">Atmospheric Particulate Matter Forecasting</h1>
      <div class="info flex justify-evenly w-[1280px]">
        <div class="info-block1 w-96 h-72 m-2.5 border border-gray-300 rounded-lg bg-white">
          <div class="quality" />
        </div>
        <div class="info-block1 w-96 h-72 m-2.5 border border-gray-300 rounded-lg bg-white" />
        <div class="info-block2 w-[700px] h-72 m-2.5 border border-gray-300 rounded-lg bg-white" />
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
