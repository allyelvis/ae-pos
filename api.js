const EBMS_BASE_URL = 'https://ebms.obr.gov.bi:9443/ebms_api';
const BEARER_TOKEN = 'your_token_here';

// Post invoice to EBMS
function postInvoice(invoiceData) {
    fetch(`${EBMS_BASE_URL}/addInvoice`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${BEARER_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(invoiceData)
    })
    .then(response => response.json())
    .then(data => console.log('Invoice posted:', data))
    .catch(error => console.error('Error posting invoice:', error));
}

// Post stock movement to EBMS
function postStockMovement(stockData) {
    fetch(`${EBMS_BASE_URL}/addStockmovement`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${BEARER_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(stockData)
    })
    .then(response => response.json())
    .then(data => console.log('Stock movement posted:', data))
    .catch(error => console.error('Error posting stock movement:', error));
}
