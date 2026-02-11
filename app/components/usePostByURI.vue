<script setup lang="ts">

    import { onMounted, ref } from 'vue'
    import type { PostFragment } from '#graphql-operations'
    import { useWPPostByUri } from '#wpnuxt'
    import { useRoute } from '#imports'
    import dayjs from 'dayjs'

    const route = useRoute()
    const post = ref<PostFragment[]>([])

    onMounted(async () => {
        const { data } = await useWPPostByUri({ uri: route.path })
        post.value = data || []
        console.log(post.value)
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
</template>