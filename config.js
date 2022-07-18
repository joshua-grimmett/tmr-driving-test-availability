module.exports = {
    urls: {
        continuePage: 'https://www.service.transport.qld.gov.au/SBSExternal/public/WelcomeDEReschedule.xhtml?utm_medium=sbs-email&utm_source=tmr-email&utm_campaign=sbs-email-reschedule',
        createEvent: 'https://attendme.eventus.io/create_event?for_group=my-organization-4296',
        eventsList: 'https://attendme.eventus.io/group/my-organization-4296/events/'
    },
    xpaths: {
        continueButton: '//*[@id="j_id_5r:aboutThisServiceForm:continueButton"]',
        acceptButton: '//*[@id="termsAndConditions:TermsAndConditionsForm:acceptButton"]',
        // Booking reference number
        brnInput: '//*[@id="RescheduleBookingForm:bookingRefNum"]',
        emailInput: '//*[@id="RescheduleBookingForm:emailAddress"]',
        confirmBookingButton: '//*[@id="RescheduleBookingForm:actionFieldList:confirmButtonField:confirmButton"]',
        confirmationText: '//*[@id="j_id_4y"]/h2',
        confirmBookingDetailsButton: '//*[@id="OldBookingConfirmationForm:actionFieldList:confirmButtonField:confirmButton"]',
        openRegionButton: '//*[@id="BookingSearchForm:region"]/div[3]',
        confirmLocationButton: '//*[@id="BookingSearchForm:actionFieldList:confirmButtonField:confirmButton"]',
        availableDate: '//*[@id="slotSelectionForm:slotTable_data"]/tr[1]/td[2]/label'
    },
    selectors: {
        availableDate: i => `//*[@id="slotSelectionForm:slotTable_data"]/tr[${i+1}]/td[2]/label`,
        region: (r) =>
                     {
            const index = [
                null,
                'CENTRAL',
                'CQ CALLIDE VALLEY',
                'CQ HIGHLANDS',
                'CQ MACKAY',
                'CQ ROCKY - GLADSTONE',
                'CQ WEST',
                'CQ WHITSUNDAYS',
                'NQ NORTH COAST',
                'NQ NORTH WEST',
                'NQ TABLELANDS',
                'NQ TOWNSVILLE',
                'SEQ BRISBANE NORTHSIDE',
                'SEQ BRISBANE SOUTHSIDE',
                'SEQ IPSWICH',
                'SEQ LOGAN - GOLD COAST',
                'SEQ SUNSHINE COAST & HINTERLAND',
                'SOUTHERN',
                'SQ BORDER',
                'SQ DARLING DOWNS',
                'SQ KINGAROY',
                'SQ SOUTH WEST',
                'SQ WIDE BAY BURNETT'
            ].indexOf(r)
            return `//*[@id="BookingSearchForm:region_${index}"]`
        },
    }
};
