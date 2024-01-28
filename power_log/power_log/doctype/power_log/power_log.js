// Copyright (c) 2024, mohamed Abdulsalam and contributors
// For license information, please see license.txt

frappe.ui.form.on('Power Log', {
	first_reading(frm) {
	    let power_consumption = frm.doc.second_reading - frm.doc.first_reading
	    frm.doc.power_consumption = power_consumption
	    refresh_field("power_consumption")
	},
	second_reading(frm) {
	    let power_consumption = frm.doc.second_reading - frm.doc.first_reading
	    frm.doc.power_consumption = power_consumption
	    refresh_field("power_consumption")
	},
	
})
