<script setup lang="ts">

  import { useWPPostsByCategoryName, useWPPostByUri } from '#wpnuxt'
  import { useAsyncData, useRoute } from '#imports'
  import dayjs from 'dayjs'
  
  const route = useRoute();

  let props = defineProps<{
    categoryName: string
  }>();

  const { data: postsByCategory } = await useAsyncData('postsByCategory', () =>
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
  <h2 class="categoryTitle" >{{ route.path.split("/")[2] }}</h2>
  <div class="grid sm:grid-cols-1 lg:grid-cols-1 p-6" id="posts" title="Blog posts">
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
