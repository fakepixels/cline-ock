'use client';

import { WalletDefault } from '@coinbase/onchainkit/wallet';
import { FundCard } from '@coinbase/onchainkit/fund';
import { useLanguage } from './contexts/language-context';
import { LanguageSwitcher } from './components/language-switcher';

export default function Home() {
  const { messages } = useLanguage();
  
  if (!messages || !messages.features) {
    return <div>Loading...</div>;
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Wallet */}
        <div className="py-6">
          <div className="flex justify-between items-center">
            <LanguageSwitcher />
            <WalletDefault />
          </div>
        </div>

        {/* Hero Section */}
        <div className="py-16 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-200">
            {messages.welcome}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {messages.hero_description}
          </p>

          {/* Fund Card Section */}
          <div className="mt-12 p-6 bg-gray-800/50 rounded-xl max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">{messages.need_crypto}</h2>
            <p className="text-gray-400 mb-4">
              {messages.get_started}
            </p>
            <FundCard
              assetSymbol="ETH"
              country="US"
              currency="USD"
              headerText={messages.buy_eth}
              buttonText={messages.buy}
            />
          </div>

          {/* Features Grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800/30 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">{messages.features.wallet.title}</h3>
              <p className="text-gray-400">
                {messages.features.wallet.description}
              </p>
            </div>
            <div className="p-6 bg-gray-800/30 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">{messages.features.base.title}</h3>
              <p className="text-gray-400">
                {messages.features.base.description}
              </p>
            </div>
            <div className="p-6 bg-gray-800/30 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">{messages.features.onchainkit.title}</h3>
              <p className="text-gray-400">
                {messages.features.onchainkit.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
