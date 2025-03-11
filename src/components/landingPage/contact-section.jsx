import { Button } from "antd"
import { PhoneOutlined } from "@ant-design/icons"

export function ContactSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Need Help? Talk To Our Expert.</h2>
          <p className="text-muted-foreground">Talk to our experts or Browse through more properties.</p>
        </div>
        <Button
          size="large"
          icon={<PhoneOutlined className="-scale-x-90" />}
          className="mt-4 md:mt-0 bg-accent hover:!bg-accent text-primary border-none"
        >
          +44 740 525 3088
        </Button>
      </div>
    </section>
  )
}

