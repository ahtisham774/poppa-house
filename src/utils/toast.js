import toast from 'react-hot-toast'

export const showToast = (type, content) => {
  switch (type) {
    case 'success':
      toast.success(content)
      break
    case 'error':
      toast.error(content)
      break

    default:
      toast(content)
  }
}
