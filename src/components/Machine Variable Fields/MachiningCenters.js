export const MachiningCenters = {
    VerticalMachiningCenters: [
        { name: 'brand', label: 'Brand', type: 'text', placeholder: 'Enter Brand', pattern: /^[a-zA-Z0-9-\s]*$/, maxLength: 50 },
        { name: 'model', label: 'Model', type: 'text', placeholder: 'Enter Model', pattern: /^[a-zA-Z0-9-\s]*$/, maxLength: 50 },
        { name: 'yearOfPurchase', label: 'Year of Purchase', type: 'text', placeholder: 'Enter year of purchase', pattern: /^[0-9]{4}$/, maxLength: 4 },
        { name: 'duty', label: 'Duty', type: 'select', placeholder: "Please choose type", options: [{ value: 'Light', label: 'Light' }, { value: 'Medium', label: 'Medium' }, { value: 'Heavy', label: 'Heavy' }] },
        { name: 'no_of_axis', label: 'No. Of Axis', type: 'text', placeholder: "Enter in number", pattern: /^[0-9]{0,4}$/, maxLength: 4 },
        { name: 'table_size', label: 'Table Size', type: 'text', placeholder: "800*400 mm", pattern: /^[a-zA-Z0-9\s\-*,]+$/, maxLength: 50 },
        { name: 'max_load_on_the_table', label: 'Max Load_on The Table', type: 'text', placeholder: "Enter in kgs", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'x_axis', label: 'X-Axis', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'y_axis', label: 'Y-Axis', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'z_axis', label: 'Z-Axis', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'distance_between_spindles', label: 'Distance Between Spindles', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'spindle_nose_taper', label: 'Spindle Nose Taper', type: 'text', placeholder: 'Spindle nose taper', pattern: /^[a-zA-Z0-9\s*-,_]+$/, maxLength: 50 },
        { name: 'no_of_tools', label: 'No Of Tools', type: 'text', placeholder: "Enter in number", pattern: /^[0-9]{0,4}$/, maxLength: 4 },
        { name: 'tool_change_system', label: 'Tool Change System', type: 'select', placeholder: "Please choose type", options: [{ value: 'Twin Taper', label: 'Twin Taper' }, { value: 'Direct Pickup', label: 'Direct Pickup' }] },
        { name: 'tool_shank_type', label: 'Tool Shank Type', type: 'text', placeholder: "Enter in BT40", pattern: /^[a-zA-Z0-9\s\-*,]+$/, maxLength: 50 },
        { name: 'cnc_control', label: 'CNC Control', type: 'select', placeholder: "Please choose type", options: [{ value: 'Fanuc', label: 'Fanuc' }, { value: 'Siemens', label: 'Siemens' }] },
        { name: 'automatic_pallet_changer', label: 'Automatic Pallet Changer', type: 'select', placeholder: "Please choose type", options: [{ value: 'Linear', label: 'Linear' }, { value: 'Rotary', label: 'Rotary' }, { value: 'Disc Armless', label: 'Disc Armless' }, { value: 'Others', label: 'Others' }] },
        { name: 'ppk', label: 'PPK', type: 'text', placeholder: "Enter in number", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },

        { name: 'machineHourRate', label: 'Machine Hour Rate', type: 'text', placeholder: "Enter machine hour rate in Rupees", pattern: /^(?:\d{1,5}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 8 },
        { name: 'noOfMachines', label: 'No. Of Machines', type: 'text', placeholder: "Enter no. of machine", pattern: /^\d{1,3}$/, maxLength: 3 },
    ],
    HorizontalMachiningCenters: [
        { name: 'brand', label: 'Brand', type: 'text', placeholder: 'Enter Brand', pattern: /^[a-zA-Z0-9-\s]*$/, maxLength: 50 },
        { name: 'model', label: 'Model', type: 'text', placeholder: 'Enter Model', pattern: /^[a-zA-Z0-9-\s]*$/, maxLength: 50 },
        { name: 'yearOfPurchase', label: 'Year of Purchase', type: 'text', placeholder: 'Enter year of purchase', pattern: /^[0-9]{4}$/, maxLength: 4 },
        { name: 'pallet_size', label: 'Pallet Size', type: 'text', placeholder: '800*400 mm', pattern: /^[a-zA-Z0-9\s\-*,]+$/, maxLength: 50 },
        { name: 'max_load_in_the_kgs', label: 'Max Load in Kgs', type: 'text', placeholder: "Dimension in kgs", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        // { name: 'duty', label: 'Duty', type: 'select', placeholder: "Please choose type", options: [{ value: 'Manual', label: 'Manual' }, { value: 'Light', label: 'Light' }, { value: 'Medium', label: 'Medium' }, { value: 'Heavy', label: 'Heavy' }] },
        { name: 'no_of_indexing_position', label: 'No. of Indexing Position', type: 'text', placeholder: '1 deg * 360', pattern: /^[a-zA-Z0-9\s\-*,]+$/, maxLength: 50 },
        { name: 'positioning_accuracy', label: 'Positioning Accuracy', type: 'text', placeholder: "+/- 6 sec", pattern: /^[a-zA-Z0-9\s\-*,+]+$/, maxLength: 50 },
        { name: 'no_of_axis', label: 'No. Of Axis', type: 'text', placeholder: "Enter in number", pattern: /^[0-9]{0,4}$/, maxLength: 4 },
        // { name: 'table_size', label: 'Table Size', type: 'text', placeholder: "800*400 mm", pattern: /^[a-zA-Z0-9\s\-*,]+$/, maxLength: 50 },
        // { name: 'max_load_on_the_table', label: 'Max Load_on The Table', type: 'text', placeholder: "Enter in kgs", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'x_axis', label: 'X-Axis', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'y_axis', label: 'Y-Axis', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'z_axis', label: 'Z-Axis', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'distance_between_spindles', label: 'Distance Between Spindles', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'spindle_nose_taper', label: 'Spindle Nose Taper', type: 'text', placeholder: 'Spindle nose taper', pattern: /^[a-zA-Z0-9\s*-,_]+$/, maxLength: 50 },
        { name: 'no_of_tools', label: 'No Of Tools', type: 'text', placeholder: "Enter in number", pattern: /^[0-9]{0,4}$/, maxLength: 4 },
        { name: 'tool_change_system', label: 'Tool Change System', type: 'select', placeholder: "Please choose type", options: [{ value: 'Twin Taper', label: 'Twin Taper' }, { value: 'Direct Pickup', label: 'Direct Pickup' }] },
        { name: 'tool_shank_type', label: 'Tool Shank Type', type: 'text', placeholder: "Enter in BT40", pattern: /^[a-zA-Z0-9\s\-*,]+$/, maxLength: 50 },
        { name: 'cnc_control', label: 'CNC Control', type: 'select', placeholder: "Please choose type", options: [{ value: 'Fanuc', label: 'Fanuc' }, { value: 'Siemens', label: 'Siemens' }] },
        { name: 'automatic_pallet_changer', label: 'Automatic Pallet Changer', type: 'select', placeholder: "Please choose type", options: [{ value: 'Linear', label: 'Linear' }, { value: 'Rotary', label: 'Rotary' }, { value: 'Disc Armless', label: 'Disc Armless' }, { value: 'Others', label: 'Others' }] },
        { name: 'ppk', label: 'PPK', type: 'text', placeholder: "Enter in number", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },

        { name: 'machineHourRate', label: 'Machine Hour Rate', type: 'text', placeholder: "Enter machine hour rate in Rupees", pattern: /^(?:\d{1,5}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 8 },
        { name: 'noOfMachines', label: 'No. Of Machines', type: 'text', placeholder: "Enter no. of machine", pattern: /^\d{1,3}$/, maxLength: 3 },
    ],
    DrillTapMachiningCenters: [
        { name: 'brand', label: 'Brand', type: 'text', placeholder: 'Enter Brand', pattern: /^[a-zA-Z0-9-\s]*$/, maxLength: 50 },
        { name: 'model', label: 'Model', type: 'text', placeholder: 'Enter Model', pattern: /^[a-zA-Z0-9-\s]*$/, maxLength: 50 },
        { name: 'yearOfPurchase', label: 'Year of Purchase', type: 'text', placeholder: 'Enter year of purchase', pattern: /^[0-9]{4}$/, maxLength: 4 },
        // { name: 'duty', label: 'Duty', type: 'select', placeholder: "Please choose type", options: [{ value: 'Manual', label: 'Manual' }, { value: 'Light', label: 'Light' }, { value: 'Medium', label: 'Medium' }, { value: 'Heavy', label: 'Heavy' }] },
        // { name: 'no_of_axis', label: 'No. Of Axis', type: 'text', placeholder: "Enter in number", pattern: /^[0-9]{0,4}$/, maxLength: 4 },
        { name: 'table_size', label: 'Table Size', type: 'text', placeholder: "800*400 mm", pattern: /^[a-zA-Z0-9\s\-*,]+$/, maxLength: 50 },
        { name: 'max_load_on_the_table', label: 'Max Load on The Table', type: 'text', placeholder: "Enter in kgs", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'x_axis_travel', label: 'X-Axis Travel', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'y_axis_travel', label: 'Y-Axis Travel', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'z_axis_travel', label: 'Z-Axis Travel', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'spindle_nose_taper', label: 'Spindle Nose Taper', type: 'text', placeholder: 'Spindle nose taper', pattern: /^[a-zA-Z0-9\s*-,_]+$/, maxLength: 50 },
        { name: 'no_of_tools', label: 'No Of Tools', type: 'text', placeholder: "Enter in number", pattern: /^[0-9]{0,4}$/, maxLength: 4 },
        { name: 'tool_change_system', label: 'Tool Change System', type: 'select', placeholder: "Please choose type", options: [{ value: 'Twin Taper', label: 'Twin Taper' }, { value: 'Direct Pickup', label: 'Direct Pickup' }] },
        { name: 'tool_shank_type', label: 'Tool Shank Type', type: 'text', placeholder: "Enter in BT40", pattern: /^[a-zA-Z0-9\s\-*,]+$/, maxLength: 50 },
        { name: 'cnc_control', label: 'CNC Control', type: 'select', placeholder: "Please choose type", options: [{ value: 'Fanuc', label: 'Fanuc' }, { value: 'Siemens', label: 'Siemens' }] },
        { name: 'automatic_pallet_changer', label: 'Automatic Pallet Changer', type: 'select', placeholder: "Please choose type", options: [{ value: 'Linear', label: 'Linear' }, { value: 'Rotary', label: 'Rotary' }, { value: 'Disc Armless', label: 'Disc Armless' }, { value: 'Others', label: 'Others' }] },
        { name: 'ppk', label: 'PPK', type: 'text', placeholder: "Enter in number", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },

        { name: 'machineHourRate', label: 'Machine Hour Rate', type: 'text', placeholder: "Enter machine hour rate in Rupees", pattern: /^(?:\d{1,5}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 8 },
        { name: 'noOfMachines', label: 'No. Of Machines', type: 'text', placeholder: "Enter no. of machine", pattern: /^\d{1,3}$/, maxLength: 3 },
    ],
    TurnMillMachiningCenters: [
        { name: 'brand', label: 'Brand', type: 'text', placeholder: 'Enter Brand', pattern: /^[a-zA-Z0-9-\s]*$/, maxLength: 50 },
        { name: 'model', label: 'Model', type: 'text', placeholder: 'Enter Model', pattern: /^[a-zA-Z0-9-\s]*$/, maxLength: 50 },
        { name: 'yearOfPurchase', label: 'Year of Purchase', type: 'text', placeholder: 'Enter year of purchase', pattern: /^[0-9]{4}$/, maxLength: 4 },
        { name: 'swing_over_bed_in_mm', label: 'Swing over Bed', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'swing_over_carriage_in_mm', label: 'Swing over Carriage', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'max_turning_diameter_in_mm', label: 'Max Turning Diameter', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'max_turning_length_in_mm', label: 'Max Turning Length', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'distance_between_centers', label: 'Distance Between Centers', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'spindle_size_/nose', label: 'Spindle Size/Nose', type: 'text', placeholder: 'A2-6', pattern: /^[a-zA-Z0-9\s\-*,]+$/, maxLength: 50 },
        { name: 'max_bar_capacity_in_mm', label: 'Max Bar Capacity', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'chuck_size', label: 'Chuck Size', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'tool_change_system', label: 'Tool Change System', type: 'select', placeholder: "Please choose type", options: [{ value: 'Twin Taper', label: 'Twin Taper' }, { value: 'Direct Pickup', label: 'Direct Pickup' }] },
        { name: 'tool_shank_type', label: 'Tool Shank Type', type: 'text', placeholder: "Enter in BT40", pattern: /^[a-zA-Z0-9\s\-*,]+$/, maxLength: 50 },
        { name: 'no_of_stations', label: 'No Of Stations(max)', type: 'text', placeholder: "Enter in number", pattern: /^[0-9]{0,4}$/, maxLength: 4 },
        { name: 'max_boring_dia_in_mm', label: 'Max Boring Bar Diameter', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'ppk', label: 'PPK', type: 'text', placeholder: "Enter in number", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },

        { name: 'machineHourRate', label: 'Machine Hour Rate', type: 'text', placeholder: "Enter machine hour rate in Rupees", pattern: /^(?:\d{1,5}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 8 },
        { name: 'noOfMachines', label: 'No. Of Machines', type: 'text', placeholder: "Enter no. of machine", pattern: /^\d{1,3}$/, maxLength: 3 },
    ],
}