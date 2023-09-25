const baseURL = "https://www.simplilocalize.com/simplylocalizeapi/api/InstantPhrase";



async function customFetch(url, options) {   
    const response = await fetch(url, options);
    return response;
}

export const API = {
    validateAPI: async ({ validatedata }) =>
        customFetch(`${baseURL}/validate-instant-api-key`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(validatedata)
        }),

   
    addphrase: async ({ addphrasedata }) =>
        customFetch(`${baseURL}/add-instant-phrase`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addphrasedata)
        }),

        gettranslations: async ({ gettranslationdata }) =>
        customFetch(`${baseURL}/get-translations`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gettranslationdata)
        }),


};

