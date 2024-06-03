import type { Variants } from 'framer-motion'

const translate = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
} satisfies Variants

export default translate
