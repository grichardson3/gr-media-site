<script setup lang="ts">

    import { onMounted, ref } from 'vue';
    import type { PostFragment } from '#graphql-operations';
    import { useWPPostByUri } from '#wpnuxt';
    import { useRoute } from '#imports';
    import dayjs from 'dayjs';

    const route = useRoute();
    const post = ref<PostFragment[]>([]);

    let categoryNameList:any[] = [];

    onMounted(async () => {
        const { data } = await useWPPostByUri({ uri: route.path });
        post.value = data || [];

        console.log(post.value);

        post.value.categories.nodes.forEach((element:any) => {
            categoryNameList.push(element.name);
        });
    });

</script>

<template>
    <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-1 p-6" id="posts" title="Blog posts">
            <div class="post_text">
                <h2 class="post_title">{{ post.title }}</h2>
                <span class="post_DateText">
                    Posted at: {{ dayjs(post.date).format('MMM D, YYYY') }} on {{ dayjs(post.date).format('hh:ma') }}
                </span>
            </div>
            <div class="post_category_tag__container mt-3 mb-3">
              <div 
                class="post_category_tag"
                v-for="postCategoryName, nameIndex in categoryNameList"
                :key="nameIndex"
              >
                <NuxtLink :to="`../category/${postCategoryName}`">
                  <span>{{ postCategoryName }}</span>
                </NuxtLink>
              </div>
            </div>
            <div v-if="post?.featuredImage?.node?.sourceUrl">
                <img 
                    :src="post.featuredImage.node.sourceUrl"
                    class="w-full rounded-md post_imageContainer"
                >
            </div>
            <div v-else>
                <div class="post_imageContainer__placeholder mt-8 mr-8 mb-4"></div>
            </div>
            <div class="post_excerpt">
                <span v-sanitize="post.content"></span>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .container {
        min-height: calc(100vh - 300px);
    }

  .post_text {
    background: none;
  }

  .post_imageContainer__image, .post_imageContainer__placeholder {
    border-radius: 12px;
  }

</style>