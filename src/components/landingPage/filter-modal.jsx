
import { Modal, Select, InputNumber, Slider, Button } from "antd"
import { CloseOutlined } from "@ant-design/icons"

export function FilterModal({ onClose }) {
  return (
    <Modal title="Filters" open={true} onCancel={onClose} footer={null} closeIcon={<CloseOutlined />} width={500}>
      <div className="space-y-6 py-4">
        <div>
          <label className="block mb-2 font-medium">Property Type</label>
          <Select
            className="w-full"
            placeholder="Select property type"
            options={[
              { value: "house", label: "House" },
              { value: "apartment", label: "Apartment" },
              { value: "condo", label: "Condo" },
            ]}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Location</label>
          <Select
            className="w-full"
            placeholder="Select location"
            options={[
              { value: "london", label: "London" },
              { value: "manchester", label: "Manchester" },
              { value: "birmingham", label: "Birmingham" },
            ]}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Bedrooms</label>
          <InputNumber min={1} max={10} defaultValue={1} className="w-full" />
        </div>

        <div>
          <label className="block mb-2 font-medium">Bathrooms</label>
          <InputNumber min={1} max={10} defaultValue={1} className="w-full" />
        </div>

        <div>
          <label className="block mb-2 font-medium">Price Range</label>
          <Slider
            range
            min={0}
            max={5000}
            defaultValue={[0, 5000]}
            marks={{
              0: "$0",
              5000: "$5,000",
            }}
          />
        </div>

        <Button type="primary" block size="large" className="bg-secondary">
          Search
        </Button>
      </div>
    </Modal>
  )
}

