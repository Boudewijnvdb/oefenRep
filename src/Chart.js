import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup, VictoryLine, VictoryLegend } from 'victory';

const Chart = props => {
    return (
        <div>
            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={10}
                width={700}
                height={200}
            >
                <VictoryLegend
                    x={260} y={10}
                    orientation="horizontal"
                    data={[{ name: "Leuk", symbol: { fill: "#364e5e" } },
                    { name: "Moeilijkheid", symbol: { fill: "#49b29c" } }]}
                />

                <VictoryAxis
                    label="Opdracht"
                    style={{
                        tickLabels: { angle: 90, fontSize: 6 },
                        axisLabel: { padding: 35 }
                    }}
                />
                <VictoryAxis
                    dependentAxis
                    style={{
                        tickLabels: { fontSize: 6 },
                        axisLabel: { padding: 25 }
                    }}
                    tickFormat={(x) => (`${x / 1}`)}
                    label="Score"
                />
                <VictoryGroup offset={3}
                    colorScale={"qualitative"}>

                    <VictoryBar
                        data={props.Scores}
                        x="opdracht"
                        y="leuk"
                    />
                    <VictoryBar
                        data={props.Scores}
                        x="opdracht"
                        y="moeilijkheid"
                    />
                </VictoryGroup>
            </VictoryChart >


            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={10}
                width={700}
                height={200}
            >
                <VictoryAxis
                    label="Opdracht"
                    style={{
                        tickLabels: { angle: 90, fontSize: 6 },
                        axisLabel: { padding: 35 }
                    }}
                />
                <VictoryAxis
                    dependentAxis
                    style={{
                        tickLabels: { fontSize: 6 },
                        axisLabel: { padding: 25 }
                    }}
                    tickFormat={(x) => (`${x / 1}`)}
                    label="Score"
                />
                <VictoryGroup offset={3}
                    colorScale={"qualitative"}>

                    <VictoryLine
                        data={props.Scores}
                        x="opdracht"
                        y="leuk"
                    />
                    <VictoryLine
                        data={props.Scores}
                        x="opdracht"
                        y="moeilijkheid"
                    />
                </VictoryGroup>
            </VictoryChart >
        </div>
    )
}

export default Chart;