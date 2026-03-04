<script setup lang="ts">

import { onMounted, ref } from 'vue'
import type { PostFragment } from '#graphql-operations'
import { useWPPosts } from '#wpnuxt'
import dayjs from 'dayjs'

const posts = ref<PostFragment[]>([])

let allPosts:any[] = [];
let postCategories:any[] = [];

onMounted(async () => {
  const { data } = await useWPPosts()
  posts.value = data || []

  posts.value.forEach((el:any) => {
    el.categoryNameArray = [];
    el.categories?.nodes.forEach((element:any) => {
        el.categoryNameArray.push(element.name);
        if (!postCategories.includes(element.name)) {
            postCategories.push(element.name);
        }
    });
  });

  allPosts = posts.value;

})
</script>

<template>
  <div>
    <div
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
          <div class="grid grid-cols-3 lg:grid-cols-3 p-6">
            <div class="col-span-1">
              <NuxtLink :to="post.uri">
                <div v-if="post?.featuredImage?.node?.sourceUrl">
                  <img 
                    :src="post.featuredImage.node.sourceUrl"
                    class="w-full rounded-md post_imageContainer"
                  >
                </div>
                <div v-else>
                  <div class="post_imageContainer__placeholder"></div>
                </div>
              </NuxtLink>
            </div>
            <div class="post_text col-span-2 p-8">
              <NuxtLink :to="post.uri">
                <h2 class="post_title">{{ post.title }}</h2>
              </NuxtLink>
                <div style="margin-bottom: 12px;">
                  <span class="post_DateText">
                    Posted at: {{ dayjs(post.date).format('MMM D, YYYY') }} on {{ dayjs(post.date).format('hh:ma') }}
                  </span>
                </div>
                <div class="post_category_tag__container">
                    <div 
                        class="post_category_tag"
                        v-for="category in post.categoryNameArray"
                        :key="category"
                    >
                    <NuxtLink :to="`category/${category}`">
                        <span>{{ category }}</span>
                    </NuxtLink>
                    </div>
                </div>
                <div class="post_excerpt">
                  <span v-sanitize="post.excerpt"></span>
                </div>
            </div>
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