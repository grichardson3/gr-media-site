<script setup lang="ts">

    import { onMounted, ref } from 'vue'
    import type { PostFragment } from '#graphql-operations'
    import { useWPPosts } from '#wpnuxt'
    import dayjs from 'dayjs'

    const posts = ref<PostFragment[]>([]);
    const { data, pending, error } = await useWPPosts()

    let errorMsg:any;
    let pendingMsg:any;

    let allPosts:any[] = [];
    let postCategories:any[] = [];

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

        pendingMsg = pending;
        errorMsg = error;
    });

    allPosts = posts.value;

</script>

<template>
    <div>
        <div id="posts" title="Blog posts">
            <div v-if="posts && posts.length > 0">
                <div
                class=""
                    v-for="category, catindex in postCategories"
                    :key="catindex"
                >
                    <h2 class="categoryTitle pl-6">{{ category }}</h2>
                    <div
                        v-for="post, index in posts"
                        :key="index"
                        :title="post.title"
                        :description="post.date?.split('T')[0]"
                        :to="post.uri"
                    >
                        <div 
                            v-if="post.categoryNameArray.includes(category)"
                            class="grid grid-cols-3 pl-6 pr-6 pt-3"
                        > 
                            <NuxtLink :to="post.uri">
                                <div v-if="post?.featuredImage?.node?.sourceUrl">
                                    <div
                                        class="post_imageContainer__image mb-8"
                                        :style="{ backgroundImage: 'url(' + post.featuredImage.node.sourceUrl + ')'}"
                                    ></div>
                                </div>
                                <div v-else>
                                    <div class="post_imageContainer__placeholder mb-8"></div>
                                </div>
                            </NuxtLink>
                            <div class="post_text col-span-2 p-6">
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
                                <NuxtLink :to="post.uri">
                                    <div class="post_excerpt">
                                        <span v-sanitize="post.excerpt"></span>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                        <div v-else-if="pendingMsg">
                            <PostPlaceholder
                                v-for="i in 1"
                                :key="i"
                            />
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