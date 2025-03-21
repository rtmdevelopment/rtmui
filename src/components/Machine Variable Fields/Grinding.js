export const Grinding = {
    CylindricalGrindingMachine: [
        { name: 'brand', label: 'Brand', type: 'text', placeholder: 'Enter Brand', pattern: /^[a-zA-Z0-9-\s]*$/, maxLength: 50 },
        { name: 'type', label: 'Type', type: 'select', placeholder: "Please choose type", options: [{ value: 'Manual', label: 'Manual' }, { value: 'CNC', label: 'CNC' }] },
        { name: 'model', label: 'Model', type: 'text', placeholder: 'Enter Model', pattern: /^[a-zA-Z0-9-\s]*$/, maxLength: 50 },
        { name: 'yearOfPurchase', label: 'Year of Purchase', type: 'text', placeholder: 'Enter year of purchase', pattern: /^[0-9]{4}$/, maxLength: 4 },
        { name: 'swing_diameter_in_mm', label: 'Swing Diameter', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'distance_between_centers_in_mm', label: 'Distance Between Centers', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'max_weight_workpiece_in_kg', label: 'Max Weight of Workpiece (in Kg/s)', type: 'text', placeholder: "Dimension in kg", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'max_grinding_dia_in_mm', label: 'Max Grinding Diameter', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'max_grinding_length_in_mm', label: 'Max Grinding Length', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'angular_grinding_facility', label: 'Angular Grinding Facility', type: 'select', placeholder: "Please choose type", options: [{ value: 'Yes', label: 'Yes' }, { value: 'No', label: 'No' }] },
        { name: 'cncControl', label: 'CNC Control', type: 'select', placeholder: "Please choose type", options: [{ value: 'Fanuc', label: 'Fanuc' }, { value: 'Siemens', label: 'Siemens' }] },
        { name: 'ppk', label: 'PPK', type: 'text', placeholder: "Enter in number", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },

        { name: 'machineHourRate', label: 'Machine Hour Rate', type: 'text', placeholder: "Enter machine hour rate in Rupees", pattern: /^((?:[1-9]\d{0,4}|\d{1,5}\.\d{1,2})|\.\d{1,2})$/, maxLength: 8 },
        { name: 'noOfMachines', label: 'No. Of Machines', type: 'text', placeholder: "Enter no. of machine", pattern: /^(?:[1-9]\d{0,2})$/,maxLength: 3 },
    ],
    InternalGrindingMachine: [
        { name: 'brand', label: 'Brand', type: 'text', placeholder: 'Enter Brand', pattern: /^[a-zA-Z0-9-\s]*$/, maxLength: 50 },
        { name: 'type', label: 'Type', type: 'select', placeholder: "Please choose type", options: [{ value: 'Manual', label: 'Manual' }, { value: 'CNC', label: 'CNC' }] },
        { name: 'model', label: 'Model', type: 'text', placeholder: 'Enter Model', pattern: /^[a-zA-Z0-9-\s]*$/, maxLength: 50 },
        { name: 'yearOfPurchase', label: 'Year of Purchase', type: 'text', placeholder: 'Enter year of purchase', pattern: /^[0-9]{4}$/, maxLength: 4 },
        { name: 'swing_diameter_in_mm', label: 'Swing Diameter', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'distance_between_centers_in_mm', label: 'Distance Between Centers', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'max_weight_workpiece_in_kg', label: 'Max Workpiece Weight (in Kg/s)', type: 'text', placeholder: "Dimension in kg", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'max_grinding_dia_in_mm', label: 'Max Grinding Diameter', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'max_grinding_length_in_mm', label: 'Max Grinding Length', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'cncControl', label: 'CNC Control', type: 'select', placeholder: "Please choose type", options: [{ value: 'Fanuc', label: 'Fanuc' }, { value: 'Siemens', label: 'Siemens' }] },
        { name: 'ppk', label: 'PPK', type: 'text', placeholder: "Enter in number", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },

        { name: 'machineHourRate', label: 'Machine Hour Rate', type: 'text', placeholder: "Enter machine hour rate in Rupees", pattern: /^((?:[1-9]\d{0,4}|\d{1,5}\.\d{1,2})|\.\d{1,2})$/, maxLength: 8 },
        { name: 'noOfMachines', label: 'No. Of Machines', type: 'text', placeholder: "Enter no. of machine", pattern: /^(?:[1-9]\d{0,2})$/, maxLength: 3 },
    ],
    CenterlessGrindingMachine: [
        { name: 'brand', label: 'Brand', type: 'text', placeholder: 'Enter Brand', pattern: /^[a-zA-Z0-9-\s]*$/, maxLength: 50 },
        { name: 'type', label: 'Type', type: 'select', placeholder: "Please choose type", options: [{ value: 'Manual', label: 'Manual' }, { value: 'CNC', label: 'CNC' }] },
        { name: 'model', label: 'Model', type: 'text', placeholder: 'Enter Model', pattern: /^[a-zA-Z0-9-\s]*$/, maxLength: 50 },
        { name: 'yearOfPurchase', label: 'Year of Purchase', type: 'text', placeholder: 'Enter year of purchase', pattern: /^[0-9]{4}$/, maxLength: 4 },
        { name: 'min_grinding_dia_in_mm', label: 'Min Grinding Diameter', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'max_grinding_dia_in_mm', label: 'Max Grinding Diameter', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'grinding_wheel_width_in_mm', label: 'Grinding Wheel Width', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'grinding_wheel_dia_in_mm', label: 'Grinding Wheel Diameter', type: 'text', placeholder: "Dimension in mm", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },
        { name: 'cncControl', label: 'CNC Control', type: 'select', placeholder: "Please choose type", options: [{ value: 'Fanuc', label: 'Fanuc' }, { value: 'Siemens', label: 'Siemens' }] },
        { name: 'ppk', label: 'PPK', type: 'text', placeholder: "Enter in number", pattern: /^(?:\d{1,4}(?:\.\d{1,2})?|\.\d{1,2})$/, maxLength: 7 },

        { name: 'machineHourRate', label: 'Machine Hour Rate', type: 'text', placeholder: "Enter machine hour rate in Rupees", pattern: /^((?:[1-9]\d{0,4}|\d{1,5}\.\d{1,2})|\.\d{1,2})$/, maxLength: 8 },
        { name: 'noOfMachines', label: 'No. Of Machines', type: 'text', placeholder: "Enter no. of machine", pattern: /^(?:[1-9]\d{0,2})$/, maxLength: 3 },
    ]
}