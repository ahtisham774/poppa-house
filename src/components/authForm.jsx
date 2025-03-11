
import { useState } from "react"
import { Form, Input, Button, Checkbox, Select, DatePicker, Upload, message } from "antd"
import { UploadOutlined } from "@ant-design/icons"

const { Option } = Select

const AuthForm = ({ fields, onSubmit, title }) => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const onFinish = (values) => {
    setLoading(true)
    onSubmit(values)
    setLoading(false)
  }

  const renderField = (field) => {
    switch (field.type) {
      case "text":
      case "email":
      case "password":
        return (
          <Form.Item name={field.name} label={field.label} rules={field.rules} key={field.name}>
            {field.type === "password" ? (
              <Input.Password placeholder={field.placeholder} />
            ) : (
              <Input type={field.type} placeholder={field.placeholder} />
            )}
          </Form.Item>
        )
      case "select":
        return (
          <Form.Item name={field.name} label={field.label} rules={field.rules} key={field.name}>
            <Select placeholder={field.placeholder}>
              {field.options.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
        )
      case "date":
        return (
          <Form.Item name={field.name} label={field.label} rules={field.rules} key={field.name}>
            <DatePicker className="w-full" format="MM/DD/YYYY" />
          </Form.Item>
        )
      case "file":
        return (
          <Form.Item name={field.name} label={field.label} rules={field.rules} key={field.name}>
            <Upload
              beforeUpload={() => false}
              onChange={(info) => {
                if (info.file.status !== "uploading") {
                  console.log(info.file, info.fileList)
                }
                if (info.file.status === "done") {
                  message.success(`${info.file.name} file uploaded successfully`)
                } else if (info.file.status === "error") {
                  message.error(`${info.file.name} file upload failed.`)
                }
              }}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
        )
      case "checkbox":
        return (
          <Form.Item name={field.name} valuePropName="checked" rules={field.rules} key={field.name}>
            <Checkbox>{field.label}</Checkbox>
          </Form.Item>
        )
      default:
        return null
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-[#1a1a4b] mb-8">{title}</h1>
      <Form form={form} name="dynamic_registration" onFinish={onFinish} layout="vertical" requiredMark={false}>
        {fields.map((field) => renderField(field))}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="w-full bg-yellow-400 text-black border-none hover:bg-yellow-500"
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AuthForm

