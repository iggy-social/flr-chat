<template>
  <Head>
    <Title>Shill and discuss projects | {{ $config.projectMetadataTitle }}</Title>
    <Meta property="og:title" :content="'Shill and discuss projects | ' + $config.projectMetadataTitle" />
  </Head>

  <ChatFeed 
    class="mt-1" 
    :showQuotedPost="$config.showRepliesOnHomepage" 
    :allPosts="true" 
    orbisContext="kjzl6cwe1jw14bdmgu97ybshws867hujblq8hx11jl8biypqokfhxv1ppwswhhx" 
  />
</template>

<script>
import ChatFeed from "../components/chat/ChatFeed.vue"

export default {
  name: "shill",

  components: {
    ChatFeed
  }
}
</script>