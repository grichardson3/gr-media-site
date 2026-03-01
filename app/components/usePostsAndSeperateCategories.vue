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
  console.log(allPosts[0].categoryNameArray.includes(postCategories[0]))
});
</script>

<template>
    <div>
        <div 
            id="posts"
            title="Blog posts"
        >
            <div 
                v-if="posts && posts.length > 0"
                
            >
                <div
                    v-for="category, catindex in postCategories"
                    :key="catindex"
                >
                    <h2>{{ category }}</h2>
                    <div
                        v-for="post, index in posts"
                        :key="index"
                        :title="post.title"
                        :description="post.date?.split('T')[0]"
                        :to="post.uri"
                        
                    >
                        <div 
                            v-if="post.categoryNameArray.includes(category)"
                            class="grid grid-cols-3"
                        >
                            
                            <NuxtLink :to="post.uri">
                                <div 
                                    v-if="post?.featuredImage?.node?.sourceUrl"
                                    
                                >
                                    <img 
                                    :src="post.featuredImage.node.sourceUrl"
                                    class="w-full rounded-md post_imageContainer m-8"
                                    >
                                </div>
                                <div v-else>
                                    <div class="post_imageContainer__placeholder mt-8 mr-8 mb-8"></div>
                                </div>
                            </NuxtLink>
                            <div class="post_text col-span-2 p-8">
                                <NuxtLink :to="post.uri">
                                    <h2 class="post_title">{{ post.title }}</h2>
                                </NuxtLink>
                                <NuxtLink :to="post.uri">
                                    <div style="margin-bottom: 12px;">
                                        <span class="post_DateText">
                                            Posted at: {{ dayjs(post.date).format('MMM D, YYYY') }} on {{ dayjs(post.date).format('hh:ma') }}
                                        </span>
                                    </div>
                                </NuxtLink>
                                <NuxtLink :to="post.uri">
                                    <div class="post_category_tag__container">
                                        <div 
                                            class="post_category_tag"
                                            v-for="category in post.categoryNameArray"
                                            :key="category"
                                        >
                                            <span>{{ category }}</span>
                                        </div>
                                    </div>
                                </NuxtLink>
                                <NuxtLink :to="post.uri">
                                    <div class="post_excerpt">
                                        <span v-sanitize="post.excerpt"></span>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                        <div v-else>{{ null }}</div>
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