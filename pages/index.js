// index.js - BTC On-Chain Dashboard 全新结构版

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [btcData, setBtcData] = useState({ price: null, change: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true'
        );
        const data = await res.json();
        setBtcData({
          price: data.bitcoin.usd,
          change: data.bitcoin.usd_24h_change.toFixed(2),
        });
      } catch (err) {
        console.error('Error fetching BTC data:', err);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 font-sans">
      <h1 className="text-3xl font-bold mb-6">📊 BTC On-Chain Dashboard</h1>

      <Card className="mb-6">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">🪙 BTC 当前价格</h2>
          {btcData.price ? (
            <>
              <p className="text-lg">USD: ${btcData.price.toLocaleString()}</p>
              <p className="text-sm text-gray-600">24小时变化: {btcData.change}%</p>
            </>
          ) : (
            <p>加载中...</p>
          )}
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">🔥 爆仓热力图（来自 Coinglass）</h2>
          <iframe
            src="https://www.coinglass.com/pro/futures/Cryptofutures"
            width="100%"
            height="600"
            className="rounded border"
            title="Coinglass Liquidation Heatmap"
          />
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">📈 Exchange Netflow（来自 CryptoQuant）</h2>
          <iframe
            src="https://studio.glassnode.com/public-dashboard/9b245318-383e-4f4e-89dc-d40835a827d0"
            width="100%"
            height="500"
            className="rounded border"
            title="Exchange Netflow"
          />
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">📊 多空比（来自 Coinglass）</h2>
          <iframe
            src="https://www.coinglass.com/longShortRatio"
            width="100%"
            height="500"
            className="rounded border"
            title="Long Short Ratio"
          />
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">🐋 巨鲸行为追踪（来自 CryptoQuant）</h2>
          <iframe
            src="https://studio.glassnode.com/public-dashboard/49d0d3fc-5b2d-4efb-bb0b-7e4c95f3baef"
            width="100%"
            height="500"
            className="rounded border"
            title="Whale Watching"
          />
        </CardContent>
      </Card>

    </main>
  );
}
