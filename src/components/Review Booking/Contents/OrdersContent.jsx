import { Table } from 'antd'
import React from 'react'

export default function OrdersContent() {

    const columns = [
        {
            title: 'Name (all screens)',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Age (medium screen or bigger)',
            dataIndex: 'age',
            key: 'age',
            responsive: ['sm', 'md', 'lg'],
        },
        {
            title: 'Address (large screen or bigger)',
            dataIndex: 'address',
            key: 'address',
            responsive: ['sm', 'md', 'lg'],
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
    ];
    return (
        <>
            <div className="container-fluid">
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    title={() => 'My Orders'}
                />
            </div>
        </>
    )
}
