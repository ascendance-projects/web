export default function staggerChildren (time = 0.3) {
  return {
    visible: {
      transition: {
        staggerChildren: time,
      },
    },
  }
}
