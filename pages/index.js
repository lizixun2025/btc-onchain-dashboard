// pages/index.js

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [price, setPrice] = useState(null);
  const [change, setChange] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true");
      const data = await res.json();
      setPrice(data.bitcoin.usd);
      setChange(data.bitcoin.usd_24h_change.toFixed(2));
    } catch (error) {
      console.error("获取价格失败:", error);
    }
  };

  useEffect(() => {
    fetchData(); // 初次加载
    const interval = setInterval(fetchData, 5000); // 每5秒更新一次
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>📊 BTC On-Chain Dashboard</h1>

      <h2>📉 BTC 当前价格</h2>
      {price ? (
        <>
          <p>USD: ${price.toLocaleString()}</p>
          <p>24小时变化: {change}%</p>
        </>
      ) : (
        <p>加载中...</p>
      )}

      <h2>🔥 爆仓热力图（来自 Coinglass）</h2>
      <iframe
        src="https://www.coinglass.com/pro/futures/CryptoFutures"
        width="100%"
        height="700px"
        style={{ border: "1px solid #ccc", borderRadius: "8px" }}
      ></iframe>

      <p style={{ marginTop: "30px", color: "gray" }}>更多链上指标模块即将上线...</p>
    </div>
  );
}
