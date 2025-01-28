This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

1. Get your Client API Key from [Coinbase Developer Platform](https://docs.onchainkit.xyz/getting-started#get-your-client-api-key)
2. Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_ONCHAINKIT_API_KEY=YOUR_CLIENT_API_KEY
NEXT_PUBLIC_ONCHAINKIT_PROJECT_ID=YOUR_PROJECT_ID
```

### Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/providers.tsx`: Configuration for OnchainKit, Wagmi, and React Query providers
- `app/page.tsx`: Main landing page with wallet integration and onramp
- `app/layout.tsx`: Root layout with Geist font configuration
- `tailwind.config.ts`: Tailwind CSS configuration including Geist font families

## Learn More

- [OnchainKit Documentation](https://onchainkit.xyz/)
- [Cline](https://cline.bot/)
- [Base Network](https://docs.base.org/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
