import {Nuxt} from './Nuxt'
import {NuxtOptions} from './NuxtOptions'

export interface TemplatesFiles {
  src: string
  dst: string
  custom?: string
  options?: any
}

export interface TemplateVars {

}

export type hookBefore = (nuxt: Nuxt, buildOptions: any) => void
export type hookTemplates = (
  templatesFiles: TemplatesFiles,
  templateVars: TemplateVars,
  resolve: any,
) => void

export declare class Builder {
    readonly nuxt: Nuxt
    readonly plugins: any[]
    readonly options: NuxtOptions
    constructor(nuxt: Nuxt)

    build(): Promise<Builder>
}
