import { Box, filter, Image } from "@chakra-ui/react";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { fetchAnalyticsData } from "../../api/analytics";
import { AnalyticChart } from "../../components/analytic-chart";
import { AnalyticHighlights } from "../../components/analytic-highlights";
import { DatePicker } from "../../components/date-picker";

export function Dashboard() {
  const [startDate, setStartDate] = useState(moment().format('YYYY-MM-DD'));
  const [endDate, setEndDate] = useState(moment().format('YYYY-MM-DD'));
  const [data, setData] = useState<any>([]);
  const fetchData = async () => {
    let data = await fetchAnalyticsData();
    setData(data);
  };

  const filterData = () => {
    return data.filter((item: any) => {
        return moment(item.date).isSameOrAfter(startDate) && moment(item.date).isSameOrBefore(endDate)
    })
  }
  const getTotalCount = (key: string) => {
    let total = 0
    filterData().forEach((item: any) => {
        total += Number(item[key])
    })
    return total
  }
  useEffect(() => {
    console.log(filterData())
  },[startDate,endDate])
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box style={styles.container}>
      <Box style={styles.filterContainer}>
        <DatePicker
          value={startDate}
          onChange={(value: string) => {
            setStartDate(value);
          }}
        />
        <DatePicker
          value={endDate}
          onChange={(value: string) => {
            setEndDate(value);
          }}
        />
      </Box>
      <Box style={{display:'flex', gap: 16}}>
        <AnalyticHighlights
          title="Total clicks"
          value={getTotalCount('clicks').toFixed(2)}
          icon={
            <Image
              src="http://cdn.onlinewebfonts.com/svg/img_225549.png"
              width={20}
              height={20}
            />
          }
        />
        <AnalyticHighlights
          title="Total impressions"
          value={getTotalCount('impressions')}
          icon={
            <Image
              src="http://cdn.onlinewebfonts.com/svg/img_225549.png"
              width={20}
              height={20}
            />
          }
        />
      </Box>
      <AnalyticChart data={filterData()} />
    </Box>
  );
}

const styles = {
  container: {
    padding: 40,
  },
  filterContainer: {
    display: "flex",
    gap: 16,
    marginBottom: 32,
  },
};
