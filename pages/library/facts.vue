<template>
  <h1>Facts</h1>
</template>

<script>
export default {
  data() {
    return {
      facts: [
        {
          id: 1,
          fact: 'condoms are only practically 100% effective',
          article:
            'Condoms are only 99% effective, however the last 1% resulting in pregnancy is related to condoms breaking or improper use.',
          references: [
            {
              id: 1,
              type: 'book',
            },
          ],
        },
      ],
    }
  },
}
</script>
