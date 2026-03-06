<script setup lang="ts">

import { onMounted, ref } from 'vue'
import type { PostFragment } from '#graphql-operations'
import { useWPPosts } from '#wpnuxt'
import dayjs from 'dayjs'

const posts = ref<PostFragment[]>([])
const { data, pending, error } = await useWPPosts()

let allPosts:any[] = [];
let postCategories:any[] = [];

let errorMsg;
let pendingRes;

onMounted(async () => {
  
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

  errorMsg = error;
  pendingRes = pending;

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
                  <div
                      class="post_imageContainer__image mb-8"
                      :style="{ backgroundImage: 'url(' + post.featuredImage.node.sourceUrl + ')'}"
                  ></div>
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
      <div v-else-if="posts?.length === 0">
          <div class="grid grid-cols-1 p-8">
              <h2>Error! No Posts</h2>
              <h3>Posts are unavailable, check back later...</h3>
          </div>
      </div>
      <div v-else-if="pendingRes" >
        <PostPlaceholder
          v-for="i in 1"
          :key="i"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.post_imageContainer__image {
        border-bottom-left-radius: 12px;
        border-top-left-radius: 12px;
    }

    .post_imageContainer__placeholder {
        border-bottom-left-radius: 12px;
        border-top-left-radius: 12px;
    }

    .post_text {
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        max-height: 320px;
    }
</style>