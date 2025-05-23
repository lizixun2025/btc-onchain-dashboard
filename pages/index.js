import React, { useEffect, useState } from 'react';

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
    const interval = setInterval(fetchData, 5000); // 5秒刷新
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>📊 BTC On-Chain Dashboard</h1>

      <h2>📉 BTC 当前价格</h2>
      {btcData.price ? (
        <>
          <p>USD: ${btcData.price.toLocaleString()}</p>
          <p>24小时变化: {btcData.change}%</p>
        </>
      ) : (
        <p>加载中...</p>
      )}

      <h2 style={{ marginTop: '40px' }}>🔥 爆仓热力图（来自 Coinglass）</h2>
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', marginBottom: '40px' }}>
        <iframe
          src="https://www.coinglass.com/pro/futures/Cryptofutures"
          width="100%"
          height="600"
          style={{ border: 'none' }}
          title="Coinglass Liquidation Heatmap"
        />
      </div>

      <h2>📈 Exchange Netflow（来自 CryptoQuant）</h2>
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', marginBottom: '40px' }}>
        <iframe
          src="https://www.coinglass.com/pro/bitcoin/exchange/inflow"
          width="100%"
          height="600"
          style={{ border: 'none' }}
          title="CryptoQuant Exchange Netflow"
        />
      </div>

      <h2>📊 多空比（来自 Coinglass）</h2>
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', marginBottom: '40px' }}>
        <iframe
          src="https://www.coinglass.com/pro/coinchart/longshort_ratio"
          width="100%"
          height="600"
          style={{ border: 'none' }}
          title="Long Short Ratio"
        />
      </div>

      <h2>🐋 巨鲸行为追踪（来自 CryptoQuant）</h2>
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', marginBottom: '40px' }}>
        <iframe
          src="https://www.coinglass.com/pro/bitcoin/whales"
          width="100%"
          height="600"
          style={{ border: 'none' }}
          title="Whale Activity"
        />
      </div>

      <h2>🏦 ETF资金流向（来自 SoSoValue）</h2>
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
        <iframe
          src="https://www.sosovalue.com/en/etf/btc" 
          width="100%"
          height="600"
          style={{ border: 'none' }}
          title="ETF Flows"
        />
      </div>
    </div>
  );
}
