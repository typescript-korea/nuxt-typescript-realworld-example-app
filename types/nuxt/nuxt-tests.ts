import {Builder, Nuxt, NuxtOptions} from 'nuxt'

const nuxtOptions: NuxtOptions = {
    build: {
        ssr: true,
    },
    srcDir: './src',
    rootDir: './',
}

const nuxt1 = new Nuxt(nuxtOptions)
const nuxt2 = new Nuxt()

const builder = new Builder(nuxt1)

builder.build().then((builder: Builder) => {
    const options: NuxtOptions = builder.options
})
