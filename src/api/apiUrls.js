// register account url
export const REGISTER_ACCOUNT_URL = "/registration/saveuser";
export const CHECK_REGISTERED_USER = "/registration/userexists";

// login url
export const LOGIN_URL = "/users/login";
export const CURRENT_USER_URL = "/users/currentUser";

// machines register url
export const GET_MACHINES_BY_CAT_AND_TYPE_URL = '/machines/getMachinesByCatAndType';

// File upload Url
export const FILE_UPLOAD_URL = '/uploadfile/uploadToB2';

// Quotes related Url 
export const UPDATE_QUOTE_URL = "/booking/updatequote";
export const GET_ALL_QUOTES_URL = "/booking/getallquotes";
export const QUOTE_SAVE_URL = "/booking/savequote";

// Orders related Url
export const GET_ALL_ORDERS_URL = "/order/getAllOrders";

//Shipment related Url
export const CREATE_SHIPMENT_URL = "/order/shipment/createshipment";
export const UPDATE_SHIPMENT_URL = "/order/shipment/updateshipment";
export const GET_SHIPMENT_BY_ORDERID_URL = "/order/shipment/getshipmentbyorderid";
export const GET_ALL_SHIPMENTS = "/order/shipment/getAllShipments";

// first sample report
export const CREATE_FIRST_SAMPLE_REPORT_URL = "/order/createfirstsamplereport";
export const UPDATE_FIRST_SAMPLE_REPORT_URL = "/order/updatefirstsamplereport";
export const GET_FIRST_SAMPLE_REPORT_ORDERID_URL = "/order/getallfsreportsbyorderid";

// final report
export const CREATE_FINAL_REPORT_URL = "/order/createfinalreport";
export const UPDATE_FINAL_REPORT_URL = "/order/updatefinalreport";
export const GET_FINAL_SAMPLE_REPORT_ORDERID_URL = "/order/getallfinalreportsbyorderid";

// Company users data
export const GET_COMPANY_DETAILS_BY_ID = "/user/getcompanydetailsbyid";

// Get Registered Machines
export const GET_MACHINES_BY_ID = "/machines/getMachinesByCompanyId";
// Get Machines By Machine ID
export const GET_MACHINES_BY_MACHONE_ID = "/machines/getMachinesByMachineId";

// ******************************///*****************///
//Admin URLS

export const GET_COMPANY_DETAILS = '/user/getCompanyDetails';

// admin password changes
export const ADMIN_PASSWORD_CHANGE = "/users/updatepassword";

//tools configuration
export const SEARCH_TOOLS = "/tools/searchtools";
export const SEARCH_SUGGESTIONS = "/tools/searchsuggestions";