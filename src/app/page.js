import LineChart from "./components/Chart";

export default function Home() {
  return (
    <>
      <h1 id="head">Atmospheric Particulate Matter Forecasting</h1>
      <div class="info">
        <div class="info-block1">
          <div class="quality" />
        </div>
        <div class="info-block1" />
        <div class="info-block2" />
      </div>
      <div class="graph-block">
        <div class="graph-data">
          <LineChart />
        </div>
      </div>
    </>
  );
}
