import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, InputNumber, Radio, Modal, Cascader } from 'antd'
import city from '../../utils/city'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

const modal = ({
  item = {},
  onOk,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
  ...modalProps
}) => {
  const handleOk = () => {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key,
      }
      // console.log(data)
      data.Address = data.Address.join(' ')
      onOk(data)
    })
  }

  const modalOpts = {
    ...modalProps,
    onOk: handleOk,
  }

  return (
    <Modal {...modalOpts}>
      <Form layout="horizontal">
        <FormItem label="Name" hasFeedback {...formItemLayout}>
          {getFieldDecorator('name', {
            initialValue: item.name,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="NickName" hasFeedback {...formItemLayout}>
          {getFieldDecorator('NickName', {
            initialValue: item.NickName,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="Gender" hasFeedback {...formItemLayout}>
          {getFieldDecorator('Gender', {
            initialValue: item.Gender,
            rules: [
              {
                required: true,
                type: 'boolean',
              },
            ],
          })(<Radio.Group>
            <Radio value>Male</Radio>
            <Radio value={false}>Female</Radio>
          </Radio.Group>)}
        </FormItem>
        <FormItem label="Age" hasFeedback {...formItemLayout}>
          {getFieldDecorator('Age', {
            initialValue: item.Age,
            rules: [
              {
                required: true,
                type: 'number',
              },
            ],
          })(<InputNumber min={18} max={100} />)}
        </FormItem>
        <FormItem label="Phone" hasFeedback {...formItemLayout}>
          {getFieldDecorator('Phone', {
            initialValue: item.Phone,
            rules: [
              {
                required: true,
                pattern: /^1[34578]\d{9}$/,
                message: 'The input is not valid phone!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="E-mail" hasFeedback {...formItemLayout}>
          {getFieldDecorator('Email', {
            initialValue: item.Email,
            rules: [
              {
                required: true,
                pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
                message: 'The input is not valid E-mail!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="Address" hasFeedback {...formItemLayout}>
          {getFieldDecorator('Address', {
            initialValue: item.Address && item.Address.split(' '),
            rules: [
              {
                required: true,
              },
            ],
          })(<Cascader
            style={{ width: '100%' }}
            options={city}
            placeholder="Pick an address"
          />)}
        </FormItem>
      </Form>
    </Modal>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default Form.create()(modal)
