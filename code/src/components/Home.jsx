// import React from "react";
// import milify from "millify";
// import { Typography, Row, Col, Statistic } from "antd";
// import { Link } from "react-router-dom";
// const { Title } = Typography;
// import { useGetCryptosQuery } from "../services/cryptoApi";
// import Cryptocurrencies from "./Cryptocurrencies";
// import Loader from "./Loader";

// const Home = () => {
//   const { data, isFetching } = useGetCryptosQuery(10);
//   if (isFetching) return <Loader />;
//   const globalStats = data?.data?.stats;

//   return (
//     <>
//       <Title level={2} className="heading">
//         Global Crypto Stats
//       </Title>
//       <Row>
//         <Col span={12}>
//           <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
//         </Col>
//         <Col span={12}>
//           <Statistic
//             title="Total Exchanges"
//             value={milify(globalStats.totalExchanges)}
//           />
//         </Col>
//         <Col span={12}>
//           <Statistic
//             title="Total Market Cap"
//             value={milify(globalStats.totalMarketCap)}
//           />
//         </Col>
//         <Col span={12}>
//           <Statistic
//             title="Total 24h Volume"
//             value={milify(globalStats.total24hVolume)}
//           />
//         </Col>
//         <Col span={12}>
//           <Statistic
//             title="Total Markets"
//             value={milify(globalStats.totalMarkets)}
//           />
//         </Col>
//       </Row>
//       <div className="home-heading-container">
//         <Title level={2} className="home-title">
//           Top 10 Cryptocurrencies in the world
//         </Title>
//         <Title level={3} className="show-more">
//           <Link to="/cryptocurrencies">Show More</Link>
//         </Title>
//       </div>
//       <Cryptocurrencies simplified />
//     </>
//   );
// };

// export default Home;


import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import Loader from "./Loader";

const { Title } = Typography;

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  // Show loader if data is still fetching
  if (isFetching) return <Loader />;

  // Ensure globalStats is not undefined
  const globalStats = data?.data?.stats;

  // If no stats data is available, display a message
  if (!globalStats) {
    return <Title level={3}>No data available. Please try again later.</Title>;
  }

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats?.total || "N/A"} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(globalStats?.totalExchanges || 0)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(globalStats?.totalMarketCap || 0)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={millify(globalStats?.total24hVolume || 0)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(globalStats?.totalMarkets || 0)} />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
    </>
  );
};

export default Home;
