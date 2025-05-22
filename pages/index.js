import Head from 'next/head';
import BtcPrice from '../components/BtcPrice';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Head>
        <title>BTC On-Chain Dashboard</title>
      </Head>

      <h1 className="text-2xl font-bold text-center mb-6">📊 BTC On-Chain Dashboard</h1>

      {/* 实时价格展示组件 */}
      <BtcPrice />

      {/* 后续模块可以继续添加在这里 */}
      <div className="text-center text-gray-500 mt-10">
        更多链上指标模块即将上线...
      </div>
    </div>
  );
}
