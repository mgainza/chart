import Chart from "./ui/components/donut-chart/chart";
import styles from "./page.module.css";
import Card from "./ui/components/Card/Card";

async function getData() {
  const res = await fetch("http://localhost:8080/results");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const COLORS = [
    "#9F9FFF",
    "#BBA9FF",
    "#D4B6FE",
    "#E9C1FF",
    "#FECEFE",
    "#FFE4F7",
  ];

  const dataServer = await res.json();

  // get Data for chart
  const enumKeys = [
    "rtbPercentage",
    "amaPercentage",
    "stsPercentage",
    "gfiPercentage",
    "tobPercentage",
    "wttPercentage",
  ];

  console.log(dataServer);

  const chartValues = enumKeys.map((key) => ({
    title: key,
    // @ts-ignore
    value: dataServer.results[key] as number,
  }));
  // order DESC
  const chartValuesSortedByValue = chartValues.sort(
    (a, b) => b.value - a.value
  );

  console.log(chartValuesSortedByValue)

  // add color for Chart

  const coloredData = chartValuesSortedByValue.map((entry, index) => ({
    ...entry,
    color: COLORS[index],
    order: index
  }));

  const row1 = coloredData.filter(e => [0, 1].includes(e.order));
  const row2 = coloredData.filter(e => [2, 5].includes(e.order));
  const row3 = coloredData.filter(e => [3, 4].includes(e.order));


  return [row1, row2, row3];
}

export default async function Home() {

  const dataServer = await getData();

  console.log(dataServer);

  const data1 = dataServer[0]
  
  const data2 = dataServer[1].reverse();
  
  const data3 = dataServer[2].reverse()

  const data = [...data1, ...data2, ...data3].sort(
    (a, b) => b.value - a.value
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={`${styles.container}`}>
        <div className={`${styles.chart}`}>
          <Chart
            size={200}
            data={data}
            paddingAngle={0}
            lineWidth={30}
            label={`${data[0].value}%`}
            labelPosition={0}
            radius={50}
            startAngle={180}
          />
        </div>
        <div className={`${styles.row}`}>
          {data1.map((x, index) => (
            <div className={`${styles.column}`}>
              <div className={`${styles.rectangle}`} key={index}>
                <Card
                  title={`Sales Data ${index}`}
                  content="Here is some sales data for the last quarter."
                  renderLeft={index === 0}
                  key={index}
                >
                  <Chart
                    data={[{ ...x }]}
                    paddingAngle={0}
                    lineWidth={25}
                    startAngle={180}
                    radius={50}
                    size={100}
                    labelPosition={0}
                    label={`${data1[index].value}%`}
                  />
                </Card>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.row2}`}>
          {data2.map((x, index) => (
            <div className={`${styles.column}`}>
              <div className={`${styles.rectangle2}`} key={index}>
                <Card
                  title={`Sales Data ${index}`}
                  content="Here is some sales data for the last quarter."
                  renderLeft={index === 0}
                >
                  <Chart
                    data={[{ ...x }]}
                    paddingAngle={0}
                    lineWidth={25}
                    startAngle={180}
                    radius={50}
                    size={100}
                    labelPosition={0}
                    label={`${data2[index].value}%`}
                  />
                </Card>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.row}`}>
          {data3.map((x, index) => (
            <div className={`${styles.column}`}>
              <div className={`${styles.rectangle}`} key={index}>
                <Card
                  title={`Sales Data ${index}`}
                  content="Here is some sales data for the last quarter."
                  renderLeft={index === 0}
                >
                  <Chart
                    data={[{ ...x }]}
                    paddingAngle={0}
                    lineWidth={25}
                    startAngle={180}
                    radius={50}
                    size={100}
                    labelPosition={0}
                    label={`${data3[index].value}%`}
                  />
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
