import { Button, DatePicker, Form, message, Select, Spin, Upload, Input, notification, Tooltip } from 'antd';
import {
    CheckCircleOutlined,
    ClockCircleOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    MinusCircleOutlined,
    SyncOutlined,
    ReloadOutlined,
    PlusCircleOutlined,
    PlusOutlined,
    CloseOutlined,
    PaperClipOutlined,
    UploadOutlined,
    LoadingOutlined
} from '@ant-design/icons';
const { TextArea } = Input;
import React, { useEffect, useState } from 'react';
import { LeftCircleOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from 'react-router-dom';
import HeaderTitle from '../../utils/HeaderTitle';
import { useAuth } from '../../contexts/AuthContext';
import axios from '../../api/axios';
import { CREATE_SHIPMENT_URL, FILE_UPLOAD_URL, GET_SHIPMENT_BY_ORDERID_URL, UPDATE_SHIPMENT_URL } from '../../api/apiUrls';
import dayjs from 'dayjs';
import { receiptConfirmation, typesOfGoods, uomChoices } from '../Orders/OrderUtils';
import { formattedDateTime } from '../../utils/utils';
import moment from 'moment/moment';

function Shipment() {
    const location = useLocation();
    const { authUser } = useAuth();
    const { order, reviewShipment } = location.state || {};
    const navigate = useNavigate();

    const [form] = Form.useForm();
    const [shipmentDateTime, setShipmentDateTime] = useState('');
    // edit the materials
    const [isReview, setIsReview] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    // Note: fileUrls will be [url1, url2 ....]
    const [fileUrls, setFileUrls] = useState({});
    // shipment data
    const [shipmentData, setShipmentData] = useState({});

    const [imageFileIsLoading, setImageFileIsLoading] = useState(false);
    const [fileIsLoading, setFileIsLoading] = useState(false);

    // if (!order) {
    //     return <div>No order data found!</div>;
    // }

    const getShipmentByOrderId = async () => {
        try {
            const response = await axios.get(`${GET_SHIPMENT_BY_ORDERID_URL}/${order.order_id}`);
            console.log("getShipmentByOrderId: ", response.data);
            setShipmentData(response.data.result);
        } catch (error) {
            message.error("Something error while fetching shipment data!");
            console.log("shipment data err: ", error);
            setShipmentData({});
        }
    }

    const fetchShipmentDetails = async (orderId) => {
        const response = await axios.get(`${GET_SHIPMENT_BY_ORDERID_URL}/${order.order_id}`);
        console.log("fetchShipmentDetails: ", response);
        if (response.data.message === "Successfully fetched shipment details for order id provided") {
            const formattedDetails = response.data.result.map((detail, index) => {
                // Populate fileUrls with image and invoice URLs based on the current index
                const newFileUrls = { ...fileUrls };
                if (detail.image) {
                    newFileUrls[index] = detail.image;
                }
                if (detail.invoice) {
                    newFileUrls[index] = detail.invoice;
                }
                setFileUrls(newFileUrls);
                console.log("newFileUrls: ", newFileUrls);
                // Return the formatted detail
                return {
                    ...detail,
                    typeofgoods: detail.type_of_goods,
                };
            });
            form.setFieldsValue({ shipment_details: formattedDetails });
            form.setFieldsValue({ shipment_datetime: moment(formattedDetails[0].shipment_date) });
            console.log("formattedDetails: ", formattedDetails);
        }
    };

    // Set review mode and trigger shipment fetching when reviewShipment is true
    useEffect(() => {
        if (reviewShipment && !isReview) {
            setIsReview(true);
        }
    }, [reviewShipment]);

    useEffect(() => {
        if (!reviewShipment) {
            getShipmentByOrderId();
        }
    }, []);

    // Fetch shipment details when isReview becomes true
    useEffect(() => {
        if (isReview) {
            fetchShipmentDetails(order.order_id);
        }
    }, [isReview, order.order_id]);

    const resetForm = () => {
        form.resetFields();
    }

    const onOk = (value) => {
        console.log('onOk: ', value);
    };

    // File Upload API
    const uploadFileToServer = async (file, name) => {
        const formData = new FormData();
        formData.append('fileName', file);
        try {
            const response = await axios.post(FILE_UPLOAD_URL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            // console.log("response. file backblazedata: ", response.data);
            setFileUrls((prev) => ({
                ...prev,
                [name]: response.data.fileUrl,
            }));

            return response.data.fileUrl;
        } catch (error) {
            console.error("Error uploading file: ", error);
            message.error('File upload failed');
            return null;
        }
    };

    const handleInvoiceChange = async (info, name) => {
        console.log("handleInvoiceChange: ", info);
        try {
            setFileIsLoading(true);
            const fileUrl = await uploadFileToServer(info.fileList[0].originFileObj);
            const isPdf = info.fileList[0].type === 'application/pdf';
            const isLt2M = info.fileList[0].size / 1024 / 1024 < 2;

            if (!isPdf) {
                // Show error message for non-PDF files
                message.warning('You can only upload PDF file!');
                console.warn('You can only upload PDF file!');
                setFileIsLoading(false);
            } else if (!isLt2M) {
                // Show error message for files larger than 2MB
                message.warning('File must be smaller than 2MB!');
                console.warn('File must be smaller than 2MB!');
                setFileIsLoading(false);
            } else {
                setFileUrls((prev) => ({
                    ...prev,
                    [name]: fileUrl,
                }));
                setFileIsLoading(false);
                message.success("Invoice File Uploaded!");
            }

        } catch (error) {
            console.error('File upload error:', error);
            message.error('File upload failed. Please try again.');
            setFileIsLoading(false);
        }
    };

    const handleImageChange = async (info, name) => {
        console.log("handleInvoiceChange: ", info);
        try {
            setImageFileIsLoading(true);
            const fileUrl = await uploadFileToServer(info.fileList[0].originFileObj);
            const isImageFormat = info.fileList[0].type === 'application/jpg' || 'application/jpeg' || 'application/png';
            const isLt2M = info.fileList[0].size / 1024 / 1024 < 2;

            if (!isImageFormat) {
                // Show error message for non-PDF files
                message.warning('You can only upload PDF file!');
                console.warn('You can only upload PDF file!');
                setImageFileIsLoading(false);
            } else if (!isLt2M) {
                // Show error message for files larger than 2MB
                message.warning('File must be smaller than 2MB!');
                console.warn('File must be smaller than 2MB!');
                setImageFileIsLoading(false);
            } else {
                setFileUrls((prev) => ({
                    ...prev,
                    [name]: fileUrl,
                }));
                setImageFileIsLoading(false);
                message.success(`Image File Uploaded!`);
            }

        } catch (error) {
            console.error('File upload error:', error);
            message.error('File upload failed. Please try again.');
            setImageFileIsLoading(false);
        }
    };

    const handleFileRemove = (name) => {
        setFileUrls((prev) => {
            const updatedUrls = { ...prev };
            delete updatedUrls[name];
            return updatedUrls;
        });
    };


    const notifyMissingInvoice = () => {
        notification.error({
            message: 'Invoice is Required',
            description: 'Please attach an invoice file when selecting "Invoice" as the type of goods.',
            duration: 4,
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        errorInfo.errorFields.forEach(fieldError => {
            message.error(fieldError.errors[0]);
        });
    };

    const updateShipmentFn = async () => {
        try {
            const data = form.getFieldsValue();
            data.orderid = order.order_id;
            console.log("updateShipmentFn: ", data);
            const response = await axios.patch(UPDATE_SHIPMENT_URL, data);
            console.log("response update ship: ", response);
            message.success(response.data.message);
            setIsReview(false);
        } catch (error) {
            message.error("There is some error while updating the shipment!");
            console.log("shipment update err: ", error);
        }

    }

    const onFinish = async (values) => {
        values.orderid = order.order_id;
        values.shipment_datetime = shipmentDateTime;
        values.goods_status = "goods_in_transit";
        try {
            console.log('before Success:', values);
            const checkInvoice = values.shipment_details.find((data) => data.typeofgoods === 'invoice');

            if (!checkInvoice) {
                notifyMissingInvoice();
            } else {
                // Proceed with form submission
                // console.log('Form values:', values);
                console.log('Success:', values);
                // ... handle form submission
                const updatedShipmentDetails = await Promise.all(
                    values.shipment_details.map(async (detail, index) => {
                        let updatedDetail = { ...detail };
                        if (fileUrls[index]) {
                            updatedDetail.image = fileUrls[index];
                        }
                        if (updatedDetail.typeofgoods === 'invoice') {
                            updatedDetail = { typeofgoods: 'invoice', invoice: updatedDetail.image };
                        }
                        return updatedDetail;
                    })
                );
                const finalValues = { ...values, shipment_details: updatedShipmentDetails };
                console.log('Success22:', finalValues);
                const shipmentRes = await axios.post(CREATE_SHIPMENT_URL, finalValues);
                console.log("shipmentRes: ", shipmentRes);
                message.success(shipmentRes.data.message);
                // resetForm(); // clear the form data
                navigate(-1); // redirect to previous page
            }

        } catch (error) {
            console.error('Shipment error:', error);
            message.error('Shipment failed. Please try again.');
            resetForm(); // clear the form data
        }
    };

    const handleSelectChange = (value, name) => {
        console.log("handleSelectChange name: ", name);
        console.log("handleSelectChange value: ", value);
        form.setFieldsValue({ [name]: value });
    };

    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < dayjs().startOf('day');
    };

    return (
        <>
            <div className="container">
                <Button icon={<LeftCircleOutlined />} type='link' onClick={() => navigate(-1)}>Back</Button>
                <h5 className='text-center'>Shipment for (Order ID: {order.order_id})</h5>
                <hr />
                <Form
                    name="basic"
                    onFinish={isReview ? updateShipmentFn : onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout='vertical'
                    form={form}
                    initialValues={{
                        shipment_details: [
                            {
                                typeofgoods: 'raw_material', // Default type of goods
                            },
                        ],
                    }}
                >
                    {/* Shipment Date Time */}
                    <div className='row'>
                        <div className="col">
                            <Form.Item
                                label="Shipment Date Time"
                                name="shipment_datetime"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your shipment date & time!',
                                    },
                                ]}
                                required
                            >
                                {!isReview &&
                                    <DatePicker
                                        disabledDate={disabledDate}
                                        showTime={{
                                            format: 'hh:mm A',
                                            use12Hours: true,
                                        }}
                                        name='shipment_date'
                                        onChange={(value, dateString) => {
                                            console.log('Selected Time: ', value);
                                            console.log('Formatted Selected Time: ', dateString);
                                            setShipmentDateTime(dateString);
                                        }}
                                        onOk={onOk}
                                        placeholder="Select shipment date"
                                    />
                                }

                                {isReview && (
                                    <>{formattedDateTime(form.getFieldValue('shipment_date'))}</>
                                )}
                            </Form.Item>
                        </div>
                    </div>

                    {/* Other Data to update */}
                    <div className="row">
                        <div className="col">
                            <Form.List name="shipment_details">
                                {(fields, { add, remove }) => {
                                    // const typeOfGoods = form.getFieldValue(['shipment_details', name, 'typeofgoods']);
                                    // const isInvoice = typeOfGoods === 'invoice';
                                    return (
                                        <>
                                            <div className="row">
                                                <div className="col">
                                                    {isReview &&
                                                        <p><span style={{ fontWeight: 'bold' }}>Note:</span>&nbsp;<span style={{ color: "red" }}>You can't modify any of the below fields except receipt confirmation</span></p>
                                                    }
                                                </div>
                                            </div>
                                            {fields.map(({ key, name, ...restField }) => {
                                                return (
                                                    <div className='row' key={key}>
                                                        <h6>Shipment Details - {name + 1}</h6>
                                                        <div className="col">
                                                            <Form.Item
                                                                label="Type of Goods"
                                                                {...restField}
                                                                name={[name, 'typeofgoods']}
                                                                value={selectedItems}
                                                                onChange={setSelectedItems}
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message: 'Please input your type of goods!',
                                                                    },
                                                                ]}
                                                            >

                                                                {isReview ? form.getFieldValue(['shipment_details', name, 'typeofgoods']) : <>
                                                                    <Select
                                                                        readOnly={isReview}
                                                                        placeholder='Choose type of goods'
                                                                        style={{
                                                                            width: 'auto'
                                                                        }}
                                                                        onChange={handleSelectChange}
                                                                        options={typesOfGoods}
                                                                    />
                                                                </>}
                                                            </Form.Item>
                                                        </div>

                                                        {form.getFieldValue(['shipment_details', name, 'typeofgoods']) !== 'invoice' && (
                                                            <>
                                                                <div className="col">
                                                                    <Form.Item
                                                                        label="Description"
                                                                        {...restField}
                                                                        name={[name, 'description']}
                                                                        rules={[
                                                                            {
                                                                                required: true,
                                                                                message: 'Please input your description!',
                                                                            },
                                                                        ]}
                                                                        required
                                                                    >
                                                                        <TextArea rows={3} readOnly={isReview} placeholder="Enter your description (max: 200 words)" maxLength={200} showCount />
                                                                    </Form.Item>
                                                                </div>

                                                                <div className="col">
                                                                    <Form.Item
                                                                        label="Shipment Qty"
                                                                        {...restField}
                                                                        name={[name, 'quantity']}
                                                                        rules={[
                                                                            {
                                                                                required: true,
                                                                                message: 'Please input your shipment quantity!',
                                                                            },
                                                                            {
                                                                                pattern: /^\d{1,5}$/, // Regex pattern to match 10 digits
                                                                                message: 'Please enter a valid number! (upto 5 digits)',
                                                                            },
                                                                        ]}
                                                                        required
                                                                    >
                                                                        <Input placeholder='Enter shipment quantity' readOnly={isReview} />
                                                                    </Form.Item>
                                                                </div>

                                                                <div className="col">
                                                                    <Form.Item
                                                                        label={"UOM"}
                                                                        {...restField}
                                                                        name={[name, 'UOM']}
                                                                        rules={[
                                                                            {
                                                                                required: true,
                                                                                message: 'Please input your UOM!',
                                                                            },
                                                                        ]}
                                                                    >
                                                                        <Select placeholder='Choose UOM' style={{ width: '100%' }} options={uomChoices} />
                                                                    </Form.Item>
                                                                </div>

                                                                {isReview &&
                                                                    <div className="col">
                                                                        <Form.Item
                                                                            label="Receipt Confirmation"
                                                                            {...restField}
                                                                            name={[name, 'received_status']}
                                                                            rules={[
                                                                                {
                                                                                    required: true,
                                                                                    message: 'Please input receipt confirmation!',
                                                                                },
                                                                            ]}
                                                                        >
                                                                            <Select placeholder='Choose Receipt Confirmation' style={{ width: '100%' }} options={receiptConfirmation} />
                                                                        </Form.Item>
                                                                    </div>
                                                                }

                                                                {!fileUrls[name] && <div className="col-auto mt-4">
                                                                    <Form.Item
                                                                        {...restField}
                                                                        name={[name, 'image']}
                                                                    >
                                                                        <Upload
                                                                            valuePropName="file"
                                                                            getValueFromEvent={(e) => {
                                                                                if (Array.isArray(e)) {
                                                                                    return e;
                                                                                }
                                                                                return e && e.file;
                                                                            }}
                                                                            onChange={(info) => handleImageChange(info, name)}
                                                                            beforeUpload={() => false}
                                                                            accept=".jpg,.jpeg,.png"
                                                                            maxCount={1}
                                                                            showUploadList={false}
                                                                        >
                                                                            {imageFileIsLoading ? <>
                                                                                <Spin indicator={<LoadingOutlined spin />} />
                                                                            </> : <Button type={'primary'} icon={<PlusCircleOutlined />}>{imageFileIsLoading ? 'Uploading...' : 'Attach Image'} </Button>}
                                                                            <p>Max: 2 MB (Accept jpg,jpeg,png Formats)</p>
                                                                        </Upload>
                                                                    </Form.Item>

                                                                </div>
                                                                }
                                                            </>
                                                        )}

                                                        {form.getFieldValue(['shipment_details', name, 'typeofgoods']) === 'invoice' && (
                                                            <>
                                                                {!fileUrls[name] && <div className="col-auto mt-4">
                                                                    <Form.Item
                                                                        {...restField}
                                                                        name={[name, 'invoice']}
                                                                        rules={[
                                                                            {
                                                                                required: true,
                                                                                message: 'Invoice file is required!',
                                                                            },
                                                                        ]}
                                                                    >
                                                                        <Upload
                                                                            valuePropName="file"
                                                                            getValueFromEvent={(e) => {
                                                                                if (Array.isArray(e)) {
                                                                                    return e;
                                                                                }
                                                                                return e && e.file;
                                                                            }}
                                                                            onChange={(info) => handleInvoiceChange(info, name)}
                                                                            beforeUpload={() => false}
                                                                            accept=".pdf"
                                                                            maxCount={1}
                                                                            showUploadList={false}
                                                                        >
                                                                            {fileIsLoading ? <>
                                                                                <Spin indicator={<LoadingOutlined spin />} />
                                                                            </> : <Button type={'primary'} icon={<PlusCircleOutlined />}>{fileIsLoading ? 'Uploading...' : 'Attach invoice'} </Button>}
                                                                            <p>Max: 2 MB (Only PDF Format)</p>
                                                                        </Upload>
                                                                    </Form.Item>

                                                                </div>
                                                                }
                                                            </>
                                                        )}

                                                        {fileUrls[name] && (
                                                            <div className='col-auto mt-4'>
                                                                <div>
                                                                    <a href={fileUrls[name]} target="_blank" rel="noopener noreferrer">View File</a>
                                                                    <Button type="link" onClick={() => handleFileRemove(name)}>Remove</Button>
                                                                </div>
                                                            </div>
                                                        )}

                                                        <div className="col-auto mt-4">
                                                            {!isReview && fields.length > 1 ? (
                                                                <Tooltip title="Remove this shipment detail">
                                                                    <Button type="primary" danger icon={<CloseOutlined />} onClick={() => remove(name)} />
                                                                </Tooltip>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                            <Form.Item>
                                                {fields.length < 4 && !isReview && (
                                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                        Add more shipment details (Upto 4)
                                                    </Button>
                                                )}
                                            </Form.Item>
                                        </>
                                    )
                                }}
                            </Form.List>
                        </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="row">
                        <div className="col">
                            <Form.Item>
                                {!isReview && (
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                )}
                                {isReview && (
                                    <Button type="primary" htmlType="submit">
                                        Send Goods Receipt Confirmation
                                    </Button>
                                )}
                            </Form.Item>
                        </div>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default Shipment