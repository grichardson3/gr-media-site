<script setup lang="ts">

  import { useWPPostsByCategoryName, useWPPostByUri } from '#wpnuxt'
  import { useAsyncData, useRoute } from '#imports'
  import dayjs from 'dayjs'
  
  const route = useRoute();

  let props = defineProps<{
    categoryName: string
  }>();

  const { data: postsByCategory, pending, error } = await useAsyncData('postsByCategory', () =>
    useWPPostsByCategoryName({ categoryName: props.categoryName })
  );

  let allPosts:any[] = [];
  let postCategories:any[] = [];

  const img = useImage();
  const loaded = ref(false);

  onMounted(async () => {
      const { data } = await useWPPostByUri({ uri: route.path });
      route.value = data || [];

      postsByCategory.value.data.forEach((el:any) => {
        el.categoryNameArray = [];
        el.categories?.nodes.forEach((element:any) => {
            el.categoryNameArray.push(element.name);
            if (!postCategories.includes(element.name)) {
                postCategories.push(element.name);
            }
        });
      });

      allPosts = postsByCategory.value;

      if (process.client) {
          setTimeout(() => {
              loaded.value = true;
          }, 1000);
      }
  });

</script>

<template>
  <div class="grid sm:grid-cols-1 lg:grid-cols-1 p-6" id="posts" title="Blog posts">
    <div
      v-if="postsByCategory && postsByCategory?.data?.length > 0"
      id="postsByCategory"
      title="Posts by Category 'Lorem Ipsum'"
    >
      <h2 class="categoryTitle">Category: {{ route.path.split("/")[2] }}</h2>
      <ul>
        <li
          class="pl-6 pr-6 pt-6"
          v-if="loaded"
          v-for="post, index in postsByCategory?.data"
          :key="index"
        >
          <NuxtLink :to="post.uri">
            <h3 class="post_title">{{ post.title }}</h3>
          </NuxtLink>
          <NuxtLink :to="post.uri">
            <p class="post_DateText">
              Posted at: {{ dayjs(post.date).format('MMM D, YYYY') }} on {{ dayjs(post.date).format('hh:ma') }}
            </p>
          </NuxtLink>
            <div v-if="post?.featuredImage?.node?.sourceUrl">
              <NuxtLink :to="post.uri">
                <div
                    class="post_imageContainer__image"
                    :style="{ backgroundImage: 'url(' + post.featuredImage.node.sourceUrl + ')'}"
                ></div>
              </NuxtLink>
            </div>
            <div v-else>
              <NuxtLink :to="post.uri">
                <div class="post_imageContainer__placeholder"></div>
              </NuxtLink>
            </div>
          <div class="post_text mb-6">
            <div class="p-6 pt-2">
              <div class="post_excerpt">
                <span v-sanitize="post.excerpt"></span>
              </div>
              <div class="post_category_tag__container">
                <div 
                  class="post_category_tag"
                  v-for="postCategoryName, nameIndex in post.categoryNameArray"
                  :key="nameIndex"
                >
                  <NuxtLink :to="`../category/${postCategoryName}`">
                    <span>{{ postCategoryName }}</span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </li>
        <div v-else>
          <PostPlaceholder
            v-for="i in 1"
            :key="i"
          />
        </div>
      </ul>
    </div>
    <div v-else-if="postsByCategory?.data?.length === 0">
      <h1>404!</h1>
      <h2>Sorry! No posts exist in this category...</h2>
      <h4><NuxtLink to="/"><span>Click Here</span></NuxtLink> - Back to the home page</h4>
    </div>
  </div>
</template>

<style scoped>
  .grid {
    min-height: calc(100vh - 420px);
  }

  .post_text {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  .post_imageContainer__image, .post_imageContainer__placeholder {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    max-height: 320px;
  }

</style>
