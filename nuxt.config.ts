import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          charset: 'utf-8',
        },
      ],
      link: [
        {
          // Bootstrap
          rel: 'stylesheet',
          href: '	https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
        },
        {
          // Bootstrap icons
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css',
        },
        {
          // Custom
          rel: 'stylesheet',
          href: '/css/custom.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
        },
      ],
    },
  },
  components: false,
  css: ['vue-toastification/dist/index.css'],
  modules: ['@pinia/nuxt', '@vueuse/nuxt'],
  router: {
    options: {
      hashMode: false,
    },
  },
  runtimeConfig: {
    public: {
      activityPointsAddress: '',
      airdropApAddress: '', // chat token claim for APs
      airdropClaimDomainsAddress: '', // chat token claim for domain holders
      arweaveAddress: process.env.ARWEAVE_ADDRESS,
      arweaveGateway: 'https://arweave.net/',
      arweaveMinBalance: 0.02, // minimum AR balance to upload files
      blockExplorerBaseUrl: "https://flare-explorer.flare.network",
      chat: {
        contexts: {
          general: '0xc7491B7E4ddc777A60Ce5F52BCBD03e90b8b65Af', // general discussion channel
          memesImages: '0xB30979406EBC8145141dEa9C07D56945B08131EB',
          shill: '0x6DffDac80732bF1b489e270771a24C609cdB0821',
          nftLaunchpad: '0x1FF832a58C4F22350DF06523AeE9FA9CaE30dAe7', // comments context
        },
        storage: 'arweave', // storage type: 'arweave' or 'ipfs'
      },
      chatTokenAddress: '', // chat token address
      chatTokenImage: '', // chat token image
      chatTokenSymbol: 'DEMO', // chat token symbol or name
      customRpc: process.env.RPC_CUSTOM,
      domainRequiredToPost: true,
      expiryCollections: 1000 * 60 * 60 * 24 * 7, // must be in milliseconds (0 means no expiration)
      expiryMods: 1000 * 60 * 60 * 24 * 7, // must be in milliseconds (0 means no expiration)
      expiryPfps: 1000 * 60 * 60 * 24 * 10, // must be in milliseconds (0 means no expiration)
      expiryReputationScore: 1000 * 60 * 60 * 24 * 1, // must be in milliseconds (0 means no expiration)
      expiryUsernames: 1000 * 60 * 60 * 24 * 7, // must be in milliseconds (0 means no expiration)
      favicon: '/img/favicon.svg',
      fileUploadEnabled: true, // enable/disable file uploads (enable only if external file storage is used, e.g. Arweave)
      fileUploadSizeLimit: 1 * 1024 * 1024, // max file upload size in bytes (1 * 1024 * 1024 = 1 MB)
      fileUploadStorageType: "arweave", // "arweave" or "imagekit"
      fileUploadTokenService: process.env.FILE_UPLOAD_SERVICE || 'netlify', // "netlify" or "vercel" (or leave empty for no file uploads)
      getPostsLimit: 10, // number of posts to fetch
      governanceUrl: 'https://portal.flare.network/voting', // governance url (snapshot, Tally, etc.)
      imagekitEndpoint: process.env.IMAGEKIT_ENDPOINT,
      imagekitPublicKey: process.env.IMAGEKIT_PUBLIC_KEY,
      marketplaceNftCollectionBaseUrl: "https://marketplace.flareocean.io/collection/14/", // url (append nft address to it)
      newsletterLink: "https://paragraph.xyz/@iggy/flr-chat-a-web3-social-network-on-flare",
      nftDefaultRatio: 4200, // default ratio for the NFT price bonding curve
      nftLaunchpadBondingAddress: "0x7c8fbdb5Bd20Ae239c3e3BfD775663c6989B17CD", // NFT launchpad with bonding curve contract address
      ipfsGateway: 'https://ipfs.io/ipfs/',
      ipfsGateway2: 'https://cloudflare-ipfs.com/ipfs/',
      ipfsGateway3: 'https://ipfs.filebase.io/ipfs/',
      linkPreviews: process.env.LINK_PREVIEW_SERVICE || 'netlify', // "netlify", "vercel", or "microlink" (or leave empty for no link previews)
      lpTokenAddress: '', // liquidity pool token (token to stake in the staking contract)
      lpTokenSymbol: 'LP tokens', // LP token symbol
      nftLaunchpadLatestItems: 4, // number of latest NFTs to show in the NFT launchpad
      previewImage: '/img/covers/cover.png',
      previewImageAirdrop: '/img/covers/cover-airdrop.png',
      previewImageNftCollection: '/img/covers/cover-nft-collection.png',
      previewImageNftCreate: '/img/covers/cover-nft-create.png',
      previewImageNftLaunchpad: '/img/covers/cover-nft-launchpad.png',
      previewImagePost: '/img/covers/cover-post.png',
      previewImagePostNft: '/img/covers/cover-post-nft.png',
      previewImageProfile: '/img/covers/cover-profile.png',
      previewImageStake: '/img/covers/cover-stake.png',
      profileMintedPostIdsMax: 36, // max number of minted post ids to show in the profile page
      projectMetadataTitle: "FLR Chat - Web3 Social on Flare",
      projectName: "FLR Chat",
      projectDescription: "FLR Chat is the first decentralized social network on Flare. Brought to you by Flare Domains.",
      projectTwitter: "https://twitter.com/flrdomains",
      projectUrl: "https://flr.chat", // without trailing slash!
      punkMinterAddress: "0x30E89295b9C73Ee9A74003FbcAAd67054434330F", // punk domain minter contract address
      punkNumberOfPrices: 5, // number of different prices (based on domain length), usually 1 (price()) or 5 (price1char() - price5char())
      punkTldAddress: "0xBDACF94dDCAB51c39c2dD50BffEe60Bb8021949a", // punk domain TLD address
      randomPostsNumber: 1, // number of random post NFTs to show in the sidebar widget
      stakeTokenSymbol: "", // stake token symbol (governance token symbol)
      supportedChainId: 14,
      showFeatures: {
        // show/hide features in sidebars (if you have too many "true", make the sidebar scrollable --> sidebarLeftSticky: false)
        activityPoints: false,
        airdrop: false,
        governance: false,
        newsletter: false,
        nftLaunchpad: true,
        swap: false,
        stake: false,
        sendTokens: true,
        spotify: false,
      },
      sidebarLeftSticky: true, // make the left sidebar sticky (always visible)
      spotifyPlaylistId: '5y7f2Wxfq49G5KuNQfMPbk', // enter just the ID of the playlist (not the full URL)
      stakingContractAddress: '', // this is also the stake/gov token address
      swapPriceImpactMaxBps: 1000, // max price impact in bips (1 bps = 0.01%, 1000bps = 10%) for the swap function
      tldName: ".flr",
      swapRouterAddress: '', // iggy swap router contract address
      tenorApiKey: process.env.TENOR_KEY || '',
      tokenAddress: null, // leave null if it's a native token of the chain
      tokenDecimals: 18,
      tokenSymbol: "FLR"
    },
  },
  vite: {
    build: {
      target: ['es2020'], // fix big integer literals error
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis', // fix nuxt3 global
        },
        plugins: [
          NodeGlobalsPolyfillPlugin({
            process: true, // fix nuxt3 process
            buffer: true,
          }),
          NodeModulesPolyfillPlugin(),
        ],
        target: 'es2020', // fix big integer literals error
      },
    },
  },
})
