import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState, useEffect, useMemo } from 'react'
import { userRequest } from "../../requestMethods";
export default function Home() {
  const [userState, setUserState] = useState([])
  const MONTHS = useMemo(() => [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ], [])
  useEffect(() => {
    const getState = async () => {
      try {
        const res = await userRequest.get('/users/stats')
        res.data.map((item) => {
          setUserState((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total }
          ])
        })
      } catch (error) {
      }
    }
    getState()
  }, [MONTHS])

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userState} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
