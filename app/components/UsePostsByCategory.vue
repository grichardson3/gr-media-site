<script setup lang="ts">

  import { useAsyncData } from '#imports'
  import { useWPPostsByCategoryName } from '#wpnuxt'
  import dayjs from 'dayjs'
  
  let props = defineProps<{
    categoryName: string
  }>();

  const { data: postsByCategory } = await useAsyncData('postsByCategory', () =>
    useWPPostsByCategoryName({ categoryName: props.categoryName })
  );

  let categoryNameList = [];

  postsByCategory.value.data.forEach(element => {
    element.categories.nodes.forEach(el => {
      categoryNameList.push(el.name);
    });
  });

  const img = useImage();
  const loaded = ref(false);
  onMounted(() => {
      if (process.client) {
          setTimeout(() => {
              loaded.value = true;
          }, 1000);
      }
  });

</script>

<template>
  <div class="grid sm:grid-cols-1 lg:grid-cols-2 p-6" id="posts" title="Blog posts">
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
          <div
            v-if="loaded"
            class="post_text"
          >
            <NuxtLink :to="post.uri">
              <h3 class="post_title">{{ post.title }}</h3>
            </NuxtLink>
            <NuxtLink :to="post.uri">
              <span class="post_DateText">
                Posted at: {{ dayjs(post.date).format('MMM D, YYYY') }} on {{ dayjs(post.date).format('hh:ma') }}
              </span>
            </NuxtLink>
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
            <NuxtLink :to="post.uri">
              <div class="post_excerpt">
                <span v-sanitize="post.excerpt" />
              </div>
              <div class="post_category_tag__container">
                <div 
                  class="post_category_tag"
                  v-for="postCategoryName, nameIndex in categoryNameList"
                  :key="nameIndex"
                >
                  <span>{{ postCategoryName }}</span>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div v-else>
              <PostPlaceholder/>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <h2>No posts available...</h2>
    </div>
  </div>
</template>
