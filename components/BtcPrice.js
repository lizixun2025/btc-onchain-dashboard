"use client";
import { useEffect, useState } from "react";

export default function BtcPrice() {
  const [price, setPrice] = useState(null);
  const [change, setChange] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true"
    )
      .then((res) => res.json())
      .then((data) => {
        setPrice(data.bitcoin.usd.toLocaleString());
        setChange(data.bitcoin.usd_24h_change.toFixed(2));
      });
  }, []);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">📈 BTC 当前价格</h2>
      <p className="text-gray-700 text-lg">USD: ${price}</p>
      <p className={`text-sm ${change > 0 ? "text-green-500" : "text-red-500"}`}>
        24小时变化：{change}%
      </p>
    </div>
  );
}
