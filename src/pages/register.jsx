'use client'

import { useState } from 'react'
import {
  Form,
  Input,
  Button,
  Checkbox,
  Select,
  DatePicker,
  Upload,
  Radio,
  Space
} from 'antd'
import { UploadOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import AuthLayout from '../components/AuthLayout'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'

export const css = `flex-1 w-full px-0 py-2 bg-transparent border-0 border-b-2 !border-[#adadad] !outline-none rounded-none ring-0 focus:ring-0 focus:outline-none`
const { Option } = Select
const { TextArea } = Input

const ListingPackageCard = ({
  title,
  price,
  period,
  properties,
  validity,
  description,
  onSelect
}) => (
  <div className='border relative rounded-xl border-[#505050] p-6 flex flex-col items-center'>
    <div className='bg-primary text-white py-2 px-8 rounded-full mb-4'>
      {title}
    </div>
    <div className='flex items-center flex-col mb-2'>
      <span className='text-4xl font-bold'>£{price}</span>
      <span className='text-gray-500 ml-1'>/{period}</span>
    </div>
    <p className='text-center text-sm mb-4'>
      {properties} properties, valid for {validity}
      <br />({description})
    </p>
    <Button
      className='bg-primary text-white border-none rounded-full absolute -bottom-4 left-1/2 -translate-x-1/2 hover:bg-blue-900'
      onClick={() => onSelect(title.toLowerCase().replace(' ', '_'))}
    >
      Choose Plan
    </Button>
  </div>
)

const Register = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [userType, setUserType] = useState(null)
  const [selectedPackage, setSelectedPackage] = useState(null)

  const onFinish = values => {
    setLoading(true)
    // Handle form submission
    console.log('Success:', values)
    setLoading(false)
  }

  const handleUserTypeChange = value => {
    setUserType(value)
    // Reset related fields when user type changes
    if (value === 'estate_agent') {
      form.setFieldsValue({
        companyName: undefined,
        companyRegistrationCode: undefined,
        positionInCompany: undefined
      })
    } else if (value === 'landlord' || value === 'property_owner') {
      form.setFieldsValue({
        documents: undefined
      })
    }
  }

  const handlePackageSelect = packageType => {
    setSelectedPackage(packageType)
    form.setFieldsValue({ listingPackage: packageType })
  }

  return (
    <AuthLayout
      title={'Register Now!'}
      subTitle={
        ' Please fill out the form below to list your property, and a member of our team will contact you shortly.'
      }
    >
     
      <div className='w-full '>
        <Form
          form={form}
          name='register'
          onFinish={onFinish}
          layout='vertical'
          requiredMark={false}
          className='space-y-6 font-medium'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
            <Form.Item
              name='firstName'
              label={<p className='font-medium'>First Name</p>}
              rules={[
                { required: true, message: 'Please enter your first name' }
              ]}
            >
              <Input placeholder='Enter your First Name..' className={css} />
            </Form.Item>
            <Form.Item
              name='lastName'
              label={<p className='font-medium'>Last Name</p>}
              rules={[
                { required: true, message: 'Please enter your last name' }
              ]}
            >
              <Input placeholder='Enter your Last Name..' className={css} />
            </Form.Item>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
            <Form.Item
              name='email'
              label={<p className='font-medium'>Email</p>}
              rules={[
                { required: true, message: 'Please enter your email address' },
                { type: 'email', message: 'Please enter a valid email address' }
              ]}
            >
              <Input placeholder='Enter your Email Address..' className={css} />
            </Form.Item>
            <Form.Item
              name='phone'
              className='font-medium'
              label={<p className='font-medium'>Phone Number</p>}
              rules={[
                { required: true, message: 'Please enter your phone number' },
                {
                  pattern: /^[0-9]+$/,
                  message: 'The phone number must not contain any letters'
                }
              ]}
            >
              <Input
                style={{
                  borderRadius: '0px',
                  border: 'none',
                  background: '#fff'
                }}
                className={'dp'}
                styles={{
                  input: {
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderRadius: '0px',
                    marginLeft: '1rem',
                    width: '95%'
                  }
                }}
                addonBefore={
                  <Select
                    className='dp'
                    suffixIcon={
                      <svg
                        width='10'
                        height='6'
                        viewBox='0 0 10 6'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M0 0.207031L5 5.20703L10 0.207031H0Z'
                          fill='#242426'
                        />
                      </svg>
                    }
                    defaultValue='+1'
                    style={{
                      width: 70,
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderRight: 'none',
                      borderRadius: '0px',
                      background: '#fff'
                    }}
                  >
                    <Select.Option value='+1'>+1</Select.Option>
                    <Select.Option value='+44'>+44</Select.Option>
                  </Select>
                }
                placeholder='(000) 000 0000'
              />
            </Form.Item>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
            <Form.Item
              name='address'
              label={<p className='font-medium'>Address</p>}
            >
              <Input placeholder='Enter your Address' className={css} />
            </Form.Item>
            <Form.Item
              name='postalCode'
              label={<p className='font-medium'>Postal Code</p>}
            >
              <Input placeholder='Enter your Postal code' className={css} />
            </Form.Item>
          </div>

          <Form.Item
            name='userType'
            label={<p className='font-medium'>Are You? (Select one)</p>}
            rules={[{ required: true, message: 'Please select your role' }]}
          >
            <Select
              placeholder='Select One Role'
              className={css + ' dp'}
              onChange={handleUserTypeChange}
              suffixIcon={
                <svg
                  width='10'
                  height='6'
                  viewBox='0 0 10 6'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0 0.207031L5 5.20703L10 0.207031H0Z'
                    fill='#242426'
                  />
                </svg>
              }
            >
              <Option value='estate_agent'>Estate Agent</Option>
              <Option value='landlord'>Landlord</Option>
              <Option value='property_owner'>Property Owner</Option>
            </Select>
          </Form.Item>

          {/* Conditional Fields for Estate Agent */}
          {userType === 'estate_agent' && (
            <div className='pt-4'>
              <p className='font-medium mb-4'>
                If You Are an Estate Agent, Please Provide Your Company Details
              </p>

              <Form.Item
                name='companyName'
                label={<p className='font-medium'>Company Name:</p>}
                rules={[
                  { required: true, message: 'Please enter your company name' }
                ]}
              >
                <Input placeholder='Enter your Company Name' className={css} />
              </Form.Item>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Form.Item
                  name='companyRegistrationCode'
                  label={
                    <p className='font-medium'>Company Registration Code:</p>
                  }
                >
                  <Input
                    placeholder='Enter Registration Code'
                    className={css}
                  />
                </Form.Item>
                <Form.Item
                  name='positionInCompany'
                  label={
                    <p className='font-medium'>Your Position in the Company:</p>
                  }
                >
                  <Input placeholder='Enter your Position' className={css} />
                </Form.Item>
              </div>
            </div>
          )}

          {/* Conditional Fields for Landlord */}
          {userType === 'landlord' && (
            <div className='pt-4'>
              <p className='font-medium mb-4'>
                If you're a Landlord, select any 2 documents you can provide for
                your listing.
              </p>
              <Form.Item
                name='landlordDocuments'
                rules={[
                  {
                    required: true,
                    message: 'Please select at least one document'
                  }
                ]}
              >
                <Checkbox.Group className='flex flex-col space-y-2'>
                  <Checkbox value='electrical_cert'>
                    Electrical Certification
                  </Checkbox>
                  <Checkbox value='gas_safety'>Gas Safety Certificate</Checkbox>
                  <Checkbox value='epc'>
                    Energy Performance Certificate (EPC)
                  </Checkbox>
                </Checkbox.Group>
              </Form.Item>
            </div>
          )}

          {/* Conditional Fields for Property Owner */}
          {userType === 'property_owner' && (
            <div className='pt-4'>
              <p className='font-medium mb-4'>
                If you're a Property Owner, select any 2 documents you can
                provide for your listing.
              </p>
              <Form.Item
                name='ownerDocuments'
                rules={[
                  {
                    required: true,
                    message: 'Please select at least one document'
                  }
                ]}
              >
                <Checkbox.Group className='flex flex-col space-y-2'>
                  <Checkbox value='electrical_cert'>
                    Electrical Certification
                  </Checkbox>
                  <Checkbox value='gas_safety'>Gas Safety Certificate</Checkbox>
                  <Checkbox value='epc'>
                    Energy Performance Certificate (EPC)
                  </Checkbox>
                </Checkbox.Group>
              </Form.Item>
            </div>
          )}

          {/* Listing Package Selection */}
          <Form.Item
            name='listingPackage'
            label={<p className='font-medium'>Choose a Listing Package</p>}
            rules={[
              { required: true, message: 'Please select a listing package' }
            ]}
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mb-4 gap-y-10'>
              <ListingPackageCard
                title='Free Listing'
                price='0'
                period='month'
                properties='3'
                validity='1 month'
                description='Perfect for first-time users!'
                onSelect={handlePackageSelect}
              />
              <ListingPackageCard
                title='Starter Plan'
                price='20'
                period='3 month'
                properties='12'
                validity='3 months'
                description='Great for growing users!'
                onSelect={handlePackageSelect}
              />
              <ListingPackageCard
                title='Growth Plan'
                price='40'
                period='6 month'
                properties='25'
                validity='6 months'
                description='Perfect for scaling up!'
                onSelect={handlePackageSelect}
              />
              <ListingPackageCard
                title='Pro Plan'
                price='65'
                period='year'
                properties='45'
                validity='1 year'
                description='Ideal for long-term use!'
                onSelect={handlePackageSelect}
              />
            </div>
          </Form.Item>

          {/* Additional Information */}
          <Form.Item
            name='additionalInfo'
            label={<p className='font-medium'>Additional Information</p>}
          >
            <TextArea
              placeholder='Tell Us About your Properties or Any Special Requirements'
              autoSize={{ minRows: 2, maxRows: 5 }}
              className={
                css +
                'dp  rounded-none focus:ring-0 focus:outline-none resize-none'
              }
            />
          </Form.Item>

          <Form.Item
            name='agreement'
            valuePropName='checked'
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error('Should accept agreement'))
              }
            ]}
          >
            <Checkbox className='font-medium'>
              I agree to the{' '}
              <a href='#' className='underline'>
                terms & policy
              </a>
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              loading={loading}
              className='w-full bg-accent text-black border-none hover:!bg-accent hover:!text-black py-5 font-medium text-base'
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </AuthLayout>
  )
}

export default Register
