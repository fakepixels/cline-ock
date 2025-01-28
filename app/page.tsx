'use client';

import { WalletDefault } from '@coinbase/onchainkit/wallet';
import { FundCard } from '@coinbase/onchainkit/fund';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Wallet */}
        <div className="py-6">
          <div className="flex justify-end">
            <WalletDefault />
          </div>
        </div>

        {/* Hero Section */}
        <div className="py-16 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-200">
            Welcome to Base
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Experience the future of decentralized applications on Base.
          </p>

          {/* Fund Card Section */}
          <div className="mt-12 p-6 bg-gray-800/50 rounded-xl max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Need Crypto?</h2>
            <p className="text-gray-400 mb-4">
              Get started with crypto directly in the app using our secure onramp.
            </p>
            <FundCard
              assetSymbol="ETH"
              country="US"
              currency="USD"
              headerText="Purchase Ethereum"
              buttonText="Buy ETH"
            />
          </div>

          {/* Features Grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800/30 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Smart Wallet</h3>
              <p className="text-gray-400">
                Connect with your Coinbase Wallet for a seamless experience
              </p>
            </div>
            <div className="p-6 bg-gray-800/30 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Base</h3>
              <p className="text-gray-400">
                Built on Base for optimal development
              </p>
            </div>
            <div className="p-6 bg-gray-800/30 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">OnchainKit</h3>
              <p className="text-gray-400">
                Powered by Coinbase&apos;s OnchainKit for robust functionality
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
