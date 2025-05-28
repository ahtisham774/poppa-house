import React from 'react'
import { Form, Input, Select } from 'antd'
import { GetCountries, GetState, GetCity } from 'react-country-state-city'

const { Option } = Select

const Address = ({ form,name="address", allowExpand = false, initialValues }) => {
  const [countryId, setCountryId] = React.useState(null)
  const [stateId, setStateId] = React.useState(null)
  const [countries, setCountries] = React.useState([])
  const [states, setStates] = React.useState([])
  const [cities, setCities] = React.useState([])

  // Load countries on component mount
  React.useEffect(() => {
    GetCountries().then(result => {
      setCountries(result)
    })
  }, [])



  // Handle initial values
  React.useEffect(() => {
    if (initialValues && countries.length > 0) {
      const { country, state } = initialValues
      
      // Set form values
      form.setFieldsValue({
        [name]: initialValues
      })

      // Find and set country ID if country is provided
      if (country) {
        const selectedCountry = countries.find(c => c.name === country)
        if (selectedCountry) {
          setCountryId(parseInt(selectedCountry.id))
        }
      }
    }
  }, [initialValues, countries, form])

  // Load states when country changes
  React.useEffect(() => {
    if (countryId) {
      GetState(countryId).then(data => {
        setStates(data)
        
        // Find and set state ID if state is provided in initial values
        if (initialValues?.state) {
          const selectedState = data.find(s => s.name === initialValues.state)
          if (selectedState) {
            setStateId(parseInt(selectedState.id))
          }
        }
      })
    } else {
      setStates([])
      setCities([])
    }
  }, [countryId, initialValues?.state])

  // Load cities when state changes
  React.useEffect(() => {
    if (countryId && stateId) {
      GetCity(countryId, stateId).then(data => {
        setCities(data)
      })
    } else {
      setCities([])
    }
  }, [countryId, stateId])

  const handleCountryChange = (value, option) => {
    setCountryId(parseInt(option.key))
    setStateId(null)
    setCities([])
    // Reset state and city fields when country changes
    console.log('Country changed:', value, option, name)
    form.setFieldsValue({
      [name]: {
        ...form.getFieldValue(name),
        state: undefined,
        city: undefined
      }
    })
  }

  const handleStateChange = (value, option) => {
    setStateId(parseInt(option.key))
    // Reset city field when state changes
    form.setFieldsValue({
      [name]: {
        ...form.getFieldValue(name),
        city: undefined
      }
    })
  }

  const formItems = (
    <>
      <Form.Item
        name={[name, 'country']}
        label='Country'
        layout='vertical'
        className={`font-medium ${allowExpand ? "pb-4 " : ""} `}
      >
        <Select
          showSearch
          placeholder='Select country'
          optionFilterProp='children'
          onChange={handleCountryChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          {countries.map(country => (
            <Option key={country.id} value={country.name}>
              {country.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name={[name, 'state']}
        label='State/Province'
        layout='vertical'
        className={`font-medium ${allowExpand ? "pb-4 " : ""}`}
      >
        <Select
          showSearch
          placeholder='Select state'
          optionFilterProp='children'
          onChange={handleStateChange}
          disabled={!countryId}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          {states.map(state => (
            <Option key={state.id} value={state.name}>
              {state.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name={[name, 'city']}
        label='City'
        layout='vertical'
        className={`font-medium ${allowExpand ? "pb-4 " : ""}`}
      >
        <Select
          showSearch
          placeholder='Select city'
          optionFilterProp='children'
          disabled={!stateId}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {cities.map(city => (
            <Option key={city.id} value={city.name}>
              {city.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name={[name, 'postCode']}
        label='Postal Code'
        layout='vertical'
        className={`font-medium ${allowExpand ? "pb-4 " : ""}`}
      >
        <Input placeholder='Enter postal code' className='p-1 px-3 font-normal' />
      </Form.Item>

      <Form.Item
        name={[name, 'street1']}
        label='Street Address 1'
        layout='vertical'
        className={`'font-medium' ${allowExpand ? "pb-4 " : ""}`}
      >
        <Input placeholder='Enter street address' className='p-1 px-3 font-normal' />
      </Form.Item>

      <Form.Item
        name={[name, 'street2']}
        label='Street Address 2 (Optional)'
        layout='vertical'
        className={`font-medium ${allowExpand ? "pb-4 " : ""}`}
      >
        <Input
          placeholder='Apartment, suite, unit, etc. (optional)'
          className='p-1 px-3 font-normal'
        />
      </Form.Item>

      <Form.Item
        name={[name, 'street3']}
        label='Street Address 3 (Optional)'
        layout='vertical'
        className={`font-medium ${allowExpand ? "pb-4 " : ""}`}
      >
        <Input
          placeholder='Additional address info (optional)'
          className='p-1 px-3 font-normal'
        />
      </Form.Item>
    </>
  )

  return allowExpand ? formItems : <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>{formItems}</div>
}

export default Address