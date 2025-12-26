// Test script to submit a lead
const testLead = {
    name: "Test Patient",
    phone: "9876543210",
    email: "test@example.com",
    condition: "knee-pain",
    preferredLocation: "hsr-layout",
    preferredDate: new Date().toISOString().split('T')[0],
    message: "This is a test submission",
    source: "website",
    submittedAt: new Date().toISOString(),
    utm_params: {
        utm_source: "test",
        utm_medium: "manual",
        utm_campaign: "debugging"
    }
};

fetch('http://localhost:3000/api/leads', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(testLead),
})
    .then(response => response.json())
    .then(data => {
        console.log('✅ Response:', JSON.stringify(data, null, 2));
    })
    .catch(error => {
        console.error('❌ Error:', error);
    });
