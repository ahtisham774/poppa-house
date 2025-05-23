'use client'

import { useState } from 'react'
import { Form, Input, Button, Checkbox, Select } from 'antd'
import AuthLayout from '../components/AuthLayout'
import { useNavigate } from 'react-router-dom'
import { showToast } from '../utils/toast'
import { useJobListingRegistration } from '../hooks/useJobListingRegistration'

import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
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
      onClick={() => onSelect(title)}
    >
      Choose Plan
    </Button>
  </div>
)

const Register = () => {
  const [form] = Form.useForm()
  const [userType, setUserType] = useState(null)
  const { registerForJobListing, loading, error } = useJobListingRegistration()
  const [selectedPackage, setSelectedPackage] = useState(null)
  const navigate = useNavigate()

  const onFinish = async values => {
    try {
      let formData = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        phoneNumber: values.phoneNumber,
        address: values.address,
        postalCode: values.postalCode,
        role: values.role,
        listingPackage: values.listingPackage,
        additionalInfo: values.additionalInfo,
        agreement: values.agreement
      }
      if (userType === 'Estate Agent') {
        ;(formData.companyName = values.companyName),
          (formData.companyRegistrationCode = values.companyRegistrationCode),
          (formData.position = values.position)
      } else if (userType === 'Landlord') {
        formData.landlordDetails = {
          documents: values.LandlordDocuments
        }
      } else if (userType === 'Property Owner') {
        formData.propertyOwnerDetails = {
          documents: values.ownerDocuments
        }
      }

      const response = await registerForJobListing(formData)
      if (response.error) {
        showToast('error', response.error)
        return
      }
      window.location.href = response.checkoutUrl

      showToast('success', 'Registration successful')
    } catch (err) {
      showToast('error', err.message || 'Something went wrong')
    }
  }
  const handleUserTypeChange = value => {
    setUserType(value)
    // Reset related fields when user type changes
    if (value === 'Estate Agent') {
      form.setFieldsValue({
        companyName: undefined,
        companyRegistrationCode: undefined,
        positionInCompany: undefined
      })
    } else if (value === 'Landlord' || value === 'Property Owner') {
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
              name='phoneNumber'
              className='font-medium'
              label={<p className='font-medium'>Phone Number</p>}
              rules={[
                { required: true, message: 'Please enter your phone number' }
              ]}
            >
              <PhoneInput placeholder='Enter phone number' className='border_b'/>
            </Form.Item>
          </div>
          <Form.Item
            name='password'
            label='Password'
            className='font-medium'
            rules={[
              { required: true, message: 'Please enter your password' },
              {
                min: 8,
                message: 'The password must be at least 8 characters long'
              },
              {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                message:
                  'Please choose a strong password that includes at least 1 lowercase and uppercase letter, a number, as well as a special character (!@#$%^&*)'
              }
            ]}
          >
            <Input.Password
              placeholder='Enter your Password..'
              className={css + ' dp'}
            />
          </Form.Item>

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
            name='role'
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
              <Option value='Estate Agent'>Estate Agent</Option>
              <Option value='Landlord'>Landlord</Option>
              <Option value='Property Owner'>Property Owner</Option>
            </Select>
          </Form.Item>

          {/* Conditional Fields for Estate Agent */}
          {userType === 'Estate Agent' && (
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
                  name='position'
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
          {userType === 'Landlord' && (
            <div className='pt-4'>
              <p className='font-medium mb-4'>
                If you're a Landlord, select any 2 documents you can provide for
                your listing.
              </p>
              <Form.Item
                name='LandlordDocuments'
                rules={[
                  {
                    required: true,
                    message: 'Please select at least one document'
                  }
                ]}
              >
                <Checkbox.Group
                  className='flex flex-col space-y-2'
                  options={[
                    {
                      label: 'Electrical Certification',
                      value: 'Electrical Certification'
                    },
                    {
                      label: 'Gas Safety Certificate',
                      value: 'Gas Safety Certificate'
                    },
                    {
                      label: 'Energy Performance Certificate (EPC)',
                      value: 'Energy Performance Certificate (EPC)'
                    }
                  ]}
                >
                  {/* <Checkbox value='electrical_cert'>
                    Electrical Certification
                  </Checkbox>
                  <Checkbox value='gas_safety'>Gas Safety Certificate</Checkbox>
                  <Checkbox value='epc'>
                    Energy Performance Certificate (EPC)
                  </Checkbox> */}
                </Checkbox.Group>
              </Form.Item>
            </div>
          )}

          {/* Conditional Fields for Property Owner */}
          {userType === 'Property Owner' && (
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
                <Checkbox.Group
                  className='flex flex-col space-y-2'
                  options={[
                    {
                      label: 'Electrical Certification',
                      value: 'Electrical Certification'
                    },
                    {
                      label: 'Gas Safety Certificate',
                      value: 'Gas Safety Certificate'
                    },
                    {
                      label: 'Energy Performance Certificate (EPC)',
                      value: 'Energy Performance Certificate (EPC)'
                    }
                  ]}
                ></Checkbox.Group>
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
              disabled={loading}
              className='w-full bg-accent text-black border-none disabled:cursor-not-allowed hover:!bg-accent hover:!text-black py-5 font-medium text-base'
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
