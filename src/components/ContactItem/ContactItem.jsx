import React from 'react'
import { Form, Input, Button } from "antd";
import {
  MailOutlined,
  UserOutlined,
  MessageOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const ContactItem = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <div className="mt-[50px] mb-[50px] container mx-auto bg-white py-12 px-4 md:px-10 lg:px-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black font-Pm">
          Get In Touch With Us
        </h2>
        <p className="mt-4 text-gray-600 text-center font-Pr">
          For More Information About Our Product & Services. Please Feel Free
          To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="text-gray-700 space-y-6">
          <div className="flex items-start gap-4">
            <EnvironmentOutlined className="text-xl text-blue-600 mt-1" />
            <div>
              <p className="text-black font-Ps  text-[22px]">Address:</p>
              <p>
                236 5th SE Avenue, <br />
                New York NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <PhoneOutlined className="text-xl text-blue-600 mt-1" />
            <div>
              <p className="text-black font-Ps text-[22px]">Phone:</p>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <ClockCircleOutlined className="text-xl text-blue-600 mt-1" />
            <div>
              <p className="text-black font-Ps text-[22px]">Working Time:</p>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Your Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your name" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <Input placeholder="Enter your email" prefix={<MailOutlined />} />
          </Form.Item>

          <Form.Item
            label="Subject"
            name="subject"
            rules={[{ required: true, message: "Please enter a subject" }]}
          >
            <Input placeholder="Subject" prefix={<MessageOutlined />} />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please enter a message" }]}
          >
            <Input.TextArea rows={5} placeholder="Type your message..." />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default React.memo(ContactItem);
