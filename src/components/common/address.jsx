import React from 'react'
import { Form, Input, Select } from 'antd'
import { GetCountries, GetState, GetCity } from 'react-country-state-city'


const { Option } = Select

const Address = ({ form, allowExpand = false, initialValues }) => {
  const [countryId, setCountryId] = React.useState(null)
  const [stateId, setStateId] = React.useState(null)
  const [countries, setCountries] = React.useState([])
  const [states, setStates] = React.useState([])
  const [cities, setCities] = React.useState([])

  // React.useEffect(() => {
  //   if (initialValues && Object.keys(initialValues).length > 0) {
     
  //     const { country, state, city } = initialValues;

  //     // Set form values first
  //     form.setFieldsValue({
  //       address: initialValues,
  //     });

  //     // Load countries and then find countryId from name
  //     GetCountries().then((result) => {
  //       setCountries(result);

  //       if (country) {
  //         const selectedCountry = result.find(c => c.name === country);
  //         if (selectedCountry) {
  //           const countryId = parseInt(selectedCountry.id);
  //           setCountryId(countryId);

  //           // Load states for that country
  //           GetState(countryId).then((statesResult) => {
  //             setStates(statesResult);

  //             if (state) {
  //               const selectedState = statesResult.find(s => s.name === state);
  //               if (selectedState) {
  //                 const stateId = parseInt(selectedState.id);
  //                 setStateId(stateId);

  //                 // Load cities for that state
  //                 GetCity(countryId, stateId).then((citiesResult) => {
  //                   setCities(citiesResult);
  //                 });
  //               }
  //             }
  //           });
  //         }
  //       }
  //     });
  //   }
  // }, [initialValues, form]);

React.useEffect(() => {
    if (initialValues && Object.keys(initialValues).length > 0) {
        console.log('initialValues', initialValues)
      form.setFieldsValue({
        
          address:initialValues
        
      });
      console.log('form', form.getFieldsValue());
    }
  }, [initialValues, form]);


  // Load countries on component mount
 React.useEffect(() => {
    GetCountries().then(result => {
      setCountries(result);
      
      if (initialValues.country) {
        const country = result.find(c => c.name === initialValues.country);
        if (country) {
          setCountryId(parseInt(country.id));
        }
      }
    });
  }, []);

  // Load states when country changes
  React.useEffect(() => {
    if (countryId) {
      GetState(countryId).then(data => {
        setStates(data);
        
        if (initialValues.state) {
          const state = data.find(s => s.name === initialValues.state);
          if (state) {
            setStateId(parseInt(state.id));
          }
        }
      });
    }
  }, [countryId]);

  // Load cities
  React.useEffect(() => {
    if (countryId && stateId) {
      GetCity(countryId, stateId).then(data => {
        setCities(data);
      });
    }
  }, [countryId, stateId]);

  const handleCountryChange = (value, option) => {
    setCountryId(parseInt(option.key));
    setStateId(null);
    setCities([]);
  };

  const handleStateChange = (value, option) => {
    setStateId(parseInt(option.key));
  };

  const formItems = (
    <>
      <Form.Item
        name={['address', 'country']}
        label='Country'
        layout='vertical'
        className={`font-medium ${allowExpand ? "pb-4 " : ""}`}
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
        name={['address', 'state']}
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
        name={['address', 'city']}
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
        name={['address', 'postCode']}
        label='Postal Code'
        layout='vertical'
        className={`font-medium ${allowExpand ? "pb-4 " : ""}`}
      >
        <Input placeholder='Enter postal code' className='p-1 px-3 font-normal' />
      </Form.Item>

      <Form.Item
        name={['address', 'street1']}
        label='Street Address 1'
        layout='vertical'
        className={`'font-medium' ${allowExpand ? "pb-4 " : ""}`}
      >
        <Input placeholder='Enter street address' className='p-1 px-3 font-normal' />
      </Form.Item>

      <Form.Item
        name={['address', 'street2']}
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
        name={['address', 'street3']}
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
  );

  return allowExpand ? formItems : <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>{formItems}</div>;
}

export default Address