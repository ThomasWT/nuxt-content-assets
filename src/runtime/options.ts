// must target utils/string; otherwise, circular dependency!
import { matchWords } from './utils/string'

export const defaults = {
  assetsDir: '/assets/',
  assetsPattern: '[path]/[file]'
}

export const imageExtensions = matchWords('png jpg jpeg gif svg webp ico')

export const mediaExtensions = matchWords('mp3 m4a wav mp4 mov webm ogg avi flv avchd')

export const fileExtensions = matchWords('pdf doc docx xls xlsx ppt pptx odp key')

export const extensions = [
  ...imageExtensions,
  ...mediaExtensions,
  ...fileExtensions,
]

export const tags = ['img', 'video', 'audio', 'source', 'embed', 'iframe', 'a']
