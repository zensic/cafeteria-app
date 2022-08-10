import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
// import { BarChart } from "react-native-chart-kit";

const Reports = () => {

  const [data, setData] = useState(() => [])

  useEffect(() => {}, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 16 }}>Work in progress</Text>
      {/* <BarChart
        data={data}
        width={screenWidth}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      /> */}
    </View>
  );
};

export default Reports;
