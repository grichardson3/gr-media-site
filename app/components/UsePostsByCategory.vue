<script setup lang="ts">
import { useAsyncData } from '#imports'
import { useWPPostsByCategoryName } from '#wpnuxt'

const props = defineProps<{
  categoryName: string
}>()

const { data: postsByCategory } = await useAsyncData('postsByCategory', () =>
  useWPPostsByCategoryName({ categoryName: props.categoryName })
)
</script>

<template>
  <div
    v-if="postsByCategory?.data?.length > 0"
    id="postsByCategory"
    title="Posts by Category 'Lorem Ipsum'"
  >
    <ul>
      <li
        v-for="post, index in postsByCategory?.data"
        :key="index"
      >
        <h2><NuxtLink :to="post.uri">{{ post.title }}</NuxtLink></h2>
        <span v-sanitize="post.excerpt" />
      </li>
    </ul>
  </div>
</template>
