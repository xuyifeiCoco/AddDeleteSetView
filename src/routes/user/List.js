import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal } from 'antd'
import classnames from 'classnames'
import { DropOption } from 'components'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import AnimTableBody from 'components/DataTable/AnimTableBody'
import styles from './List.less'

const { confirm } = Modal

const List = ({
  onDeleteItem, onEditItem, isMotion, location, ...tableProps
}) => {
  location.query = queryString.parse(location.search)

  const handleMenuClick = (record, e) => {
    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: 'Are you sure delete this record?',
        onOk () {
          onDeleteItem(record.id)
        },
      })
    }
  }

  const columns = [
    // {
    //   title: 'Avatar',
    //   dataIndex: 'avatar',
    //   key: 'avatar',
    //   width: 64,
    //   className: styles.avatar,
    //   render: text => <img alt="avatar" width={24} src={text} />,
    // },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
    }, {
      title: 'NickName',
      dataIndex: 'NickName',
      key: 'NickName',
    }, {
      title: 'Age',
      dataIndex: 'Age',
      key: 'Age',
    }, {
      title: 'Gender',
      dataIndex: 'Gender',
      key: 'Gender',
    }, {
      title: 'Phone',
      dataIndex: 'Phone',
      key: 'Phone',
    }, {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
    }, {
      title: 'Address',
      dataIndex: 'Address',
      key: 'Address',
    }, {
      title: 'CreateTime',
      dataIndex: 'creat_time',
      key: 'creat_time',
      render: (text, record) => {
        return <span>{new Date(text).format('yyyy-MM-dd')}</span>
      }
    }, {
      title: 'Operation',
      key: 'operation',
      width: 100,
      render: (text, record) => {
        return <DropOption onMenuClick={e => handleMenuClick(record, e)} menuOptions={[{ key: '1', name: 'Update' }, { key: '2', name: 'Delete' }]} />
      },
    },
  ]

  const AnimateBody = (props) => {
    return <AnimTableBody {...props} />
  }

  const CommonBody = (props) => {
    return <tbody {...props} />
  }

  return (
    <Table
      {...tableProps}
      className={classnames(styles.table, { [styles.motion]: isMotion })}
      bordered
      scroll={{ x: 1250 }}
      columns={columns}
      simple
      rowKey={record => record._id}
      components={{
        body: { wrapper: isMotion ? AnimateBody : CommonBody },
      }}
    />
  )
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  isMotion: PropTypes.bool,
  location: PropTypes.object,
}

export default List
