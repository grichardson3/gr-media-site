<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { PostFragment } from '#graphql-operations'
import { useWPPosts } from '#wpnuxt'
import dayjs from 'dayjs'

const posts = ref<PostFragment[]>([])
onMounted(async () => {
  const { data } = await useWPPosts()
  posts.value = data || []
})
</script>

<template>
  <div class="container">
    <div
      class="grid grid-cols-2 lg:grid-cols-2 p-6"
      id="posts"
      title="Blog posts"
    >
      <div v-if="posts && posts.length > 0">
        <div
          v-for="post, index in posts"
          :key="index"
          :title="post.title"
          :description="post.date?.split('T')[0]"
          :to="post.uri"
        >
          <div class="post_text">
            <h1 class="post_title">{{ post.title }}</h1>
            <span class="post_DateText">
              Posted at: {{ dayjs(post.date).format('MMM D, YYYY') }} on {{ dayjs(post.date).format('hh:ma') }}
            </span>
          </div>
          <img
            v-if="post?.featuredImage?.node?.sourceUrl"
            :src="post.featuredImage.node.sourceUrl"
            class="w-full rounded-md post_imageContainer"
          >
          <div class="post_excerpt">
            <span v-sanitize="post.excerpt" />
          </div>
      </div>
      </div>
      <div v-else>
        <PostPlaceholder
          v-for="i in 3"
          :key="i"
        />
      </div>
    </div>
  </div>
</template>