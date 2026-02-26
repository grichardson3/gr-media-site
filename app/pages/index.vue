<script setup lang="ts">

    import { useHead, useAsyncData } from '#imports'
    import { useWPGeneralSettings } from '#wpnuxt'
    
    const { data: settings } = await useAsyncData('settings', () => useWPGeneralSettings())

    useHead({
        title: settings.value?.data?.title
    });

</script>

<script lang="ts">
    import VueCanvas from "../components/canvas.component.vue";
    export default {
        name: "App",
        components: {
            VueCanvas
        }
    };
</script>

<template>
    <VueCanvas/>
    <div class="container">
        <h1>Recent Projects</h1>
        <article><br>
            <h2>Mechatronics</h2>

            <UsePostsByCategory category-name="uncategorized"></UsePostsByCategory>

            <h2>Web Development</h2>
            <p>Nunc ac diam faucibus, congue nisi vel, laoreet lacus. Nam sed efficitur nisi, et gravida dolor. Maecenas blandit purus sit amet orci interdum rhoncus. Cras in magna elementum, tincidunt diam ut, aliquam ante. In consequat venenatis arcu, id sollicitudin massa finibus quis. Duis at imperdiet lectus. Praesent porta purus lectus, quis tempus augue lacinia non. Mauris blandit mattis tortor pellentesque commodo. Nam eros magna, placerat id hendrerit ac, sodales non risus. Curabitur aliquam facilisis quam, in varius nisl tempor ut.</p><br>

            <h2>Microcontroller Development</h2>
            <p>In libero tortor, ultricies id tristique eget, tempus at erat. Maecenas tincidunt eleifend quam. Phasellus pulvinar turpis at elit facilisis, eget efficitur risus vulputate. Etiam non ipsum quis mi egestas pellentesque. Ut ultricies mattis tristique. Sed efficitur sit amet arcu maximus suscipit. Morbi sagittis leo elit, id egestas leo vulputate at. Fusce imperdiet tellus felis, sed placerat libero egestas sit amet. Vivamus id interdum augue, sit amet hendrerit sem. Maecenas elementum turpis sit amet nulla vulputate condimentum. Nam id massa quis nunc tempor pellentesque a eu neque. Donec ut sem felis. Pellentesque pellentesque ante nec pharetra venenatis.</p><br>

            <h2>UX/UI Design</h2>
            <p>Vivamus ac velit vestibulum, hendrerit tortor ut, ultrices ligula. Duis vulputate placerat tristique. Aenean facilisis dignissim augue, sed iaculis orci luctus eget. Suspendisse porttitor in urna at finibus. Phasellus felis ipsum, placerat sit amet elit et, euismod aliquet purus. Phasellus consectetur turpis id nisl vestibulum scelerisque. Sed condimentum turpis tortor, id sagittis velit convallis non. Sed fermentum gravida diam vel cursus. Sed a massa nec erat rhoncus sodales. Quisque vitae libero ac lacus rutrum imperdiet a sed tellus. Proin vel libero est. Proin scelerisque orci in iaculis egestas. Suspendisse dapibus ultrices justo at eleifend. Donec in odio metus.</p><br>

            <h2>Motion Design / 3D Animation</h2>
            <p>Etiam vel dui urna. Morbi dignissim volutpat nisi, et porta orci euismod sed. Nullam cursus scelerisque quam, et suscipit tortor. Nulla ut justo nec augue imperdiet lacinia. Pellentesque tristique dictum sodales. Sed in porttitor dui. Suspendisse nec elit sed lectus efficitur faucibus sit amet sit amet mi.</p>
        </article>
    </div>
</template>