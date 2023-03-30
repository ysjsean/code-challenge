import React, { useState } from "react";
import { Col, Row, Button, Form, Input, InputNumber, message } from "antd";
import web3 from "web3";
import "./index.css";


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const FancyForm = (props: any) => {
  const componentStyle = { background: "#fff", padding: 16, borderRadius: 3 };
  const { Item } = Form;
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Token sent',
    });
  };

  const onFinish = (values:any) => {
    console.log('Received values of form: ', values);

    setLoading(value => !value)
    setTimeout(()=>{
      success();
      setLoading(value => !value)
    },3000);
    
    
  };
  
  const onReset = () => {
    form.resetFields()
  };

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col lg={{ span: 17 }} md={{ span: 24 }}>
          <section style={componentStyle}>
            {contextHolder}
            <Form
              name="fancy-form"
              onFinish={onFinish}
              {...formItemLayout}
              form={form}
              style={{
                maxWidth: 600,
              }}
            >
              <Item
                name="address"
                label="ETH Address"
                tooltip="Prefix '0x' concatenated with the rightmost 20 bytes of the Keccak-256 hash of the ECDSA public key"
                rules={[
                  { required: true, 
                    message: 'ETH Address is required', 
                    whitespace: true 
                  },
                  {
                    message: 'Invalid ETH Address',
                    validator: (_, value) => {
                      if(value === undefined || value.length <= 0){
                        return Promise.resolve();
                      } else {
                        const isValidAddr = web3.utils.isAddress(value);
                        if(!isValidAddr){
                          return Promise.reject("Invalid ETH Address");
                        } 
                        return Promise.resolve();
                      }
                    }
                  }
                ]}
              >
                <Input 
                  style={{
                    display: 'inline-block',
                    width: 340,
                  }}
                  placeholder="Please input"
                  disabled={loading}
                />
              </Item>
              <Item
                name="amount"
                label="Amount to send"
                rules={[
                  { required: true, 
                    type: "number",
                    message: 'Amount is required', 
                    whitespace: true 
                  },
                  {
                    type: 'number',
                    min: 1,
                    max: 999,
                    message: 'Amount must be between 1 and 999', 
                    whitespace: true 
                  },
                ]}
              >
                <InputNumber 
                  style={{
                    display: 'inline-block',
                    width: 160,
                  }}
                  min={1} 
                  placeholder="Input amount to send"
                  disabled={loading}
                />
              </Item>
              <Item
                name="otp"
                label="OTP Authentication"
                rules={[
                  { required: true, 
                    message: 'OTP is required', 
                    whitespace: true 
                  }
                ]}
              >
                <Input 
                  style={{
                    display: 'inline-block',
                    width: 95,
                  }}
                  placeholder="Input OTP"
                  disabled={loading}
                />
              </Item>
              
              <Item label=" " colon={false}>
                <Button type="default" style={{margin: "0px 15px"}} onClick={onReset} disabled={loading}>
                  Clear
                </Button>
                <Button type="primary" htmlType="submit" loading={loading}>
                  SEND TOKENS
                </Button>
              </Item>
            </Form>
          </section>
        </Col>
      </Row>
    </>
  );
};

export default FancyForm;
