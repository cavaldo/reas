export const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
        type: "",
        region: "",
        district: "",
        personal_data: {
            name: "",
            phone: "",
            email: ""
        }
    })
}

export const url = '';