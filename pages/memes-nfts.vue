<template>
  <Head>
    <Title>Images & NFTs | {{ $config.projectMetadataTitle }}</Title>
    <Meta property="og:title" :content="'Images & NFTs | ' + $config.projectMetadataTitle" />
  </Head>

  <ChatFeed 
    class="mt-1" 
    :showQuotedPost="$config.showRepliesOnHomepage" 
    :allPosts="true" 
    orbisContext="kjzl6cwe1jw1479cht4pqcgpqt0j9ly8m8vva27cksf2f79l5jeir1hu501uwnk" 
  />
</template>

<script>
import ChatFeed from "../components/chat/ChatFeed.vue"

export default {
  name: "memesnfts",

  components: {
    ChatFeed
  }
}
</script>