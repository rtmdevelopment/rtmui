import React, { useState, useEffect, useId } from 'react'
import HeaderTitle from '../../utils/HeaderTitle';
import { Card, Col, Row, Button, Input, Space, Select, AutoComplete, Spin, Form, Modal, Badge, Pagination, message, Result, Empty } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ViewMachineDetail from './ViewMachineDetail';
const { Search } = Input;
const { Meta } = Card;
const { Option } = Select;
import Config from '../../env.json'
import { useAuth } from '../../contexts/AuthContext';
import { FileSearchOutlined, WechatOutlined } from '@ant-design/icons';

function HireMachines() {
    const { authUser } = useAuth();
    const [currentPage, setCurrentPage] = useState(1);
    const [form] = Form.useForm();

    const [categories, setCategories] = useState([]);
    const [machineTypes, setMachineTypes] = useState([]);
    const [categoryValue, setCategoryValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [selectedMachineCategory, setSelectedMachineCategory] = useState('');
    const [selectedMachineType, setSelectedMachineType] = useState('');

    const [categoryAndType, setCategoryAndType] = useState([]);
    // pagination
    const [pages, setPages] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [showAllMachines, setShowAllMachines] = useState([]);
    const [totalPages, setTotalPages] = useState(null);
    // modal
    const [open, setOpen] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [passData, setPassData] = useState(null);

    const navigate = useNavigate();

    const fetchData = async (pages) => {
        try {
            setLoading(true);
            const baseUrl = `${Config.localEndpoint}/api/booking/searchMachines`;

            // query parameters
            const queryParams = {
                category: selectedMachineCategory,
                machineType: selectedMachineType,
                page: pages
            };

            const response = await axios.get(baseUrl, {
                params: queryParams,
            });

            // Handle the response data
            setShowAllMachines(response.data.paginatedResults);
            setPages(response.data.page);
            setPageSize(response.data.pageSize);
            setTotalPages(response.data.totalItems);
            message.success(response.data.message);
            setLoading(false);
            console.log('Response data:', response.data);
        } catch (error) {
            // Handle errors
            setLoading(false);
            message.error("There is some error while searching the machine!", error.message);
            console.error('Error fetching data:', error);
        }
    };

    const getAllMachinesCategoryAndType = async () => {
        try {
            const baseUrl = `${Config.localEndpoint}/api/machines/getMachinesByCatAndType`;
            // const baseUrl = 'http://localhost:5100/api/machines/getMachinesByCatAndType';
            const response = await axios.get(baseUrl);
            const machineCategories = response.data;
            console.log("categoryNames: ", machineCategories);
            const machinesKey = Object.keys(machineCategories);
            setCategoryAndType(machineCategories);
            setCategories(machinesKey);
            console.log("machinesKey log: ", machinesKey);
        } catch (error) {
            // Handle errors
            console.error('Error getAllMachinesCategory data:', error);
        }
    }

    const getAllMachines = async (pages) => {
        try {
            setLoading(true);
            const apiUrl = `${Config.localEndpoint}/api/machines/getAllMachines`;
            // const apiUrl = `http://localhost:5100/api/machines/getAllMachines`; // Replace with your actual API endpoint
            const params = {
                page: pages,
            };
            const machinesData = await axios.get(apiUrl, { params });
            setShowAllMachines(machinesData.data.paginatedResults);
            setPages(machinesData.data.page);
            setPageSize(machinesData.data.pageSize);
            setTotalPages(machinesData.data.totalItems);
            message.success(machinesData.data.message);
            setLoading(false);
            console.log("all machinesData: ", machinesData);
        } catch (error) {
            // Handle errors
            setLoading(false);
            message.error("There is some error!", error.message);
            console.error('Error machinesData data:', error);
        }
    }

    const handleCategoryChange = (value) => {
        setCategoryValue(value);
        if (value) {
            const values = categoryAndType[value];
            setMachineTypes(values);
            console.log("setMachineTypes: ", values);
        }
        setSelectedMachineCategory(value);
    };

    const handleTypeChange = (value) => {
        console.log("handleTypeChange", value);
        setSelectedMachineType(value);
    };

    const handleMachineTypeChange = (value) => {
        setMachineTypeValue(value);
    };

    const clearSearch = () => {
        setSelectedMachineCategory('');
        setSelectedMachineType('');
        setTotalPages(null);
        form.resetFields();
        // getAllMachines();
    }

    const handleViewDetail = (machine) => {
        console.log("handleViewDetail: ", machine);
        setOpen(true);
        setShowViewModal(true);
        setPassData(machine);
    }

    useEffect(() => {
        getAllMachinesCategoryAndType();
        // getAllMachines();
    }, []);

    const formatUpperCase = (text) => {
        return text.toUpperCase();
    }

    const onShowSizeChange = (current, pageSize) => {
        console.log("onShowSizeChange:", current, pageSize);
    };

    const handlePageChange = (page, pageSize) => {
        setPages(page);
        if (selectedMachineType && selectedMachineCategory) {
            fetchData(page);
        } else {
            // alert("get all");
            getAllMachines(page);
        }
        console.log("handlePageChange:", page, pageSize);
    }

    const searchData =
        (
            <Result
                icon={<FileSearchOutlined />}
                title="Please search the type of machine you would like to book!"
            // extra={<Button type="primary">Next</Button>}
            />

        )

    const noData = (
        <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
                height: 60,
            }}
            description={
                <span style={{ fontSize: '22px' }}>
                    No Machines Found!
                </span>
            }
        >
        </Empty>
    )

    // if (loading) {
    //     return (
    //         <Spin tip='Loading updated machines...' size='large' />
    //     )
    // }

    return (
        <>
            <HeaderTitle title={'Hire a Machine'} />
            <Form form={form} layout='vertical'>
                <h4 style={{ textAlign: "left" }}>Search your machines</h4>
                <Row gutter={16}>
                    <Col>
                        <Form.Item name={'categoryInput'} label="Choose Machine Category" rules={[
                            { required: true, message: "You must choose the machine category" }
                        ]}>

                            <Select
                                style={{ width: '100%' }}
                                placeholder="Select Category"
                                onChange={handleCategoryChange}
                                value={selectedMachineCategory}
                            >
                                {loading ? (
                                    <Select.Option key="loading" disabled>
                                        <Spin tip='Loading...' />
                                    </Select.Option>
                                ) : (
                                    categories.map((item, index) => (
                                        <Select.Option key={index} value={item}>
                                            {item}
                                        </Select.Option>
                                    ))
                                )}
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col>
                        <Form.Item name={'typeInput'} label="Choose Machine Type" rules={[
                            { required: true, message: "You must choose the machine type" }
                        ]}>
                            <Select

                                style={{ width: '100%' }}
                                placeholder="Select Machine Type"
                                onChange={handleTypeChange}
                                value={selectedMachineType}
                            >
                                {loading ? (
                                    <Select.Option key="loading" disabled>
                                        <Spin tip='Loading2...' />
                                    </Select.Option>
                                ) : (
                                    machineTypes.map((item, index) => (
                                        <Select.Option key={index} value={item}>
                                            {item}
                                        </Select.Option>
                                    ))
                                )}
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col>
                        <Button type="primary" onClick={fetchData} style={{ marginTop: "30px" }}>Search</Button>
                    </Col>
                    <Col>
                        <Button onClick={clearSearch} style={{ marginTop: "30px" }}>Clear search</Button>
                    </Col>
                </Row>
            </Form>
            <br />
            {/* Search Message */}
            {(!selectedMachineCategory || !selectedMachineType) && <>{searchData}</>}

            {/* Loading */}
            {loading && <Spin tip='Loading updated machines' size='large'><div style={{
                padding: '50px',
                background: 'rgba(0, 0, 0, 0.05)',
                borderRadius: '4px',
            }} /></Spin>}

            {/* Display All Machines */}
            <Row gutter={[16, 16]}>
                {!loading && totalPages > 0 &&
                    showAllMachines.map((machine) => (
                        <Col Col key={machine.id} xs={24} sm={12} md={8} lg={6}>
                            <Badge.Ribbon text={formatUpperCase(machine.Category)} color='red'>
                                {/* <Card
                                    hoverable
                                    cover={<img alt="example" src={`https://picsum.photos/200/300?random=${machine.id}`} style={{ objectFit: 'cover', maxHeight: 200 }} />}
                                    actions={[
                                        <Button onClick={() => handleViewDetail(machine)}>View Details</Button>,
                                        <Button type="primary" onClick={() => navigate(`booking/${machine.id}`)}>Book</Button>,
                                    ]}
                                    style={{ width: '100%' }}
                                    title={machine.companyName}
                                >
                                    <Meta style={{ fontWeight: "bold", textAlign: "left" }} description={machine.Machine_Type} />
                                    <Meta
                                        description={
                                            <ul style={{ fontWeight: "bold", listStyle: 'none', textAlign: "left" }}>
                                                <li>{formatUpperCase('Brand')}: {machine.Brand}</li>
                                                <li>{formatUpperCase('Year')}: {machine.Year_of_Purchase}</li>
                                                <li>{formatUpperCase('Model')}: {machine.Model}</li>
                                                <li>{formatUpperCase('Score')}: {machine.Score}</li>
                                            </ul>
                                        }

                                    />
                                </Card> */}
                                <Card
                                    style={{ width: '100%', marginTop: 16 }}
                                    cover={<img alt="example" src="https://via.placeholder.com/150" style={{ objectFit: 'cover', maxHeight: 200 }} />}
                                    actions={[
                                        <Button onClick={() => handleViewDetail(machine)}>View Details</Button>,
                                        <Button type="primary" onClick={() => navigate(`booking/${machine.id}`)}>Book</Button>,
                                    ]}
                                    hoverable
                                >
                                    <Meta
                                        title={formatUpperCase(machine.CompanyName)}
                                        description={
                                            <div>
                                                {/* <p>Category: {machine.Category}</p> */}
                                                <p>Machine Type: {machine.Machine_Type}</p>
                                                <p>Machine Hour Rate: {machine.Machine_Hour_Rate}</p>
                                                <p>Year: {machine.Year_of_Purchase}</p>
                                                <p>Rating: {machine.Score}</p>
                                                <Button type="link" icon={<WechatOutlined />} onClick={() => handleViewDetail(machine)} size='small'>Chat with Supplier</Button>,

                                            </div>
                                        }
                                    />
                                </Card>
                            </Badge.Ribbon>
                        </Col>

                    ))
                }
            </Row>
            {/* No Machines */}
            {totalPages == 0 &&
                <>{noData}</>
            }

            <br />
            {/* Machines Pagination */}

            {!loading && totalPages > 0 &&
                <Row gutter={[16, 16]}>
                    <Pagination
                        // showSizeChanger
                        // onShowSizeChange={onShowSizeChange}
                        defaultCurrent={pages}
                        total={totalPages}
                        onChange={handlePageChange}
                        showTitle
                    />
                </Row>
            }


            {/* // View Details */}
            {showViewModal && <ViewMachineDetail open={open} setOpen={setOpen} machine={passData} />}
        </>
    )
}

export default HireMachines;