// pages/index.js

export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>
        <img src="https://img.icons8.com/color/48/bitcoin.png" alt="btc" style={{ verticalAlign: 'middle' }} />{' '}
        BTC On-Chain Dashboard
      </h1>

      <h2 style={{ marginTop: '40px' }}>
        <img src="https://img.icons8.com/color/48/stock-share.png" alt="price" style={{ verticalAlign: 'middle' }} />{' '}
        BTC 当前价格
      </h2>
      <p>USD: $110,743</p>
      <p>24小时变化：3.97%</p>

      <div style={{ marginTop: '40px' }}>
        <h2>🔥 爆仓热力图（来自 Coinglass）</h2>
        <iframe
          src="https://www.coinglass.com/LiquidationData"
          width="100%"
          height="600"
          style={{ border: '1px solid #ccc', borderRadius: '8px' }}
          title="Coinglass Liquidation Heatmap"
        />
        <p style={{ fontSize: '12px', color: '#666' }}>
          数据来源：<a href="https://www.coinglass.com/LiquidationData" target="_blank" rel="noopener noreferrer">Coinglass</a>
        </p>
      </div>

      <p style={{ marginTop: '60px', color: '#777' }}>更多链上指标模块即将上线...</p>
    </div>
  );
}
