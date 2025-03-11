



export const getInputClasses = (fieldName,touched,errors) => {
    return `flex-1 w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-200  focus:ring-0 focus:outline-none 
    ${
      touched[fieldName] && errors[fieldName]
        ? 'border-red-500 focus:ring-red-200'
        : 'border-gray-300 focus:ring-blue-200'
    }`
  }


const FirstName = ({touched, errors,handleBlur, formData, handleChange}) => {
  return (
    <div className="relative">
    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
    <div className="relative">
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter your First Name.."
        className={getInputClasses("firstName",touched,errors)}
      />
      <InfoCircleOutlined className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
    {touched.firstName && errors.firstName && <p className="mt-1 text-sm text-red-500">• {errors.firstName}</p>}
  </div>
  )
}

export default FirstName