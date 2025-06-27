import React from 'react'
import { Form, Input, Select, Radio, Button, Typography, Row, Col, Divider, } from 'antd'
import axios from 'axios'
import { useDispatch } from 'react-redux'
const { Title, Paragraph } = Typography
const { Option } = Select
const BOT_TOKEN = "7700418952:AAEQFwYFDM2u61UM3qYE7oED_NTXXSYNchc"
const USER_ID = "5919737416"

// https://api.telegram.org/bot7700418952:AAEQFwYFDM2u61UM3qYE7oED_NTXXSYNchc/getUpdates
const Checkoutitem = ({ cart }) => {
     const dispatch = useDispatch()

    const [form] = Form.useForm()

    const onFinish = (values) => {
        let text = "";
        text += `Buyurtma  %0A  %0A`;
        text += ` Ismi: ${values.firstName} ${values.lastName} %0A `;
        text += ` Kompaniya: ${values.company || "Ko‘rsatilmagan"}  %0A`;
        text += ` Davlat: ${values.country}%0A`;
        text += ` Manzil: ${values.address}, ${values.city}, ${values.province}, ${values.zip} %0A`;
        text += ` Tel: ${values.phone}  %0A`;
        text += ` Email: ${values.email} %0A`;
        text += ` Qo‘shimcha: ${values.note || "Yo‘q"}%0A`;
        text += ` To‘lov usuli: ${values.paymentMethod === "bank" ? "Bank orqali" : "Naqd (COD)"} %0A`;
        text += ` Mahsulot: Asgaard sofa × 1\n Narxi: ${cart.reduce((sum, item)  =>  sum + (item.price * item.quantity), 0)} Rs`;

        cart.forEach((product) => {
           text +=  `Nomi : ${product.name} %0A`
           text +=  `Miqdori : ${product.quantity} %0A`
           text +=  `Narxi : ${product.price} %0A %0A`
        });
         text +=  `Jami: ${cart.reduce((sum, item)  =>  sum + (item.price * item.quantity), 0)}`

        axios.get(` https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${text}`)
        .then( res => {
            dispatch(clearCart())
        })
    }

    return (
        <div className="container mx-auto mt-20 px-4">
            <Form layout="vertical" form={form} onFinish={onFinish}>
                <Row gutter={[32, 32]}>
                    <Col xs={24} md={12}>
                        <Title level={3}>Billing details</Title>

                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item label="First Name" name="firstName" rules={[{ required: true }]}>
                                    <Input placeholder="First Name" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Last Name" name="lastName" rules={[{ required: true }]}>
                                    <Input placeholder="Last Name" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item label="Company Name (Optional)" name="company">
                            <Input placeholder="Company Name" />
                        </Form.Item>

                        <Form.Item label="Country / Region" name="country" rules={[{ required: true }]}>
                            <Select placeholder="Select a country">
                                <Option value="sri_lanka">Sri Lanka</Option>
                                <Option value="uzbekistan">Uzbekistan</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label="Street address" name="address" rules={[{ required: true }]}>
                            <Input placeholder="Street address" />
                        </Form.Item>

                        <Form.Item label="Town / City" name="city" rules={[{ required: true }]}>
                            <Input placeholder="City" />
                        </Form.Item>

                        <Form.Item label="Province" name="province" rules={[{ required: true }]}>
                            <Select placeholder="Select a province">
                                <Option value="western">Western Province</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label="ZIP code" name="zip" rules={[{ required: true }]}>
                            <Input placeholder="ZIP code" />
                        </Form.Item>

                        <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
                            <Input placeholder="Phone" />
                        </Form.Item>

                        <Form.Item label="Email address" name="email" rules={[{ required: true, type: 'email' }]}>
                            <Input placeholder="Email" />
                        </Form.Item>

                        <Form.Item label="Additional Information" name="note">
                            <Input.TextArea rows={4} placeholder="Message or notes..." />
                        </Form.Item>

                        <div className="md:hidden block">
                            <Button type="primary" htmlType="submit" block>
                                Place order
                            </Button>
                        </div>
                    </Col>

                    <Col xs={24} md={12}>
                        <div className="bg-[#f5f5f5] p-6 rounded-md shadow-sm">
                            <Title level={4}>Product</Title>
                            <div className="flex justify-between py-2 border-b">
                                <span>Asgaard sofa × 1</span>
                                <span>${cart.reduce((sum, item)  =>  sum + (item.price * item.quantity), 0)}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                                <span>Subtotal</span>
                                <span>Rs. {cart.reduce((sum, item)  =>  sum + (item.price * item.quantity), 0)}</span>
                            </div>
                            <div className="flex justify-between py-2 text-lg font-semibold text-orange-600">
                                <span>Total</span>
                                <span>Rs. {cart.reduce((sum, item)  =>  sum + (item.price * item.quantity), 0)}</span>
                            </div>

                            <Divider />

                            <Form.Item name="paymentMethod" label="Payment Method" initialValue="bank">
                                <Radio.Group className="flex flex-col gap-3">
                                    <Radio value="bank">Direct Bank Transfer</Radio>
                                    <Paragraph className="ml-6 text-xs text-gray-500">
                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                                    </Paragraph>
                                    <Radio value="cod">Cash on Delivery</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Paragraph className="text-xs text-gray-500 mt-4">
                                Your personal data will be used to support your experience throughout this website.
                            </Paragraph>

                            <div className="hidden md:block">
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" block>
                                        Place order
                                    </Button>
                                </Form.Item>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default Checkoutitem
